import { createFileRoute } from '@tanstack/react-router'
import { Band } from '../components/Band'
import { PageIntro } from '../components/PageIntro'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import instagramIcon from '../assets/instagram.svg'
import facebookIcon from '../assets/facebook.svg'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const socialLinks = [
  {
    href: 'https://www.instagram.com/resonatemusictherapystudio',
    label: 'Instagram',
    icon: instagramIcon,
  },
  {
    href: 'https://www.facebook.com/resonatemtstudio',
    label: 'Facebook',
    icon: facebookIcon,
  },
] as const

function ContactPage() {
  return (
    <main>
      <PageIntro title="Contact" draft>
        Reach out to Resonate Music Therapy Studio through Instagram or Facebook &mdash; that&rsquo;s where
        we&rsquo;re easiest to find right now.
      </PageIntro>

      <Section>
        <SectionHeading>Get in Touch</SectionHeading>
        <ul className="mt-8 flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-neutral-100 px-6 py-4 font-heading font-medium text-primary-600 shadow-md hover:text-accent-600"
              >
                <img src={link.icon} alt="" className="h-5 w-5" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Band>
        <SectionHeading>About Our Contact Form</SectionHeading>
        <p>
          We don&rsquo;t have a working contact form on this site yet &mdash; whether to add one is still an
          open decision for the studio owner to make. For now, please reach us through Instagram or Facebook
          above.
        </p>
      </Band>
    </main>
  )
}
