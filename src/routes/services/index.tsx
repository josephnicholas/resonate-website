import { createFileRoute, Link } from '@tanstack/react-router'
import { DraftNotice } from '../../components/DraftNotice'

export const Route = createFileRoute('/services/')({
  component: ServicesPage,
})

const offerings = [
  {
    title: 'Individual Therapy',
    description: "One-on-one music therapy sessions tailored to a single client's specific needs and goals.",
    to: '/services/individual-therapy',
  },
  {
    title: 'Group Therapy',
    description:
      'Music therapy sessions for neurodivergent children focused on improving social skills, run with at least three clients per session.',
    to: '/services/group-therapy',
  },
  {
    title: 'Adaptive Music Lessons',
    description: "Voice, piano, and guitar lessons adapted to an individual's abilities and needs.",
    to: '/services/adaptive-music-lessons',
  },
] as const

function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Our Services</h1>

        <DraftNotice />

        <p className="mt-6 font-body text-lg leading-relaxed">
          Resonate Music Therapy Studio offers four services: two formats of music therapy &mdash;
          Individual Therapy and Group Therapy &mdash; plus Adaptive Music Lessons and Company Team Building
          Activities. Explore each below to find the right fit.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl">What We Offer</h2>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {offerings.map((offering) => (
            <li key={offering.to} className="rounded-lg bg-neutral-100 p-6 shadow-md">
              <h3 className="font-heading text-lg font-semibold">
                <Link
                  to={offering.to}
                  className="text-primary-600 hover:text-accent-600 hover:underline"
                >
                  {offering.title}
                </Link>
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-neutral-700">{offering.description}</p>
            </li>
          ))}

          <li className="rounded-lg bg-neutral-100 p-6 shadow-md">
            <h3 className="font-heading text-lg font-semibold">Company Team Building Activities</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-neutral-700">
              Group activities for corporate clients aimed at improving team communication, collaboration, and
              morale.
            </p>
          </li>
        </ul>
      </section>

      <section className="bg-secondary-100 px-4 py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Not Sure Where to Start</h2>
          <p className="mt-4 font-body text-lg leading-relaxed">
            Not sure which service is the right fit? Take a look at who we serve, or reach out and we can help
            you find the right starting point.
          </p>
          <p className="mt-6">
            <Link
              to="/who-we-serve"
              className="font-heading font-medium text-primary-600 underline hover:text-accent-600"
            >
              See who we serve
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
