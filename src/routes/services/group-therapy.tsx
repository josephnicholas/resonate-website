import { createFileRoute } from '@tanstack/react-router'
import { Band } from '../../components/Band'
import { CtaLink } from '../../components/CtaLink'
import { PageIntro } from '../../components/PageIntro'
import { PointList } from '../../components/PointList'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'

export const Route = createFileRoute('/services/group-therapy')({
  component: GroupTherapyPage,
})

const expectations = [
  'Sessions run with at least three neurodivergent children per group, led by a credentialed music therapist.',
  'The primary focus is building social skills — turn-taking, shared attention, and communication — through structured musical activities.',
  "Group activities like playing instruments together create natural, repeatable opportunities for the kind of social interaction that's harder to practice one-on-one.",
  'No musical background or ability is required to take part or benefit.',
]

function GroupTherapyPage() {
  return (
    <main>
      <PageIntro title="Group Therapy" draft>
        Group Therapy is Resonate&rsquo;s music therapy service for neurodivergent children, run in groups
        of at least three clients at a time. Sessions are led by a credentialed music therapist and focus
        on building social skills through shared musical activities.
      </PageIntro>

      <Section align="left">
        <SectionHeading>What to Expect</SectionHeading>
        <PointList points={expectations} />
      </Section>

      <Band>
        <SectionHeading>Group Therapy vs. Individual Therapy</SectionHeading>
        <p>
          Group Therapy and Individual Therapy are both music therapy &mdash; delivered by a credentialed
          professional, working toward each client&rsquo;s specific goals. The difference is format: Group
          Therapy brings together at least three neurodivergent children at a time with a focus on social
          skills, while Individual Therapy is one-on-one. Some clients benefit from one, some from the
          other, and some from both.
        </p>
      </Band>

      <Section>
        <SectionHeading>Ready to Learn More</SectionHeading>
        <p>
          Group Therapy is one part of a broader set of services for people of all ages and abilities.
        </p>
        <CtaLink to="/services">View our services</CtaLink>
      </Section>
    </main>
  )
}
