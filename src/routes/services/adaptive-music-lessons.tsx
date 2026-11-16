import { createFileRoute } from '@tanstack/react-router'
import { Band } from '../../components/Band'
import { CtaLink } from '../../components/CtaLink'
import { PageIntro } from '../../components/PageIntro'
import { PointList } from '../../components/PointList'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'

export const Route = createFileRoute('/services/adaptive-music-lessons')({
  component: AdaptiveMusicLessonsPage,
})

const expectations = [
  "Voice, piano, and guitar lessons, adapted to an individual's abilities and needs.",
  'Instructional, not clinical therapy — the goal is building musical skill itself, not working toward a separate therapeutic outcome.',
  'A good fit for clients who want to learn an instrument or grow as a musician, with instruction paced and adapted to how they learn best.',
  'Open to people of all ages and abilities, with no prior musical experience required.',
]

function AdaptiveMusicLessonsPage() {
  return (
    <main>
      <PageIntro title="Adaptive Music Lessons" draft>
        Adaptive Music Lessons are Resonate&rsquo;s voice, piano, and guitar lessons, adapted to an
        individual&rsquo;s abilities and needs. Unlike our music therapy services, lessons are instructional
        rather than clinical &mdash; the goal is musical skill itself.
      </PageIntro>

      <Section align="left">
        <SectionHeading>What to Expect</SectionHeading>
        <PointList points={expectations} />
      </Section>

      <Band>
        <SectionHeading>Adaptive Music Lessons vs. Music Therapy</SectionHeading>
        <p>
          These are two different offerings at Resonate, and we want to be clear about the distinction.
          Adaptive Music Lessons &mdash; our voice, piano, and guitar lessons adapted to an
          individual&rsquo;s abilities and needs &mdash; are instructional, not clinical therapy. Music
          therapy, by contrast, is a clinical, goal-directed treatment delivered by a credentialed
          professional. If you&rsquo;re not sure which is the right fit, reach out and we can help you
          figure that out.
        </p>
      </Band>

      <Section>
        <SectionHeading>Ready to Learn More</SectionHeading>
        <p>
          Adaptive Music Lessons are one part of a broader set of services for people of all ages and
          abilities.
        </p>
        <CtaLink to="/services">View our services</CtaLink>
      </Section>
    </main>
  )
}
