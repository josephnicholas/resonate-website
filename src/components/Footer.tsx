import { Link } from '@tanstack/react-router'
import { contact, TAGLINE } from '../site/contact'
import { routesInGroup, SITE_NAME } from '../site/routes'

// Two lists rather than one grid: a two-column grid fills row by row, so reading
// down a column mixed the Service pages in among the rest.
const pageLinks = [...routesInGroup('primary'), ...routesInGroup('trailing')]
const serviceLinks = routesInGroup('services')

const headingClassName = 'font-heading text-base font-semibold text-white'
// `py-1` gives each footer link a finger-sized target on phones without spreading the lists out.
const linkClassName = 'inline-block py-1 underline-offset-4 hover:text-secondary-300 hover:underline'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 px-6 py-12 font-body text-sm text-white">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_2fr_1.4fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-heading text-lg font-semibold">{SITE_NAME}</p>
          <p className="mt-2 leading-relaxed">{TAGLINE}</p>
          <p className="mt-2 leading-relaxed">The only music therapy studio in the Visayas.</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-6">
          <div>
            <h2 className={headingClassName}>Explore</h2>
            <ul className="mt-2">
              {pageLinks.map((route) => (
                <li key={route.path}>
                  <Link to={route.path} className={linkClassName}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={headingClassName}>Services</h2>
            <ul className="mt-2">
              {serviceLinks.map((route) => (
                <li key={route.path}>
                  <Link to={route.path} className={linkClassName}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div>
          <h2 className={headingClassName}>Visit or contact us</h2>
          <address className="mt-3 not-italic leading-relaxed">
            {contact.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <ul className="mt-2 space-y-1">
            <li>
              <a href={contact.phone.href} className={linkClassName}>
                {contact.phone.display}
              </a>
            </li>
            <li>
              <a href={contact.email.href} className={`${linkClassName} break-all`}>
                {contact.email.display}
              </a>
            </li>
            <li className="flex gap-6">
              {contact.social.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={linkClassName}>
                  {link.label}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-primary-700 pt-6 text-center">
        &copy; {year} {SITE_NAME}. All rights reserved.
      </p>
    </footer>
  )
}
