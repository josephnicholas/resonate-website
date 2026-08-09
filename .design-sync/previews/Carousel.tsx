import { Carousel } from 'resonate-website'
import { carouselSlides } from './carousel-slides'

// The home page hero carousel: studio photos, an accessible region label, and
// the overlaid previous / play-pause / next controls. Autoplay starts on its
// own and pauses on hover, focus or touch — and stays off entirely for visitors
// who prefer reduced motion.
export const PhotoCarousel = () => (
  <Carousel slides={carouselSlides} label="Photos from Resonate Music Therapy Studio" />
)

// Constrained to a column rather than full width — the slides keep their aspect
// ratio and the controls stay pinned to the bottom of the frame.
export const InAColumn = () => (
  <div className="mx-auto max-w-md">
    <Carousel slides={carouselSlides} label="Photos from a group therapy session" />
  </div>
)
