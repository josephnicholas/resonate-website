import { createFileRoute } from '@tanstack/react-router'
import { Card, CardGrid } from '../components/CardGrid'
import { CtaLink } from '../components/CtaLink'
import { PageIntro } from '../components/PageIntro'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { siteRoute } from '../site/routes'

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
      <PageIntro title={siteRoute('/who-we-serve').heading} draft>
        Resonate Music Therapy Studio welcomes a wide range of clients. This page draws together who we serve
        from across our services &mdash; individuals and groups of all ages and abilities, neurodivergent
        children, companies, and babies, toddlers, and preschoolers.
      </PageIntro>

      <Section align="left">
        <SectionHeading>Populations We Serve</SectionHeading>
        <CardGrid>
          {populations.map((population) => (
            <Card key={population.title} title={population.title}>
              {population.description}
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionHeading>Find the Right Fit</SectionHeading>
        <p>
          Not sure which service fits your needs? Explore our full range of services, or reach out and we can
          help you figure out the right starting point.
        </p>
        <CtaLink to="/services">View our services</CtaLink>
      </Section>
    </main>
  )
}
