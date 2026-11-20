const rings = [
  { r: 58, opacity: 0.55 },
  { r: 70, opacity: 0.4 },
  { r: 84, opacity: 0.28 },
  { r: 100, opacity: 0.18 },
  { r: 118, opacity: 0.1 },
]

type ResonanceRingsProps = {
  /** Positions and sizes the rings; they are centred on their own box. */
  className: string
  /** Ripple outward once on load (Home's hero only). Skipped under reduced motion. */
  animated?: boolean
}

/**
 * The logo's concentric rings, the site's one decorative motif. Drawn on navy
 * grounds only (Home's hero and every page's `PageIntro`), and always decorative.
 */
export function ResonanceRings({ className, animated = false }: ResonanceRingsProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="-120 -120 240 240"
      className={`pointer-events-none overflow-visible ${className}`}
    >
      {rings.map((ring, index) => (
        <circle
          key={ring.r}
          r={ring.r}
          fill="none"
          stroke="var(--color-secondary-400)"
          strokeWidth={index === 0 ? 2 : 1.5}
          strokeOpacity={ring.opacity}
          className={animated ? 'origin-center motion-safe:animate-resonate' : undefined}
          style={animated ? { animationDelay: `${index * 140}ms` } : undefined}
        />
      ))}
    </svg>
  )
}
