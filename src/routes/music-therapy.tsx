import { createFileRoute } from '@tanstack/react-router'
import { AmtaDefinition } from '../components/AmtaDefinition'
import { ClosingCta } from '../components/ClosingCta'
import { TherapyVsLessons } from '../components/Comparison'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { PageIntro } from '../components/PageIntro'
import { PointList } from '../components/PointList'
import { SectionHeading } from '../components/SectionHeading'
import { Split } from '../components/Split'
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

      <Split
        mediaRight
        media={
          <ImagePlaceholder className="aspect-[4/3] rounded-2xl" description="A music therapist and client working together in a session" />
        }
      >
        <SectionHeading align="left">What to Expect in a Session</SectionHeading>
        <PointList points={sessionPoints} />
      </Split>

      <TherapyVsLessons lead="therapy" />

      <ClosingCta heading="Ready to Learn More?" secondary={{ to: '/services', label: 'View our services' }}>
        <p>
          Music therapy at Resonate is offered individually and in groups, and is one part of a broader set of
          services for people of all ages and abilities.
        </p>
      </ClosingCta>
    </main>
  )
}
