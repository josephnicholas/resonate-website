import { createFileRoute, Link } from '@tanstack/react-router'
import { Band } from '../components/Band'
import { Card, CardGrid } from '../components/CardGrid'
import { ClosingCta } from '../components/ClosingCta'
import { PageIntro } from '../components/PageIntro'
import { textLink } from '../components/prose'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { ToConfirm } from '../components/ToConfirm'
import { siteRoute } from '../site/routes'

export const Route = createFileRoute('/getting-started')({
  component: GettingStartedPage,
})

function GettingStartedPage() {
  return (
    <main>
      <PageIntro title={siteRoute('/getting-started').heading} draft>
        Starting something new can feel like a big step. Here is what happens between your first message and
        your first session at Resonate Music Therapy Studio.
      </PageIntro>

      <Section align="left">
        <SectionHeading>How a First Session Works</SectionHeading>
        <CardGrid>
          <Card title="1. Get in Touch">
            Message us on Messenger, call, or email. Every way to reach us is on the{' '}
            <Link to="/contact" className={textLink}>
              Contact page
            </Link>
            .
          </Card>
          <Card title="2. Tell Us Who the Sessions Are For">
            Share a little about the person and what you are hoping for, and we&rsquo;ll help you find the
            right fit among our services. <ToConfirm>what the studio asks before a first visit, and whether a referral or diagnosis is needed</ToConfirm>
          </Card>
          <Card title="3. Your First Visit">
            <ToConfirm>what happens at the first visit (for example an assessment or a trial session), how long it lasts, and who should come</ToConfirm>
          </Card>
          <Card title="4. Ongoing Sessions">
            Music therapy sessions follow an individualized plan built around goals identified together, and
            the plan is adjusted over time. <ToConfirm>how often sessions run and how long each one is</ToConfirm>
          </Card>
        </CardGrid>
      </Section>

      <Band>
        <SectionHeading>Fees</SectionHeading>
        <p>
          <ToConfirm>whether fees are shown here, and if so the fee for each service and how payment works</ToConfirm>
        </p>
        <p>Until then, please get in touch and we&rsquo;ll talk you through the options for your situation.</p>
      </Band>

      <ClosingCta heading="Ready When You Are" secondary={{ to: '/faq', label: 'Read the FAQ' }}>
        <p>No musical background or ability is needed to begin. A short message is enough to start.</p>
      </ClosingCta>
    </main>
  )
}
