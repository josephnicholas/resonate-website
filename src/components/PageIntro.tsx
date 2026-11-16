import type { ReactNode } from 'react'
import { DraftNotice } from './DraftNotice'

type PageIntroProps = {
  /** The page's `h1`. */
  title: string
  /** Marks the page as awaiting the studio owner's review. Drop it to sign the page off. */
  draft?: boolean
  /** The lead paragraph's copy. */
  children: ReactNode
}

/** The opening block of every page: `h1`, optional draft notice, lead paragraph. */
export function PageIntro({ title, draft = false, children }: PageIntroProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">{title}</h1>

      {draft && <DraftNotice />}

      <p className="mt-6 font-body text-lg leading-relaxed">{children}</p>
    </section>
  )
}
