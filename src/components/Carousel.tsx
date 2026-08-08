import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { AUTOPLAY_DELAY_MS } from './carousel-constants'

interface CarouselSlide {
  src: string
  alt: string
}

interface CarouselProps {
  slides: CarouselSlide[]
  label: string
}

export function Carousel({ slides, label }: CarouselProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion)
  const [isHovering, setIsHovering] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const isInteracting = isHovering || isFocused || isTouching
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi || !isPlaying || isInteracting) return

    const id = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_DELAY_MS)
    return () => window.clearInterval(id)
  }, [emblaApi, isPlaying, isInteracting])

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(event.relatedTarget as Node | null)) {
      setIsFocused(false)
    }
  }

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
      onTouchStart={() => setIsTouching(true)}
      onTouchEnd={() => setIsTouching(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className="min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
              aria-current={index === selectedIndex ? 'true' : undefined}
              aria-hidden={index === selectedIndex ? undefined : 'true'}
            >
              <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="rounded-full bg-primary-900/60 p-2 text-white hover:bg-primary-900/80"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          className="rounded-full bg-primary-900/60 p-2 text-white hover:bg-primary-900/80"
        >
          {isPlaying ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M7 5l12 7-12 7V5z" />
            </svg>
          )}
        </button>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="rounded-full bg-primary-900/60 p-2 text-white hover:bg-primary-900/80"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
