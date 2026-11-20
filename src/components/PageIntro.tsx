import type { ReactNode } from 'react'
import { DraftNotice } from './DraftNotice'
import { ResonanceRings } from './ResonanceRings'

type PageIntroProps = {
  /** The page's `h1`. */
  title: string
  /** Marks the page as awaiting the studio owner's review. Drop it to sign the page off. */
  draft?: boolean
  /** The lead paragraph's copy. Sits on navy: any link in it must use `textLinkOnDark`. */
  children: ReactNode
}

/**
 * The opening block of every page but Home: a navy band carrying the `h1`,
 * optional draft notice, and lead paragraph, left-aligned, with the logo's
 * rings at its edge. The quieter sibling of Home's hero (same ground, same
 * motif, no photo or motion), so every page opens the same way.
 */
export function PageIntro({ title, draft = false, children }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-900 px-4 py-12 sm:py-16">
      {/* Kept clear of the copy: tucked into the top corner on phones, off the right edge from `lg`. */}
      <ResonanceRings className="absolute top-0 right-0 h-72 w-72 translate-x-1/2 -translate-y-1/2 lg:top-1/2 lg:h-[36rem] lg:w-[36rem] lg:translate-x-1/3" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>

          {draft && <DraftNotice />}

          <p className="mt-6 font-body text-lg leading-relaxed text-primary-100 sm:text-xl">{children}</p>
        </div>
      </div>
    </section>
  )
}
