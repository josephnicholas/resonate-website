import { createFileRoute } from '@tanstack/react-router'
import { Band } from '../../components/Band'
import { CtaLink } from '../../components/CtaLink'
import { PageIntro } from '../../components/PageIntro'
import { PointList } from '../../components/PointList'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'

export const Route = createFileRoute('/services/individual-therapy')({
  component: IndividualTherapyPage,
})

const expectations = [
  'Sessions are one-on-one between a single client and a credentialed music therapist.',
  'Each session is built around an individualized treatment plan, shaped by the goals identified together with the client (and, where relevant, their family or care team).',
  "Well suited to clients who want focused, one-on-one attention, or whose goals are easier to work toward outside a group setting.",
  'Open to people of all ages and abilities — no musical background or ability is required.',
]

function IndividualTherapyPage() {
  return (
    <main>
      <PageIntro title="Individual Therapy" draft>
        Individual Therapy is Resonate&rsquo;s one-on-one music therapy service &mdash; sessions between a
        single client and a credentialed music therapist, built around that client&rsquo;s specific needs
        and goals. It&rsquo;s one of two formats we offer for our core clinical service; the other is Group
        Therapy.
      </PageIntro>

      <Section align="left">
        <SectionHeading>What to Expect</SectionHeading>
        <PointList points={expectations} />
      </Section>

      <Band>
        <SectionHeading>Individual Therapy vs. Group Therapy</SectionHeading>
        <p>
          Individual Therapy and Group Therapy are both music therapy &mdash; delivered by a credentialed
          professional, working toward each client&rsquo;s specific goals. The difference is format:
          Individual Therapy is one-on-one, while Group Therapy brings together at least three
          neurodivergent children at a time with a focus on social skills. Some clients benefit from one,
          some from the other, and some from both.
        </p>
      </Band>

      <Section>
        <SectionHeading>Ready to Learn More</SectionHeading>
        <p>
          Individual Therapy is one part of a broader set of services for people of all ages and abilities.
        </p>
        <CtaLink to="/services">View our services</CtaLink>
      </Section>
    </main>
  )
}
