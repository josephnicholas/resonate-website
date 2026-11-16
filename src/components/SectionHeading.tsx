import type { ReactNode } from 'react'

/** A section's `h2`. Always centred, whatever the section's body alignment. */
export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl">{children}</h2>
}
