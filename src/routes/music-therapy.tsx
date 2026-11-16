import { createFileRoute } from '@tanstack/react-router'
import { AmtaDefinition } from '../components/AmtaDefinition'
import { Band } from '../components/Band'
import { CtaLink } from '../components/CtaLink'
import { PageIntro } from '../components/PageIntro'
import { PointList } from '../components/PointList'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { siteRoute } from '../site/routes'

export const Route = createFileRoute('/music-therapy')({
  component: MusicTherapyPage,
})

const sessionPoints = [
  'Sessions are built around an individualized treatment plan, shaped by goals identified together with the client (and, where relevant, their family or care team).',
  'Progress is tracked and the plan is adjusted over time, the way any other clinical therapy is monitored and refined.',
  'Musical skill is never the goal in itself — music is the tool used to work toward non-musical goals like communication, motor skills, emotional regulation, or social connection.',
  'No musical background or ability is required to take part or benefit.',
]

function MusicTherapyPage() {
  return (
    <main>
      <PageIntro title={siteRoute('/music-therapy').heading} draft>
        Music therapy is Resonate Music Therapy Studio&rsquo;s core clinical service &mdash; a therapeutic
        practice delivered by a credentialed professional, distinct from music lessons or classes. This page
        goes into more depth on what that means than the short overview on the home page.
      </PageIntro>

      <AmtaDefinition />

      <Section align="left">
        <SectionHeading>What to Expect in a Session</SectionHeading>
        <PointList points={sessionPoints} />
      </Section>

      <Band>
        <SectionHeading>Music Therapy vs. Adaptive Music Lessons</SectionHeading>
        <p>
          These are two different offerings at Resonate, and we want to be clear about the distinction. Music
          therapy is a clinical, goal-directed treatment delivered by a credentialed professional. Adaptive
          Music Lessons &mdash; our voice, piano, and guitar lessons adapted to an individual&rsquo;s abilities
          and needs &mdash; are instructional, not clinical therapy. If you&rsquo;re not sure which is the right
          fit, reach out and we can help you figure that out.
        </p>
      </Band>

      <Section>
        <SectionHeading>Ready to Learn More</SectionHeading>
        <p>
          Music therapy at Resonate is offered individually and in groups, and is one part of a broader set of
          services for people of all ages and abilities.
        </p>
        <CtaLink to="/services">View our services</CtaLink>
      </Section>
    </main>
  )
}
