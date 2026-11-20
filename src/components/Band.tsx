import type { ReactNode } from 'react'
import { proseChildren } from './prose'

/**
 * A full-bleed tinted section, used to set one block of a page apart.
 * Direct `<p>` children are styled as body copy.
 */
export function Band({ wide = false, children }: { /** Widen the column, for a row of cards. */ wide?: boolean; children: ReactNode }) {
  return (
    <section className="bg-secondary-100 px-4 py-12 sm:text-center lg:py-16">
      <div className={`mx-auto ${wide ? 'max-w-6xl' : 'max-w-3xl'} ${proseChildren}`}>{children}</div>
    </section>
  )
}
