import type { LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { ButtonLink, ButtonRow } from './ButtonLink'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

type ClosingCtaProps = {
  heading: string
  /** A second, quieter link beside "Get in touch". */
  secondary?: { to: LinkProps['to']; label: string }
  /** The section's copy, as plain `<p>` children. */
  children: ReactNode
}

/** The last section of a page: always ends at "Get in touch", so no page is a dead end. */
export function ClosingCta({ heading, secondary, children }: ClosingCtaProps) {
  return (
    <Section>
      <SectionHeading>{heading}</SectionHeading>
      {children}
      <ButtonRow>
        <ButtonLink to="/contact">Get in touch</ButtonLink>
        {secondary && (
          <ButtonLink to={secondary.to} variant="secondary">
            {secondary.label}
          </ButtonLink>
        )}
      </ButtonRow>
    </Section>
  )
}
