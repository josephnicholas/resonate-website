import { Link, type LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'

type CardGridProps = {
  /** Most columns the grid reaches on wide screens. Needs a `wide` section for 4. */
  columns?: 2 | 4
  children: ReactNode
}

/** A grid of `Card`s: one column on phones, two from `sm`, optionally four from `xl`. */
export function CardGrid({ columns = 2, children }: CardGridProps) {
  return (
    <ul className={`mt-8 grid gap-6 text-left sm:grid-cols-2 ${columns === 4 ? 'xl:grid-cols-4' : ''}`}>
      {children}
    </ul>
  )
}

type CardProps = {
  title: string
  /** Makes the title a link. Omit for things without a page of their own. */
  to?: LinkProps['to']
  /** The card's description copy. */
  children: ReactNode
}

/** A titled card with a short description. Must sit inside a `CardGrid`. */
export function Card({ title, to, children }: CardProps) {
  return (
    <li className="rounded-lg bg-neutral-100 p-6 shadow-md">
      <h3 className="font-heading text-lg font-semibold">
        {to ? (
          <Link to={to} className="text-primary-600 hover:text-accent-600 hover:underline">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-neutral-700">{children}</p>
    </li>
  )
}
