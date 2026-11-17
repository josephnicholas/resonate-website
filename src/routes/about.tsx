import { createFileRoute } from '@tanstack/react-router'
import { Band } from '../components/Band'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { ClosingCta } from '../components/ClosingCta'
import { PageIntro } from '../components/PageIntro'
import { SectionHeading } from '../components/SectionHeading'
import { Split } from '../components/Split'
import { StudioVideo } from '../components/StudioVideo'
import { ToConfirm } from '../components/ToConfirm'
import { siteRoute } from '../site/routes'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main>
      <PageIntro title={siteRoute('/about').heading} draft>
        Resonate Music Therapy Studio offers specialized music therapy services to individuals and groups of
        all ages and abilities, alongside Adaptive Music Lessons, Tempo Tunes, and Company Team Building
        Activities.
      </PageIntro>

      <Split media={<StudioVideo />}>
        <SectionHeading align="left">Our Mission</SectionHeading>
        <p>
          We&rsquo;re committed to providing inclusive, welcoming support to everyone who walks through our
          doors. Whether you&rsquo;re seeking therapeutic intervention or simply exploring the healing power of
          music, our credentialed team is here to help you on your journey.
        </p>
      </Split>

      <Split
        mediaRight
        media={
          <ImagePlaceholder
            className="aspect-[4/3] rounded-2xl"
            description="Portrait of the studio's music therapist (awaiting their agreement to be pictured)"
          />
        }
      >
        <SectionHeading align="left">Our Team</SectionHeading>
        <p>Music therapy at Resonate is delivered by a credentialed music therapist.</p>
        <dl className="mt-6 grid gap-4 font-body leading-relaxed">
          <div>
            <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-600">Name</dt>
            <dd className="m-0">
              <ToConfirm>the therapist&rsquo;s name, if they are willing to be named</ToConfirm>
            </dd>
          </div>
          <div>
            <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-600">
              Credentials
            </dt>
            <dd className="m-0">
              <ToConfirm>qualifications, certification, and where they trained</ToConfirm>
            </dd>
          </div>
          <div>
            <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-600">About</dt>
            <dd className="m-0">
              <ToConfirm>a short bio: background, experience, and approach, in the therapist&rsquo;s own words</ToConfirm>
            </dd>
          </div>
        </dl>
        <p>
          <ToConfirm>whether anyone else teaches or assists at the studio and should be introduced here</ToConfirm>
        </p>
      </Split>

      <Band>
        <SectionHeading>Where We Are</SectionHeading>
        <p>
          Our studio is based in Dumaguete City, Negros Oriental &mdash; the only music therapy studio in the
          Visayas region. We welcome clients from across the region who are looking for clinical music
          therapy, adaptive music lessons, or Tempo Tunes enrichment close to home.
        </p>
      </Band>

      <ClosingCta heading="Want to Know More?" secondary={{ to: '/services', label: 'View our services' }}>
        <p>
          Reach out to ask questions, or explore our services to see what might be the right fit for you or your
          family.
        </p>
      </ClosingCta>
    </main>
  )
}
