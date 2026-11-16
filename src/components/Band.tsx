import type { ReactNode } from 'react'
import { proseChildren } from './prose'

/**
 * A full-bleed tinted section, used to set one block of a page apart.
 * Direct `<p>` children are styled as body copy.
 */
export function Band({ children }: { children: ReactNode }) {
  return (
    <section className="bg-secondary-100 px-4 py-12 text-center">
      <div className={`mx-auto max-w-3xl ${proseChildren}`}>{children}</div>
    </section>
  )
}
