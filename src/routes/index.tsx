import { createFileRoute, Link } from '@tanstack/react-router'
import { Band } from '../components/Band'
import { AmtaDefinition } from '../components/AmtaDefinition'
import { ButtonLink, ButtonRow } from '../components/ButtonLink'
import { ClosingCta } from '../components/ClosingCta'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { ResonanceRings } from '../components/ResonanceRings'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCards } from '../components/ServiceCards'
import { Split } from '../components/Split'
import { StudioVideo } from '../components/StudioVideo'
import { Testimonials } from '../components/Testimonials'
import { textLink } from '../components/prose'
import { TAGLINE } from '../site/contact'
import { siteRoute } from '../site/routes'
import { tempoTune } from '../site/tempo-tune.ts'
import heroPhoto from '../assets/studio-session.jpg'
import tempoTunesLogo from '../assets/tempokids.png'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      {/*
        The hero: a still from the studio's film, uncovered, inside the logo's
        own mark (concentric rings, for resonance), which ripple out once on load.
      */}
      <section className="relative overflow-hidden bg-primary-900 px-4 py-14 sm:py-20 lg:py-24">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <div className="relative mx-auto aspect-square w-60 sm:w-72 lg:order-last lg:w-[26rem]">
            <ResonanceRings
              animated
              className="absolute top-1/2 left-1/2 h-[230%] w-[230%] -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={heroPhoto}
              alt="A music therapist and a client playing piano side by side at the studio"
              fetchPriority="high"
              className="relative h-full w-full rounded-full object-cover object-[58%_50%] ring-4 ring-secondary-300"
            />
          </div>

          <div className="relative max-w-xl">
            <h1 className="font-heading text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              {siteRoute('/').heading}
            </h1>
            <p className="mt-6 font-heading text-xl font-medium text-secondary-200 sm:text-2xl">{TAGLINE}</p>
            <ButtonRow align="left">
              <ButtonLink to="/contact">Get in touch</ButtonLink>
              <ButtonLink href="#our-story" variant="onDark">
                Watch our story (2 min)
              </ButtonLink>
            </ButtonRow>
            <p className="mt-10 max-w-md font-body text-base leading-relaxed text-primary-100">
              We&rsquo;re in Dumaguete City, and we&rsquo;re the only music therapy studio in the Visayas.
            </p>
          </div>
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

      <Section wide>
        <SectionHeading>Our Services</SectionHeading>

        <ServiceCards />

        <div className="mt-8 font-body">
          <Link to="/services" className={textLink}>
            View all services
          </Link>
        </div>
      </Section>

      <Band>
        <SectionHeading>{tempoTune.name}</SectionHeading>
        <img
          src={tempoTunesLogo}
          alt={tempoTune.name}
          loading="lazy"
          className="mx-auto mt-6 h-44 w-auto rounded-2xl bg-neutral-100 p-6 shadow-md"
        />
        <div className="mt-6 font-body text-lg leading-relaxed">{tempoTune.summary}</div>
        <ButtonRow>
          <ButtonLink to={tempoTune.path} variant="secondary">
            About {tempoTune.name}
          </ButtonLink>
        </ButtonRow>
      </Band>

      <Split
        media={
          <ImagePlaceholder
            className="aspect-[4/3] rounded-2xl"
            description="Portrait of the studio’s two music therapists (awaiting their agreement to be pictured)"
          />
        }
      >
        <SectionHeading align="left">Meet Our Team</SectionHeading>
        <p>
          Music therapy at Resonate is delivered by our two music therapists: the studio&rsquo;s founder and
          director, and a music therapist on our staff.
        </p>
        <ButtonRow align="left">
          <ButtonLink to="/about" variant="secondary">
            Meet the team
          </ButtonLink>
        </ButtonRow>
      </Split>

      <Band wide>
        <SectionHeading>What Families Say</SectionHeading>
        <Testimonials />
      </Band>

      <ClosingCta heading="Not Sure Where to Start?" secondary={{ to: '/getting-started', label: 'How to get started' }}>
        <p>Tell us a little about who the sessions are for, and we&rsquo;ll help you find the right fit.</p>
      </ClosingCta>
    </main>
  )
}
