import type { ReactNode } from 'react'
import { proseChildren } from './prose'

type SplitProps = {
  /** The picture: an `<img>`, `ImagePlaceholder`, or `StudioVideo`. */
  media: ReactNode
  /** Put the picture on the right from `lg` up. It is always first on phones. */
  mediaRight?: boolean
  children: ReactNode
}

/**
 * A section with a picture beside its copy: two columns from `lg`, stacked below.
 * Copy is left-aligned; use `<SectionHeading align="left">` inside it.
 * Direct `<p>` children are styled as body copy.
 */
export function Split({ media, mediaRight = false, children }: SplitProps) {
  return (
    <section data-ground="plain" className="mx-auto max-w-6xl px-4 py-12 lg:py-16 [[data-ground=plain]+&]:pt-0">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={mediaRight ? 'lg:order-last' : ''}>{media}</div>
        <div className={proseChildren}>{children}</div>
      </div>
    </section>
  )
}

/** Shared frame for a photo in a `Split`, so every picture gets the same shape and corner. */
export const splitImageClassName = 'aspect-[4/3] w-full rounded-2xl object-cover shadow-md'
