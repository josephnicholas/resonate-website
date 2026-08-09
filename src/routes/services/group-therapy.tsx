import { createFileRoute, Link } from '@tanstack/react-router'
import { DraftNotice } from '../../components/DraftNotice'

export const Route = createFileRoute('/services/group-therapy')({
  component: GroupTherapyPage,
})

const expectations = [
  'Sessions run with at least three neurodivergent children per group, led by a credentialed music therapist.',
  'The primary focus is building social skills — turn-taking, shared attention, and communication — through structured musical activities.',
  "Group activities like playing instruments together create natural, repeatable opportunities for the kind of social interaction that's harder to practice one-on-one.",
  'No musical background or ability is required to take part or benefit.',
]

function GroupTherapyPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Group Therapy</h1>

        <DraftNotice />

        <p className="mt-6 font-body text-lg leading-relaxed">
          Group Therapy is Resonate&rsquo;s music therapy service for neurodivergent children, run in groups
          of at least three clients at a time. Sessions are led by a credentialed music therapist and focus
          on building social skills through shared musical activities.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl">What to Expect</h2>
        <ul className="mx-auto mt-8 grid max-w-2xl gap-4 text-left">
          {expectations.map((point) => (
            <li key={point} className="rounded-lg bg-neutral-100 p-4 font-body text-sm leading-relaxed shadow-md">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary-100 px-4 py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Group Therapy vs. Individual Therapy</h2>
          <p className="mt-4 font-body text-lg leading-relaxed">
            Group Therapy and Individual Therapy are both music therapy &mdash; delivered by a credentialed
            professional, working toward each client&rsquo;s specific goals. The difference is format: Group
            Therapy brings together at least three neurodivergent children at a time with a focus on social
            skills, while Individual Therapy is one-on-one. Some clients benefit from one, some from the
            other, and some from both.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Ready to Learn More</h2>
        <p className="mt-4 font-body text-lg leading-relaxed">
          Group Therapy is one part of a broader set of services for people of all ages and abilities.
        </p>
        <p className="mt-6">
          <Link
            to="/services"
            className="font-heading font-medium text-primary-600 underline hover:text-accent-600"
          >
            View our services
          </Link>
        </p>
      </section>
    </main>
  )
}
