import { createFileRoute, Link } from '@tanstack/react-router'
import { ClosingCta } from '../components/ClosingCta'
import { PageIntro } from '../components/PageIntro'
import { textLink } from '../components/prose'
import { Question, QuestionList } from '../components/QuestionList'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { ToConfirm } from '../components/ToConfirm'
import { contact } from '../site/contact'
import { siteRoute } from '../site/routes'
import { tempoTunes } from '../site/tempo-tunes'

export const Route = createFileRoute('/faq')({
  component: FaqPage,
})

function FaqPage() {
  return (
    <main>
      <PageIntro title={siteRoute('/faq').heading} draft>
        Answers to common questions about music therapy and about coming to the studio. If yours isn&rsquo;t
        here, send us a message.
      </PageIntro>

      <Section align="left">
        <SectionHeading>About Music Therapy</SectionHeading>
        <QuestionList>
          <Question question="What is music therapy?">
            <p>
              The American Music Therapy Association defines it as &ldquo;a clinical and evidence-based
              application of music interventions to accomplish individualized goals within the therapeutic
              relationship by a credentialed professional who has completed an approved music therapy
              program.&rdquo; Read more on our{' '}
              <Link to="/music-therapy" className={textLink}>
                Music Therapy page
              </Link>
              .
            </p>
          </Question>
          <Question question="Does my child need to be musical?">
            <p>
              No. No musical background or ability is required to take part or benefit. Music is the tool;
              the goals are non-musical, like communication, motor skills, emotional regulation, or social
              connection.
            </p>
          </Question>
          <Question question="How is music therapy different from music lessons?">
            <p>
              Music therapy is a clinical, goal-directed treatment delivered by a credentialed professional.
              Our{' '}
              <Link to="/services/adaptive-music-lessons" className={textLink}>
                Adaptive Music Lessons
              </Link>{' '}
              are instructional, not clinical: voice, piano, and guitar lessons adapted to an
              individual&rsquo;s abilities and needs, where the goal is musical skill itself.
            </p>
          </Question>
          <Question question="Should we choose Individual Therapy or Group Therapy?">
            <p>
              <Link to="/services/individual-therapy" className={textLink}>
                Individual Therapy
              </Link>{' '}
              is one-on-one.{' '}
              <Link to="/services/group-therapy" className={textLink}>
                Group Therapy
              </Link>{' '}
              brings together at least three neurodivergent children per session, with a focus on social
              skills. Some clients benefit from one, some from the other, and some from both &mdash; we can
              help you decide.
            </p>
          </Question>
          <Question question={`Is ${tempoTunes.name} music therapy?`}>
            <p>
              No.{' '}
              <Link to={tempoTunes.path} className={textLink}>
                {tempoTunes.name}
              </Link>{' '}
              is a play-based music enrichment program for babies, toddlers, and preschoolers. It is not
              clinical therapy.
            </p>
          </Question>
          <Question question="What needs or conditions do you work with?">
            <p>
              We work with individuals and groups of all ages and abilities. See{' '}
              <Link to="/who-we-serve" className={textLink}>
                Who We Serve
              </Link>{' '}
              for more.
            </p>
          </Question>
        </QuestionList>
      </Section>

      <Section align="left">
        <SectionHeading>Practical Questions</SectionHeading>
        <QuestionList>
          <Question question="Where is the studio?">
            <p>
              {contact.address.join(', ')}. We are the only music therapy studio in the Visayas region.
            </p>
          </Question>
          <Question question="How do we get started?">
            <p>
              Send us a message and tell us a little about who the sessions are for. Our{' '}
              <Link to="/getting-started" className={textLink}>
                Getting Started page
              </Link>{' '}
              walks through the steps.
            </p>
          </Question>
          <Question question="How much do sessions cost?">
            <p>
              <ToConfirm>whether fees are published, and the fee for each service</ToConfirm>
            </p>
          </Question>
          <Question question="How long is a session, and how often would we come?">
            <p>
              <ToConfirm>session length and usual frequency for each service</ToConfirm>
            </p>
          </Question>
          <Question question="Do we need a referral or a diagnosis?">
            <p>
              <ToConfirm>whether a doctor&rsquo;s referral or a formal diagnosis is needed to begin</ToConfirm>
            </p>
          </Question>
          <Question question="Can a parent or carer stay during the session?">
            <p>
              <ToConfirm>the studio&rsquo;s practice on parents and carers sitting in</ToConfirm>
            </p>
          </Question>
        </QuestionList>
      </Section>

      <ClosingCta heading="Still Have a Question?" secondary={{ to: '/getting-started', label: 'How to get started' }}>
        <p>Message, call, or email us and we&rsquo;ll answer it directly.</p>
      </ClosingCta>
    </main>
  )
}
