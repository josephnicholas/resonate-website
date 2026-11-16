import { createFileRoute } from '@tanstack/react-router'
import { Band } from '../../components/Band'
import { Card, CardGrid } from '../../components/CardGrid'
import { CtaLink } from '../../components/CtaLink'
import { PageIntro } from '../../components/PageIntro'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'

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
      <PageIntro title="Our Services" draft>
        Resonate Music Therapy Studio offers four services: two formats of music therapy &mdash;
        Individual Therapy and Group Therapy &mdash; plus Adaptive Music Lessons and Company Team Building
        Activities. Explore each below to find the right fit.
      </PageIntro>

      <Section align="left" wide>
        <SectionHeading>What We Offer</SectionHeading>

        <CardGrid columns={4}>
          {offerings.map((offering) => (
            <Card key={offering.to} title={offering.title} to={offering.to}>
              {offering.description}
            </Card>
          ))}

          <Card title="Company Team Building Activities">
            Group activities for corporate clients aimed at improving team communication, collaboration, and
            morale.
          </Card>
        </CardGrid>
      </Section>

      <Band>
        <SectionHeading>Not Sure Where to Start</SectionHeading>
        <p>
          Not sure which service is the right fit? Take a look at who we serve, or reach out and we can help
          you find the right starting point.
        </p>
        <CtaLink to="/who-we-serve">See who we serve</CtaLink>
      </Band>
    </main>
  )
}
