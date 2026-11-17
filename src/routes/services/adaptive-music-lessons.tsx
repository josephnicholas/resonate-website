import { createFileRoute } from '@tanstack/react-router'
import { ClosingCta } from '../../components/ClosingCta'
import { TherapyVsLessons } from '../../components/Comparison'
import { PageIntro } from '../../components/PageIntro'
import { PointList } from '../../components/PointList'
import { SectionHeading } from '../../components/SectionHeading'
import { Split, splitImageClassName } from '../../components/Split'
import { siteRoute } from '../../site/routes'
import pianoLesson from '../../assets/piano-lesson.jpg'

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
      <PageIntro title={siteRoute('/services/adaptive-music-lessons').heading} draft>
        Adaptive Music Lessons are Resonate&rsquo;s voice, piano, and guitar lessons, adapted to an
        individual&rsquo;s abilities and needs. Unlike our music therapy services, lessons are instructional
        rather than clinical &mdash; the goal is musical skill itself.
      </PageIntro>

      <Split
        mediaRight
        media={
          <img
            src={pianoLesson}
            alt="Sheet music open on the studio piano during a lesson"
            className={splitImageClassName}
          />
        }
      >
        <SectionHeading align="left">What to Expect</SectionHeading>
        <PointList points={expectations} />
      </Split>

      <TherapyVsLessons lead="lessons" />

      <ClosingCta heading="Ready to Learn More?" secondary={{ to: '/services', label: 'View our services' }}>
        <p>
          Adaptive Music Lessons are one part of a broader set of services for people of all ages and
          abilities.
        </p>
      </ClosingCta>
    </main>
  )
}
