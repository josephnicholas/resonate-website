import { createFileRoute } from '@tanstack/react-router'
import { ClosingCta } from '../../components/ClosingCta'
import { IndividualVsGroup } from '../../components/Comparison'
import { ImagePlaceholder } from '../../components/ImagePlaceholder'
import { PageIntro } from '../../components/PageIntro'
import { PointList } from '../../components/PointList'
import { SectionHeading } from '../../components/SectionHeading'
import { Split } from '../../components/Split'
import { siteRoute } from '../../site/routes'

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
      <PageIntro title={siteRoute('/services/group-therapy').heading} draft>
        Group Therapy is Resonate&rsquo;s music therapy service for neurodivergent children, run in groups
        of at least three clients at a time. Sessions are led by a credentialed music therapist and focus
        on building social skills through shared musical activities.
      </PageIntro>

      <Split
        mediaRight
        media={
          <ImagePlaceholder className="aspect-[4/3] rounded-2xl" description="A small group of children making music together with a therapist" />
        }
      >
        <SectionHeading align="left">What to Expect</SectionHeading>
        <PointList points={expectations} />
      </Split>

      <IndividualVsGroup lead="group" />

      <ClosingCta heading="Ready to Learn More?" secondary={{ to: '/services', label: 'View our services' }}>
        <p>
          Group Therapy is one part of a broader set of services for people of all ages and abilities.
        </p>
      </ClosingCta>
    </main>
  )
}
