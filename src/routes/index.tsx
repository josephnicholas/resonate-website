import { createFileRoute, Link } from '@tanstack/react-router'
import { AmtaDefinition } from '../components/AmtaDefinition'
import { ButtonLink, ButtonRow } from '../components/ButtonLink'
import { ClosingCta } from '../components/ClosingCta'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCards } from '../components/ServiceCards'
import { StudioVideo } from '../components/StudioVideo'
import { TAGLINE } from '../site/contact'
import { siteRoute } from '../site/routes'
import heroPhoto from '../assets/studio-session.jpg'
import servicesBg from '../assets/services-bg.jpg'
import ttkBg from '../assets/kids-background-ttk.jpg'
import tempoTunesLogo from '../assets/tempokids.png'

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
        className="relative bg-cover bg-top px-4 py-20 sm:py-28"
        style={{ backgroundImage: `url(${heroPhoto})` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-primary-900/85" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-secondary-300">
            The only music therapy studio in the Visayas &middot; Dumaguete City
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
            {siteRoute('/').heading}
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-white sm:text-xl">{TAGLINE}</p>
          <ButtonRow>
            <ButtonLink to="/contact">Get in touch</ButtonLink>
            <ButtonLink href="#our-story" variant="onDark">
              Watch our story (2 min)
            </ButtonLink>
          </ButtonRow>
        </div>
      </section>

      <Section wide>
        <div id="our-story" className="mx-auto max-w-4xl scroll-mt-24">
          <SectionHeading>See the Studio</SectionHeading>
          <p className="mx-auto mt-4 max-w-3xl font-body text-lg leading-relaxed">
            Resonate Music Therapy Studio is located in Dumaguete City, Negros Oriental. We offer specialized
            music therapy services to individuals and groups of all ages and abilities, and we&rsquo;re committed
            to providing inclusive, welcoming support to everyone who walks through our doors.
          </p>
          <div className="mt-8">
            <StudioVideo />
          </div>
        </div>
      </Section>

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

      <ClosingCta heading="Not Sure Where to Start?" secondary={{ to: '/who-we-serve', label: 'See who we serve' }}>
        <p>Tell us a little about who the sessions are for, and we&rsquo;ll help you find the right fit.</p>
      </ClosingCta>
    </main>
  )
}
