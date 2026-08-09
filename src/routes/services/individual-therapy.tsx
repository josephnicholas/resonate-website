import { createFileRoute, Link } from '@tanstack/react-router'
import { DraftNotice } from '../../components/DraftNotice'

export const Route = createFileRoute('/services/individual-therapy')({
  component: IndividualTherapyPage,
})

const expectations = [
  'Sessions are one-on-one between a single client and a credentialed music therapist.',
  'Each session is built around an individualized treatment plan, shaped by the goals identified together with the client (and, where relevant, their family or care team).',
  "Well suited to clients who want focused, one-on-one attention, or whose goals are easier to work toward outside a group setting.",
  'Open to people of all ages and abilities — no musical background or ability is required.',
]

function IndividualTherapyPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Individual Therapy</h1>

        <DraftNotice />

        <p className="mt-6 font-body text-lg leading-relaxed">
          Individual Therapy is Resonate&rsquo;s one-on-one music therapy service &mdash; sessions between a
          single client and a credentialed music therapist, built around that client&rsquo;s specific needs
          and goals. It&rsquo;s one of two formats we offer for our core clinical service; the other is Group
          Therapy.
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
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Individual Therapy vs. Group Therapy</h2>
          <p className="mt-4 font-body text-lg leading-relaxed">
            Individual Therapy and Group Therapy are both music therapy &mdash; delivered by a credentialed
            professional, working toward each client&rsquo;s specific goals. The difference is format:
            Individual Therapy is one-on-one, while Group Therapy brings together at least three
            neurodivergent children at a time with a focus on social skills. Some clients benefit from one,
            some from the other, and some from both.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Ready to Learn More</h2>
        <p className="mt-4 font-body text-lg leading-relaxed">
          Individual Therapy is one part of a broader set of services for people of all ages and abilities.
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
