import { createFileRoute, Link } from '@tanstack/react-router'
import { Band } from '../components/Band'
import { Card, CardGrid } from '../components/CardGrid'
import { ClosingCta } from '../components/ClosingCta'
import { PageIntro } from '../components/PageIntro'
import { PointList } from '../components/PointList'
import { textLink } from '../components/prose'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Split } from '../components/Split'
import { ToConfirm } from '../components/ToConfirm'
import { tempoTunes } from '../site/tempo-tunes'
import tempoTunesLogo from '../assets/tempokids.png'

export const Route = createFileRoute('/tempo-tunes')({
  component: TempoTunesPage,
})

function TempoTunesPage() {
  return (
    <main>
      <PageIntro title={tempoTunes.name} draft>
        {tempoTunes.summary} Classes are play-based and use live music &mdash; a way for little ones to
        experience music, and for families to spend time together.
      </PageIntro>

      <Split
        media={
          <img
            src={tempoTunesLogo}
            alt={`${tempoTunes.name} logo`}
            className="mx-auto w-full max-w-sm rounded-2xl bg-neutral-100 p-6 shadow-md"
          />
        }
      >
        <SectionHeading align="left">What Happens in Class</SectionHeading>
        <PointList points={tempoTunes.points} />
      </Split>

      <Section align="left">
        <SectionHeading>Ages, Schedule, and Enrolment</SectionHeading>
        <CardGrid>
          <Card title="Who It Is For">
            Babies, toddlers, and preschoolers. <ToConfirm>the exact age range, and how classes are grouped by age</ToConfirm>
          </Card>
          <Card title="Schedule">
            The program runs over 10 days. <ToConfirm>class days and times, class length, and the next start date</ToConfirm>
          </Card>
          <Card title="Parents and Carers">
            Classes are a chance for parents to spend time with their child.{' '}
            <ToConfirm>whether a parent or carer joins every class</ToConfirm>
          </Card>
          <Card title="How to Enrol">
            Get in touch and tell us your child&rsquo;s age.{' '}
            <ToConfirm>the enrolment steps, class size, and program fee</ToConfirm>
          </Card>
        </CardGrid>
      </Section>

      <Band>
        <SectionHeading>Enrichment, Not Therapy</SectionHeading>
        <p>
          {tempoTunes.name} is a music enrichment program, not clinical therapy. If you are looking for
          support with specific therapeutic goals, read about{' '}
          <Link to="/music-therapy" className={textLink}>
            music therapy at Resonate
          </Link>{' '}
          instead.
        </p>
      </Band>

      <ClosingCta heading={`Ask About ${tempoTunes.name}`} secondary={{ to: '/faq', label: 'Read the FAQ' }}>
        <p>Message us to ask about the next program and whether it suits your child.</p>
      </ClosingCta>
    </main>
  )
}
