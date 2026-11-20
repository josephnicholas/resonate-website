import type { ReactNode } from 'react'

/**
 * Marks a fact the studio owner has not supplied yet — a name, a price, a
 * schedule — in the place the real copy will go. The text counterpart of
 * `ImagePlaceholder`: describe what is missing, never guess at the answer.
 *
 * Shares the draft notice's contrast-safe colour pair, so it must sit on a
 * light ground. `grep -r "<ToConfirm" src` lists everything still outstanding.
 */
export function ToConfirm({ children }: { children: ReactNode }) {
  return (
    <mark className="box-decoration-clone rounded border border-dashed border-secondary-400 bg-secondary-100 px-1.5 py-0.5 font-body text-[0.9em] font-normal not-italic text-primary-700">
      <strong className="font-heading font-semibold">To confirm:</strong> {children}
    </mark>
  )
}
