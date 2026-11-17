import { createFileRoute } from '@tanstack/react-router'
import { Band } from '../components/Band'
import { Card, CardGrid } from '../components/CardGrid'
import { ClosingCta } from '../components/ClosingCta'
import { PageIntro } from '../components/PageIntro'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { ToConfirm } from '../components/ToConfirm'
import { siteRoute } from '../site/routes'
import { tempoTunes } from '../site/tempo-tunes'

export const Route = createFileRoute('/who-we-serve')({
  component: WhoWeServePage,
})

// The goal areas the site already names for music therapy (see the Music
// Therapy page). The descriptions say only what those pages say.
const needs = [
  {
    title: 'Communication',
    description:
      'Communication is one of the non-musical goals a music therapy plan can work toward, with music as the tool.',
  },
  {
    title: 'Social Skills',
    description:
      'Group Therapy brings together at least three neurodivergent children per session to practise turn-taking, shared attention, and communication through structured musical activities.',
    to: '/services/group-therapy',
  },
  {
    title: 'Emotional Regulation',
    description:
      'Sessions can work toward emotional regulation, following an individualized plan shaped by goals identified together with the client.',
  },
  {
    title: 'Motor Skills',
    description:
      'Motor skills are among the non-musical goals music therapy can work toward. Musical skill is never the goal in itself.',
  },
] as const

const people = [
  {
    title: 'Individuals of All Ages and Abilities',
    description:
      'Individual Therapy is one-on-one and shaped around each client’s own goals. No musical background or ability is required.',
    to: '/services/individual-therapy',
  },
  {
    title: 'Neurodivergent Children',
    description:
      'Group Therapy is our music therapy service for neurodivergent children, run in groups of at least three with a focus on social skills.',
    to: '/services/group-therapy',
  },
  {
    title: 'Music Learners Who Need Lessons Adapted',
    description:
      'Adaptive Music Lessons teach voice, piano, and guitar in a way adapted to the individual’s abilities and needs. Lessons, not therapy.',
    to: '/services/adaptive-music-lessons',
  },
  {
    title: 'Babies, Toddlers, and Preschoolers',
    description: `${tempoTunes.name} is our play-based music enrichment program for the youngest children, using live music in almost all classes.`,
    to: tempoTunes.path,
  },
  {
    title: 'Companies',
    description:
      'Company Team Building Activities use music-based group activities to improve communication, collaboration, and morale.',
  },
] as const

function WhoWeServePage() {
  return (
    <main>
      <PageIntro title={siteRoute('/who-we-serve').heading} draft>
        You may be starting from a need rather than a service. This page starts there too: the needs music
        therapy can work toward, the conditions we support, and the people who come to the studio.
      </PageIntro>

      <Section align="left">
        <SectionHeading>Needs We Work On</SectionHeading>
        <CardGrid>
          {needs.map((need) => (
            <Card key={need.title} title={need.title} to={'to' in need ? need.to : undefined}>
              {need.description}
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Band>
        <SectionHeading>Conditions We Support</SectionHeading>
        <p>
          Our music therapy services are open to individuals and groups of all ages and abilities, and our
          Group Therapy is designed for neurodivergent children.
        </p>
        <p>
          <ToConfirm>
            the specific conditions and diagnoses the studio supports, in the wording the therapist prefers,
            and any the studio does not work with
          </ToConfirm>
        </p>
        <p>Not sure whether we can help? Ask us.</p>
      </Band>

      <Section align="left">
        <SectionHeading>Who Comes to Us</SectionHeading>
        <CardGrid>
          {people.map((group) => (
            <Card key={group.title} title={group.title} to={'to' in group ? group.to : undefined}>
              {group.description}
            </Card>
          ))}
        </CardGrid>
      </Section>

      <ClosingCta heading="Find the Right Fit" secondary={{ to: '/services', label: 'View our services' }}>
        <p>
          Tell us a little about who the sessions are for and what you are hoping for, and we&rsquo;ll help you
          find the right starting point.
        </p>
      </ClosingCta>
    </main>
  )
}
