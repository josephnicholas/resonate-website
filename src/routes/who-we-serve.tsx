import { createFileRoute, Link } from '@tanstack/react-router'
import { DraftNotice } from '../components/DraftNotice'

export const Route = createFileRoute('/who-we-serve')({
  component: WhoWeServePage,
})

const populations = [
  {
    title: 'Individuals and Groups of All Ages and Abilities',
    description:
      'Our core music therapy services are offered one-on-one and in groups, and are shaped around each client’s own goals — whatever their age or ability.',
  },
  {
    title: 'Neurodivergent Children',
    description:
      'Our group therapy sessions bring together at least three neurodivergent children at a time, with a focus on building social skills.',
  },
  {
    title: 'Companies',
    description:
      'We run team building activities for corporate clients, using music-based group activities to improve communication, collaboration, and morale.',
  },
  {
    title: 'Babies, Toddlers, and Preschoolers',
    description:
      'Tempo Tunes is our 10-day, play-based music enrichment program for babies, toddlers, and preschoolers, using live music in almost all of our classes.',
  },
] as const

function WhoWeServePage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Who We Serve</h1>

        <DraftNotice />

        <p className="mt-6 font-body text-lg leading-relaxed">
          Resonate Music Therapy Studio welcomes a wide range of clients. This page draws together who we serve
          from across our services &mdash; individuals and groups of all ages and abilities, neurodivergent
          children, companies, and babies, toddlers, and preschoolers.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl">Populations We Serve</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {populations.map((population) => (
            <li key={population.title} className="rounded-lg bg-neutral-100 p-6 shadow-md">
              <h3 className="font-heading text-lg font-semibold">{population.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-neutral-700">
                {population.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Find the Right Fit</h2>
        <p className="mt-4 font-body text-lg leading-relaxed">
          Not sure which service fits your needs? Explore our full range of services, or reach out and we can
          help you figure out the right starting point.
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
