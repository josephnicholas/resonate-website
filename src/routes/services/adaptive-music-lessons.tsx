import { createFileRoute, Link } from '@tanstack/react-router'
import { DraftNotice } from '../../components/DraftNotice'

export const Route = createFileRoute('/services/adaptive-music-lessons')({
  component: AdaptiveMusicLessonsPage,
})

const expectations = [
  "Voice, piano, and guitar lessons, adapted to an individual's abilities and needs.",
  'Instructional, not clinical therapy — the goal is building musical skill itself, not working toward a separate therapeutic outcome.',
  'A good fit for clients who want to learn an instrument or grow as a musician, with instruction paced and adapted to how they learn best.',
  'Open to people of all ages and abilities, with no prior musical experience required.',
]

function AdaptiveMusicLessonsPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Adaptive Music Lessons</h1>

        <DraftNotice />

        <p className="mt-6 font-body text-lg leading-relaxed">
          Adaptive Music Lessons are Resonate&rsquo;s voice, piano, and guitar lessons, adapted to an
          individual&rsquo;s abilities and needs. Unlike our music therapy services, lessons are instructional
          rather than clinical &mdash; the goal is musical skill itself.
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
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            Adaptive Music Lessons vs. Music Therapy
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed">
            These are two different offerings at Resonate, and we want to be clear about the distinction.
            Adaptive Music Lessons &mdash; our voice, piano, and guitar lessons adapted to an
            individual&rsquo;s abilities and needs &mdash; are instructional, not clinical therapy. Music
            therapy, by contrast, is a clinical, goal-directed treatment delivered by a credentialed
            professional. If you&rsquo;re not sure which is the right fit, reach out and we can help you
            figure that out.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Ready to Learn More</h2>
        <p className="mt-4 font-body text-lg leading-relaxed">
          Adaptive Music Lessons are one part of a broader set of services for people of all ages and
          abilities.
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
