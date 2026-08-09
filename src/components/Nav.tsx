import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import logo from '../assets/logo.png'

const primaryLinks = [
  { to: '/', label: 'Home' },
  { to: '/music-therapy', label: 'Music Therapy' },
  { to: '/who-we-serve', label: 'Who We Serve' },
] as const

const servicesLinks = [
  { to: '/services', label: 'All Services' },
  { to: '/services/individual-therapy', label: 'Individual Therapy' },
  { to: '/services/group-therapy', label: 'Group Therapy' },
  { to: '/services/adaptive-music-lessons', label: 'Adaptive Music Lessons' },
] as const

const trailingLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
] as const

type NavLinkItem =
  | (typeof primaryLinks)[number]
  | (typeof servicesLinks)[number]
  | (typeof trailingLinks)[number]

const linkClassName = 'block px-3 py-2 font-heading font-semibold text-xl text-blue-600/75 hover:text-secondary-600'
const activeLinkProps = {
  className: 'text-accent-200',
  'aria-current': 'page' as const,
}

function NavLink({ item }: { item: NavLinkItem }) {
  return (
    <Link
      to={item.to}
      activeOptions={{ exact: true }}
      className={linkClassName}
      activeProps={activeLinkProps}
    >
      {item.label}
    </Link>
  )
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const isServicesActive = pathname.startsWith('/services')

  return (
    <header className="bg-primary-100">
      <div className="flex w-full flex-wrap items-center justify-between gap-x-8 px-6 py-12 md:px-12">
        <Link to="/" className="flex shrink-0 items-center">
          <img src={logo} alt="Resonate Music Therapy Studio" className="h-12 w-auto sm:h-16 xl:h-18" />
        </Link>
        <button
          type="button"
          className="rounded p-2 text-primary-700 xl:hidden"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`${mobileOpen ? 'block' : 'hidden'} w-full xl:block xl:w-auto`}
        >
          <ul className="flex flex-col xl:flex-row xl:items-center">
            {primaryLinks.map((link) => (
              <li key={link.to}>
                <NavLink item={link} />
              </li>
            ))}

            <li className="relative">
              <details className="group [&::details-content]:block">
                <summary
                  className={`${linkClassName} cursor-pointer list-none [&::-webkit-details-marker]:hidden ${
                    isServicesActive ? 'text-accent-200' : ''
                  }`}
                  aria-current={isServicesActive ? 'page' : undefined}
                >
                  Services
                </summary>
                <ul className="bg-primary-700 xl:absolute xl:left-0 xl:top-full xl:z-10 xl:min-w-max xl:rounded-b xl:shadow-lg">
                  {servicesLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink item={link} />
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            {trailingLinks.map((link) => (
              <li key={link.to}>
                <NavLink item={link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
