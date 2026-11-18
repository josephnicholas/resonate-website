import { Link, type LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-heading text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'

// Each variant is a contrast-safe pair (see e2e/accessibility.spec.ts):
// `primary` anywhere, `secondary` on light grounds, `onDark` on navy or photo overlays.
// `primary`'s focus indicator is two-tone so it reads on any ground: the magenta
// outline carries it on light grounds, the white ring at the button's edge on navy.
const variants = {
  primary:
    'bg-accent-600 text-white hover:bg-accent-700 focus-visible:outline-accent-700 focus-visible:ring-2 focus-visible:ring-white',
  secondary:
    'border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white focus-visible:outline-primary-700',
  onDark: 'border-2 border-white text-white hover:bg-white hover:text-primary-800 focus-visible:outline-white',
} as const

type ButtonLinkProps = {
  variant?: keyof typeof variants
  /** Slimmer padding, for the header. */
  compact?: boolean
  children: ReactNode
  onClick?: () => void
} & (
  | { /** A page on this site. */ to: LinkProps['to']; href?: never }
  | { /** An external URL, `tel:`/`mailto:` link, or in-page `#anchor`. */ href: string; to?: never }
)

/** A link styled as a button: the site's call-to-action. External URLs open in a new tab. */
export function ButtonLink(props: ButtonLinkProps) {
  const { variant = 'primary', compact = false, children, onClick } = props
  const className = `${base} ${variants[variant]} ${compact ? 'px-4 py-2 text-sm' : ''}`

  if (props.href === undefined) {
    return (
      <Link to={props.to} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  const external = /^https?:/.test(props.href)
  return (
    <a
      href={props.href}
      className={className}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

/** A row of `ButtonLink`s at the end of a block; wraps on narrow screens. */
export function ButtonRow({ align = 'center', children }: { align?: 'center' | 'left'; children: ReactNode }) {
  return (
    <div className={`mt-8 flex flex-wrap gap-4 ${align === 'center' ? 'sm:justify-center' : ''}`}>{children}</div>
  )
}
