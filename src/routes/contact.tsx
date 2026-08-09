import { createFileRoute } from '@tanstack/react-router'
import { DraftNotice } from '../components/DraftNotice'
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
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Contact</h1>

        <DraftNotice />

        <p className="mt-6 font-body text-lg leading-relaxed">
          Reach out to Resonate Music Therapy Studio through Instagram or Facebook &mdash; that&rsquo;s where
          we&rsquo;re easiest to find right now.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Get in Touch</h2>
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
      </section>

      <section className="bg-secondary-100 px-4 py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">About Our Contact Form</h2>
          <p className="mt-4 font-body text-lg leading-relaxed">
            We don&rsquo;t have a working contact form on this site yet &mdash; whether to add one is still an
            open decision for the studio owner to make. For now, please reach us through Instagram or Facebook
            above.
          </p>
        </div>
      </section>
    </main>
  )
}
