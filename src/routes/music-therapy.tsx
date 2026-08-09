import { createFileRoute, Link } from '@tanstack/react-router'
import { AmtaDefinition } from '../components/AmtaDefinition'
import { DraftNotice } from '../components/DraftNotice'

export const Route = createFileRoute('/music-therapy')({
  component: MusicTherapyPage,
})

const sessionPoints = [
  'Sessions are built around an individualized treatment plan, shaped by goals identified together with the client (and, where relevant, their family or care team).',
  'Progress is tracked and the plan is adjusted over time, the way any other clinical therapy is monitored and refined.',
  'Musical skill is never the goal in itself — music is the tool used to work toward non-musical goals like communication, motor skills, emotional regulation, or social connection.',
  'No musical background or ability is required to take part or benefit.',
]

function MusicTherapyPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Music Therapy</h1>

        <DraftNotice />

        <p className="mt-6 font-body text-lg leading-relaxed">
          Music therapy is Resonate Music Therapy Studio&rsquo;s core clinical service &mdash; a therapeutic
          practice delivered by a credentialed professional, distinct from music lessons or classes. This page
          goes into more depth on what that means than the short overview on the home page.
        </p>
      </section>

      <AmtaDefinition />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl">What to Expect in a Session</h2>
        <ul className="mx-auto mt-8 grid max-w-2xl gap-4 text-left">
          {sessionPoints.map((point) => (
            <li key={point} className="rounded-lg bg-neutral-100 p-4 font-body text-sm leading-relaxed shadow-md">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary-100 px-4 py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Music Therapy vs. Adaptive Music Lessons</h2>
          <p className="mt-4 font-body text-lg leading-relaxed">
            These are two different offerings at Resonate, and we want to be clear about the distinction. Music
            therapy is a clinical, goal-directed treatment delivered by a credentialed professional. Adaptive
            Music Lessons &mdash; our voice, piano, and guitar lessons adapted to an individual&rsquo;s abilities
            and needs &mdash; are instructional, not clinical therapy. If you&rsquo;re not sure which is the right
            fit, reach out and we can help you figure that out.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Ready to Learn More</h2>
        <p className="mt-4 font-body text-lg leading-relaxed">
          Music therapy at Resonate is offered individually and in groups, and is one part of a broader set of
          services for people of all ages and abilities.
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
