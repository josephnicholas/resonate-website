import { createFileRoute, Link } from '@tanstack/react-router'
import { AmtaDefinition } from '../components/AmtaDefinition'
import { PageIntro } from '../components/PageIntro'
import { ServiceCards } from '../components/ServiceCards'
import servicesBg from '../assets/services-bg.jpg'
import ttkBg from '../assets/kids-background-ttk.jpg'
import tempoTunesLogo from '../assets/tempokids.png'
import logo from '../assets/logo.png'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const tempoTunesPoints = [
  'Learning and experiencing music boosts the brain and can positively impact a child’s development.',
  'Classes are filled with fun, entertaining activities that are also beneficial to the child.',
  'We provide a clean, safe environment and a loving atmosphere for learning.',
  'A play-based program that uses music to achieve both musical and non-musical goals.',
  'A great way for parents to spend time with their child and for families to bond together.',
  'We use live music in almost all of our classes.',
]

function HomePage() {
  return (
    <main>
      <section
        className="relative bg-cover bg-center px-4 py-72"
        style={{ backgroundImage: `url(${ttkBg})` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-primary-900/70" />
        {/* Decorative: the studio is already named by the nav logo and the h1 directly below. */}
        <img src={logo} alt="" className="relative z-10 mx-auto w-6/12" />
      </section>

      <PageIntro title="Music Therapy and Child Enrichment Services">
        Resonate Music Therapy Studio is the only music therapy studio in the Visayas, located in Dumaguete
        City, Negros Oriental. We offer specialized music therapy services to individuals and groups of all
        ages and abilities, and we&rsquo;re committed to providing inclusive, welcoming support to everyone who
        walks through our doors.
      </PageIntro>

      <AmtaDefinition />

      <section
        className="relative bg-cover bg-center px-4 py-12"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-primary-900/70" />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-2xl font-semibold text-white sm:text-3xl">Our Services</h2>

          <ServiceCards />

          <p className="mt-8 text-center">
            <Link to="/services" className="font-heading font-medium text-white underline hover:text-accent-200">
              View all services
            </Link>
          </p>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center px-4 py-12"
        style={{ backgroundImage: `url(${ttkBg})` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-primary-900/70" />
        <div className="relative mx-auto max-w-5xl text-center">
          <img src={tempoTunesLogo} alt="Tempo Tunes" className="mx-auto h-40 w-auto rounded-lg bg-neutral-50/90 p-3" />
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-white">
            A 10-day program that offers music enrichment classes to babies, toddlers, and preschoolers.
          </p>

          <ul className="mx-auto mt-8 grid max-w-4xl gap-6 text-left sm:grid-cols-2">
            {tempoTunesPoints.map((point) => (
              <li key={point} className="rounded-lg bg-neutral-50 p-4 font-body text-sm leading-relaxed shadow-md">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
