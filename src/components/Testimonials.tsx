import { testimonials } from '../site/testimonials'
import { ToConfirm } from './ToConfirm'

/**
 * The family testimonials from `src/site/testimonials.ts`, as a row of quote
 * cards. A slot with no quote yet renders a marked placeholder instead.
 * Needs a wide container to go three-across.
 */
export function Testimonials() {
  return (
    <ul className="mt-8 grid gap-6 text-left md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <li key={index} className="rounded-2xl bg-neutral-100 p-6 shadow-md">
          <figure>
            <blockquote className="font-body text-lg leading-relaxed">
              {testimonial.quote ? (
                <>&ldquo;{testimonial.quote}&rdquo;</>
              ) : (
                <ToConfirm>a family&rsquo;s own words, with their consent to appear on the website</ToConfirm>
              )}
            </blockquote>
            <figcaption className="mt-4 font-body text-sm text-neutral-600">
              &mdash; {testimonial.attribution ?? <ToConfirm>how the family wishes to be credited</ToConfirm>}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}
