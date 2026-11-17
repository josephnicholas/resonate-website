import { createFileRoute } from '@tanstack/react-router'
import { Band } from '../components/Band'
import { ClosingCta } from '../components/ClosingCta'
import { PageIntro } from '../components/PageIntro'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Split } from '../components/Split'
import { StudioVideo } from '../components/StudioVideo'
import { TeamMembers } from '../components/TeamMembers'
import { ToConfirm } from '../components/ToConfirm'
import { siteRoute } from '../site/routes'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main>
      <PageIntro title={siteRoute('/about').heading} draft>
        Resonate Music Therapy Studio offers specialized music therapy services to individuals and groups of
        all ages and abilities, alongside Adaptive Music Lessons, Tempo Tunes, and Company Team Building
        Activities.
      </PageIntro>

      <Split media={<StudioVideo />}>
        <SectionHeading align="left">Our Mission</SectionHeading>
        <p>
          We&rsquo;re committed to providing inclusive, welcoming support to everyone who walks through our
          doors. Whether you&rsquo;re seeking therapeutic intervention or simply exploring the healing power of
          music, our credentialed team is here to help you on your journey.
        </p>
      </Split>

      <Section wide>
        <SectionHeading>Our Team</SectionHeading>
        <p className="mx-auto max-w-3xl">
          Music therapy at Resonate is delivered by two music therapists: the studio&rsquo;s founder
          and director, and a music therapist on our staff.
        </p>
        <TeamMembers />
        <p>
          <ToConfirm>whether anyone else teaches or assists at the studio and should be introduced here</ToConfirm>
        </p>
      </Section>

      <Band>
        <SectionHeading>Where We Are</SectionHeading>
        <p>
          Our studio is based in Dumaguete City, Negros Oriental &mdash; the only music therapy studio in the
          Visayas region. We welcome clients from across the region who are looking for clinical music
          therapy, adaptive music lessons, or Tempo Tunes enrichment close to home.
        </p>
      </Band>

      <ClosingCta heading="Want to Know More?" secondary={{ to: '/services', label: 'View our services' }}>
        <p>
          Reach out to ask questions, or explore our services to see what might be the right fit for you or your
          family.
        </p>
      </ClosingCta>
    </main>
  )
}
