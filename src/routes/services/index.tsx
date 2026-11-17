import { createFileRoute } from '@tanstack/react-router'
import { Band } from '../../components/Band'
import { ButtonLink, ButtonRow } from '../../components/ButtonLink'
import { PageIntro } from '../../components/PageIntro'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'
import { ServiceCards } from '../../components/ServiceCards'
import { siteRoute } from '../../site/routes'

export const Route = createFileRoute('/services/')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <main>
      <PageIntro title={siteRoute('/services').heading} draft>
        Resonate Music Therapy Studio offers four services: two formats of music therapy &mdash;
        Individual Therapy and Group Therapy &mdash; plus Adaptive Music Lessons and Company Team Building
        Activities. Explore each below to find the right fit.
      </PageIntro>

      <Section align="left" wide>
        <SectionHeading>What We Offer</SectionHeading>

        <ServiceCards />
      </Section>

      <Band>
        <SectionHeading>Not Sure Where to Start?</SectionHeading>
        <p>
          Not sure which service is the right fit? Take a look at who we serve, or reach out and we can help
          you find the right starting point.
        </p>
        <ButtonRow>
          <ButtonLink to="/contact">Get in touch</ButtonLink>
          <ButtonLink to="/who-we-serve" variant="secondary">
            See who we serve
          </ButtonLink>
        </ButtonRow>
      </Band>
    </main>
  )
}
