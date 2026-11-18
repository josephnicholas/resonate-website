import type { ReactNode } from 'react'
import { proseChildren } from './prose'

type SectionProps = {
  /** Body copy alignment. `center` (and headings) start from `sm`; phones read left-aligned. */
  align?: 'center' | 'left'
  /** Widen the column for card grids that go four-across. */
  wide?: boolean
  children: ReactNode
}

/** A page section on the plain page ground. Direct `<p>` children are styled as body copy. */
export function Section({ align = 'center', wide = false, children }: SectionProps) {
  return (
    <section
      className={`mx-auto px-4 py-12 lg:py-16 ${wide ? 'max-w-6xl' : 'max-w-3xl'} ${
        align === 'center' ? 'sm:text-center' : ''
      } ${proseChildren}`}
    >
      {children}
    </section>
  )
}
