import { Link, type LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'

type CtaLinkProps = {
  to: LinkProps['to']
  children: ReactNode
}

/** A standalone call-to-action link to another page, on its own line at the end of a section. */
export function CtaLink({ to, children }: CtaLinkProps) {
  return (
    <div className="mt-6">
      <Link to={to} className="font-heading font-medium text-primary-600 underline hover:text-accent-600">
        {children}
      </Link>
    </div>
  )
}
