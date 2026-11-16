import { createFileRoute } from '@tanstack/react-router'
import { Band } from '../components/Band'
import { CtaLink } from '../components/CtaLink'
import { PageIntro } from '../components/PageIntro'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
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

      <Section align="left">
        <SectionHeading>Our Mission</SectionHeading>
        <p>
          We&rsquo;re committed to providing inclusive, welcoming support to everyone who walks through our
          doors. Whether you&rsquo;re seeking therapeutic intervention or simply exploring the healing power of
          music, our credentialed team is here to help you on your journey.
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

      <Section>
        <SectionHeading>Want to Know More?</SectionHeading>
        <p>
          Reach out to ask questions, or explore our services to see what might be the right fit for you or your
          family.
        </p>
        <CtaLink to="/contact">Contact us</CtaLink>
      </Section>
    </main>
  )
}
