import type { ReactNode } from 'react'

type SectionHeadingProps = {
  /** Centred by default; `left` is for headings inside a `Split`. */
  align?: 'center' | 'left'
  children: ReactNode
}

/** A section's `h2`. */
export function SectionHeading({ align = 'center', children }: SectionHeadingProps) {
  return (
    <h2 className={`font-heading text-2xl font-semibold sm:text-3xl ${align === 'center' ? 'text-center' : ''}`}>
      {children}
    </h2>
  )
}
