import { createFileRoute, Link } from '@tanstack/react-router'
import { DraftNotice } from '../components/DraftNotice'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">About Us</h1>

        <DraftNotice />

        <p className="mt-6 font-body text-lg leading-relaxed">
          Resonate Music Therapy Studio offers specialized music therapy services to individuals and groups of
          all ages and abilities, alongside Adaptive Music Lessons, Tempo Tunes, and Company Team Building
          Activities.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl">Our Mission</h2>
        <p className="mt-4 font-body text-lg leading-relaxed">
          We&rsquo;re committed to providing inclusive, welcoming support to everyone who walks through our
          doors. Whether you&rsquo;re seeking therapeutic intervention or simply exploring the healing power of
          music, our credentialed team is here to help you on your journey.
        </p>
      </section>

      <section className="bg-secondary-100 px-4 py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Where We Are</h2>
          <p className="mt-4 font-body text-lg leading-relaxed">
            Our studio is based in Dumaguete City, Negros Oriental &mdash; the only music therapy studio in the
            Visayas region. We welcome clients from across the region who are looking for clinical music
            therapy, adaptive music lessons, or Tempo Tunes enrichment close to home.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Want to Know More?</h2>
        <p className="mt-4 font-body text-lg leading-relaxed">
          Reach out to ask questions, or explore our services to see what might be the right fit for you or your
          family.
        </p>
        <p className="mt-6">
          <Link
            to="/contact"
            className="font-heading font-medium text-primary-600 underline hover:text-accent-600"
          >
            Contact us
          </Link>
        </p>
      </section>
    </main>
  )
}
