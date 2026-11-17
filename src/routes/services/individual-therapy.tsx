import { createFileRoute } from '@tanstack/react-router'
import { ClosingCta } from '../../components/ClosingCta'
import { IndividualVsGroup } from '../../components/Comparison'
import { ImagePlaceholder } from '../../components/ImagePlaceholder'
import { PageIntro } from '../../components/PageIntro'
import { PointList } from '../../components/PointList'
import { SectionHeading } from '../../components/SectionHeading'
import { Split } from '../../components/Split'
import { siteRoute } from '../../site/routes'

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
      <PageIntro title={siteRoute('/services/individual-therapy').heading} draft>
        Individual Therapy is Resonate&rsquo;s one-on-one music therapy service &mdash; sessions between a
        single client and a credentialed music therapist, built around that client&rsquo;s specific needs
        and goals. It&rsquo;s one of two formats we offer for our core clinical service; the other is Group
        Therapy.
      </PageIntro>

      <Split
        mediaRight
        media={
          <ImagePlaceholder className="aspect-[4/3] rounded-2xl" description="A one-on-one music therapy session in the studio" />
        }
      >
        <SectionHeading align="left">What to Expect</SectionHeading>
        <PointList points={expectations} />
      </Split>

      <IndividualVsGroup lead="individual" />

      <ClosingCta heading="Ready to Learn More?" secondary={{ to: '/services', label: 'View our services' }}>
        <p>
          Individual Therapy is one part of a broader set of services for people of all ages and abilities.
        </p>
      </ClosingCta>
    </main>
  )
}
