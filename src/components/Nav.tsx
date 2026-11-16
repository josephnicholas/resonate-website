import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { routesInGroup, SITE_NAME, type SiteRoute } from '../site/routes'

const primaryLinks = routesInGroup('primary')
const servicesLinks = routesInGroup('services')
const trailingLinks = routesInGroup('trailing')

// Colours are pinned to the dark end of the brand scales: the nav sits on
// `primary-100` (and the dropdown panel on `primary-50`), so anything lighter
// than `primary-700`/`secondary-800`/`accent-700` drops below the 4.5:1 the
// contrast audit enforces (see e2e/accessibility.spec.ts).
//
// The active and inactive colours are kept in *separate* class strings and
// applied exclusively. Putting the base colour in `linkClassName` and appending
// the active one leaves both `text-*` utilities on the element, and then the
// stylesheet's emission order decides which wins — not the authoring order.
const linkClassName = 'block px-3 py-2 font-heading font-semibold text-xl'
const activeColorClassName = 'text-accent-700'
const inactiveColorClassName = 'text-primary-700 hover:text-secondary-800'

const activeLinkProps = {
  className: activeColorClassName,
  'aria-current': 'page' as const,
}
const inactiveLinkProps = {
  className: inactiveColorClassName,
}

function NavLink({ item }: { item: SiteRoute }) {
  return (
    <Link
      to={item.path}
      activeOptions={{ exact: true }}
      className={linkClassName}
      activeProps={activeLinkProps}
      inactiveProps={inactiveLinkProps}
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
          <img src={logo} alt={SITE_NAME} className="h-12 w-auto sm:h-16 xl:h-18" />
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
              <li key={link.path}>
                <NavLink item={link} />
              </li>
            ))}

            <li className="relative">
              <details className="group [&::details-content]:block">
                <summary
                  className={`${linkClassName} cursor-pointer list-none [&::-webkit-details-marker]:hidden ${
                    isServicesActive ? activeColorClassName : inactiveColorClassName
                  }`}
                  aria-current={isServicesActive ? 'page' : undefined}
                >
                  Services
                </summary>
                <ul className="bg-primary-50 xl:absolute xl:left-0 xl:top-full xl:z-10 xl:min-w-max xl:rounded-b xl:shadow-lg">
                  {servicesLinks.map((link) => (
                    <li key={link.path}>
                      <NavLink item={link} />
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            {trailingLinks.map((link) => (
              <li key={link.path}>
                <NavLink item={link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
