import type { ReactNode } from 'react'
import { SectionHeading } from './SectionHeading'

type ComparisonProps = {
  /** The two things being compared, in display order. */
  items: readonly [ComparisonItem, ComparisonItem]
  /** A closing line under both columns. */
  children?: ReactNode
}

type ComparisonItem = { title: string; description: string }

/** A tinted band setting two offerings side by side. Its heading is "A vs. B", from the item titles. */
export function Comparison({ items, children }: ComparisonProps) {
  return (
    <section className="bg-secondary-100 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>
          {items[0].title} vs. {items[1].title}
        </SectionHeading>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="rounded-2xl bg-neutral-50 p-6 shadow-md">
              <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 font-body leading-relaxed text-neutral-700">{item.description}</p>
            </li>
          ))}
        </ul>
        {children && (
          <p className="mx-auto mt-8 max-w-2xl text-center font-body text-lg leading-relaxed">{children}</p>
        )}
      </div>
    </section>
  )
}

const musicTherapy = {
  title: 'Music Therapy',
  description:
    'A clinical, goal-directed treatment delivered by a credentialed professional. Music is the tool; the goals are non-musical, like communication or emotional regulation.',
}
const adaptiveLessons = {
  title: 'Adaptive Music Lessons',
  description:
    'Voice, piano, and guitar lessons adapted to an individual’s abilities and needs. Instructional, not clinical therapy: the goal is musical skill itself.',
}
const individualTherapy = {
  title: 'Individual Therapy',
  description: 'One-on-one sessions between a single client and a credentialed music therapist.',
}
const groupTherapy = {
  title: 'Group Therapy',
  description: 'At least three neurodivergent children per session, with a focus on building social skills.',
}

/** Music Therapy against Adaptive Music Lessons; `lead` names the page it is on, which goes first. */
export function TherapyVsLessons({ lead }: { lead: 'therapy' | 'lessons' }) {
  return (
    <Comparison items={lead === 'therapy' ? [musicTherapy, adaptiveLessons] : [adaptiveLessons, musicTherapy]}>
      Not sure which is the right fit? Reach out and we can help you figure that out.
    </Comparison>
  )
}

/** Individual Therapy against Group Therapy; `lead` names the page it is on, which goes first. */
export function IndividualVsGroup({ lead }: { lead: 'individual' | 'group' }) {
  return (
    <Comparison
      items={lead === 'individual' ? [individualTherapy, groupTherapy] : [groupTherapy, individualTherapy]}
    >
      Both are music therapy, delivered by a credentialed professional and working toward each
      client&rsquo;s specific goals. Some clients benefit from one, some from the other, and some from both.
    </Comparison>
  )
}
