/**
 * Body-paragraph styling that `Section` and `Band` apply to their direct `<p>`
 * children, so routes write plain `<p>` for body copy. A paragraph that needs
 * different spacing or size should not be a direct child (wrap it).
 */
export const proseChildren = '[&>p]:mt-4 [&>p]:font-body [&>p]:text-lg [&>p]:leading-relaxed'

/** An in-copy text link, in the contrast-safe colour pair for light grounds. */
export const textLink = 'font-medium text-primary-600 underline underline-offset-4 hover:text-accent-600'
