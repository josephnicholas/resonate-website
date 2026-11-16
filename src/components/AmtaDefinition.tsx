import { Band } from './Band'
import { SectionHeading } from './SectionHeading'

export function AmtaDefinition() {
  return (
    <Band>
      <SectionHeading>What is Music Therapy</SectionHeading>
      <figure>
        <blockquote className="mt-4 font-body text-lg italic leading-relaxed">
          &ldquo;A clinical and evidence-based application of music interventions to accomplish
          individualized goals within the therapeutic relationship by a credentialed professional who has
          completed an approved music therapy program.&rdquo;
        </blockquote>
        <figcaption className="mt-2 font-body text-sm not-italic text-neutral-600">
          &mdash; American Music Therapy Association
        </figcaption>
      </figure>
    </Band>
  )
}
