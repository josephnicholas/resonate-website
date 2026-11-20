import { Link, type LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'

type CardGridProps = {
  /** Most columns the grid reaches on wide screens. Needs a `wide` section for 4. */
  columns?: 2 | 4
  children: ReactNode
}

/**
 * A grid of `Card`s: one column on phones, two from `sm`, optionally four from `xl`.
 * In a two-column grid, an odd last card spans the row rather than leaving a hole beside it.
 */
export function CardGrid({ columns = 2, children }: CardGridProps) {
  return (
    <ul className={`mt-8 grid gap-6 text-left sm:grid-cols-2 ${columns === 4 ? 'xl:grid-cols-4' : 'sm:[&>li:last-child:nth-child(odd)]:col-span-2'}`}>
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

/**
 * A titled card with a short description. Must sit inside a `CardGrid`.
 *
 * A card with a page is clickable as a whole: the title link stretches over the
 * card (its accessible name stays the title), and a "Learn more" cue sets it
 * apart from cards with no page of their own. Copy inside such a card must not
 * hold links of its own, since the stretched link sits over them.
 */
export function Card({ title, to, children }: CardProps) {
  if (!to) {
    return (
      <li className="rounded-xl bg-neutral-100 p-6 shadow-md">
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        <p className="mt-2 font-body leading-relaxed text-neutral-700">{children}</p>
      </li>
    )
  }

  return (
    <li className="group relative flex flex-col rounded-xl bg-neutral-100 p-6 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary-600 has-[a:focus-visible]:ring-offset-2 has-[a:focus-visible]:ring-offset-neutral-50 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <h3 className="font-heading text-lg font-semibold">
        <Link
          to={to}
          className="text-primary-600 underline-offset-4 outline-none transition-colors group-hover:text-accent-700 group-hover:underline after:absolute after:inset-0 after:rounded-xl"
        >
          {title}
        </Link>
      </h3>
      <p className="mt-2 font-body leading-relaxed text-neutral-700">{children}</p>
      <span
        aria-hidden="true"
        className="mt-auto pt-4 font-heading text-sm font-semibold text-primary-700 transition-colors group-hover:text-accent-700"
      >
        Learn more <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transition-none">&rarr;</span>
      </span>
    </li>
  )
}
