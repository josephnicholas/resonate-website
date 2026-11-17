import { createFileRoute } from '@tanstack/react-router'
import { ButtonLink, ButtonRow } from '../components/ButtonLink'
import { PageIntro } from '../components/PageIntro'
import { textLink } from '../components/prose'
import { SectionHeading } from '../components/SectionHeading'
import { Split, splitImageClassName } from '../components/Split'
import { contact } from '../site/contact'
import { siteRoute } from '../site/routes'
import instagramIcon from '../assets/instagram.svg'
import facebookIcon from '../assets/facebook.svg'
import studioExterior from '../assets/studio-exterior.jpg'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const socialIcons = { Facebook: facebookIcon, Instagram: instagramIcon } as const

function ContactPage() {
  return (
    <main>
      <PageIntro title={siteRoute('/contact').heading} draft>
        Message, call, or email Resonate Music Therapy Studio &mdash; or visit us in Dumaguete City. Tell us a
        little about who the sessions are for and we&rsquo;ll help you find the right starting point.
      </PageIntro>

      <Split
        media={
          <img
            src={studioExterior}
            alt="The Resonate Music Therapy Studio sign above the studio entrance"
            className={splitImageClassName}
          />
        }
      >
        <SectionHeading align="left">Get in Touch</SectionHeading>
        <p>The quickest way to reach us is a message on Messenger.</p>
        <ButtonRow align="left">
          <ButtonLink href={contact.messenger}>Message us on Messenger</ButtonLink>
        </ButtonRow>

        <dl className="mt-8 grid gap-4 font-body text-lg leading-relaxed">
          <div>
            <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-600">Phone</dt>
            <dd>
              <a href={contact.phone.href} className={textLink}>
                {contact.phone.display}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-600">Email</dt>
            <dd>
              <a href={contact.email.href} className={`${textLink} break-all`}>
                {contact.email.display}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-600">Studio</dt>
            <dd>
              <address className="not-italic">
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </dd>
          </div>
        </dl>

        <ul className="mt-8 flex flex-wrap gap-4">
          {contact.social.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-neutral-100 px-5 py-3 font-heading font-medium text-primary-600 shadow-md hover:text-accent-600"
              >
                <img src={socialIcons[link.label]} alt="" className="h-5 w-5" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Split>
    </main>
  )
}
