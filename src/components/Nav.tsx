import { animated, useSpring } from '@react-spring/web'
import { Link, useRouterState } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import logo from '../assets/logo.png'
import { routesInGroup, SITE_NAME, type SiteRoute } from '../site/routes'
import { ButtonLink } from './ButtonLink'
import { useMediaQuery } from './useMediaQuery'

// Below `xl` the nav is a menu that springs open from under the header; from
// `xl` it is an always-visible row and carries no animation styles at all.
// Both springs are damped enough not to wobble (restrained motion for a site
// many neurodivergent children's families use), and skip straight to their
// end state under `prefers-reduced-motion`.
const DESKTOP_QUERY = '(min-width: 80rem)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
const menuSpring = { tension: 320, friction: 34 }
const dropdownSpring = { tension: 380, friction: 30 }
/** The open menu's tallest extent; beyond it, the menu scrolls. */
const menuCap = () => window.innerHeight * 0.75

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
// Nine top-level entries only fit on one row at `xl` (1280px) at the smaller
// size; the roomier one returns at `2xl`. Check 1280px when adding a page.
const linkClassName = 'block px-3 py-2 font-heading font-semibold text-lg xl:px-1.5 xl:text-base 2xl:px-3 2xl:text-lg'
const activeColorClassName = 'text-accent-700 underline underline-offset-4'
const inactiveColorClassName = 'text-primary-700 hover:text-secondary-800'

const activeLinkProps = {
  className: activeColorClassName,
  'aria-current': 'page' as const,
}
const inactiveLinkProps = {
  className: inactiveColorClassName,
}

function NavLink({ item, onNavigate }: { item: SiteRoute; onNavigate: () => void }) {
  return (
    <Link
      to={item.path}
      activeOptions={{ exact: true }}
      className={linkClassName}
      activeProps={activeLinkProps}
      inactiveProps={inactiveLinkProps}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  )
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const servicesDropdown = useRef<HTMLDetailsElement>(null)
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const isServicesActive = pathname.startsWith('/services')
  const isDesktop = useMediaQuery(DESKTOP_QUERY)
  const reduceMotion = useMediaQuery(REDUCED_MOTION_QUERY)

  const navRef = useRef<HTMLElement>(null)
  // `maxHeight` of the phone menu. It springs to the menu's own height, then
  // settles at the cap so opening Services inside it can grow it naturally.
  const [menu, menuApi] = useSpring(() => ({ maxHeight: 0, config: menuSpring }), [])
  // Scrolling is only allowed once the menu has finished opening, so no
  // scrollbar flickers in while it grows.
  const [menuSettled, setMenuSettled] = useState(false)
  const [dropdown, dropdownApi] = useSpring(() => ({ opacity: 1, y: 0, config: dropdownSpring }), [])

  const setMenu = (open: boolean, { instant = false } = {}) => {
    setMobileOpen(open)
    setMenuSettled(false)
    const immediate = instant || reduceMotion
    if (open) {
      const target = Math.min(navRef.current?.scrollHeight ?? 0, menuCap())
      void menuApi.start({
        maxHeight: target,
        immediate,
        onRest: (result) => {
          if (!result.finished) return
          menuApi.set({ maxHeight: menuCap() })
          setMenuSettled(true)
        },
      })
    } else {
      // Close from what is actually showing, not from the cap.
      menuApi.set({ maxHeight: navRef.current?.offsetHeight ?? 0 })
      void menuApi.start({ maxHeight: 0, immediate })
    }
  }

  const onServicesToggle = (event: React.SyntheticEvent<HTMLDetailsElement>) => {
    if (!event.currentTarget.open) return
    void dropdownApi.start({ from: { opacity: 0, y: -8 }, to: { opacity: 1, y: 0 }, immediate: reduceMotion })
  }

  // The nav lives in the root layout, so it survives navigation: without this,
  // the mobile menu and the Services dropdown would stay open over the new page.
  // The menu shuts instantly here, since the page under it is already changing.
  const closeMenus = () => {
    if (mobileOpen) setMenu(false, { instant: true })
    if (servicesDropdown.current) servicesDropdown.current.open = false
  }

  return (
    <header className="sticky top-0 z-40 bg-primary-100 shadow-sm">
      <div className="flex w-full flex-wrap items-center gap-x-3 px-4 py-3 sm:gap-x-6 md:px-8 xl:gap-x-4 2xl:gap-x-6">
        <Link to="/" className="mr-auto flex shrink-0 items-center" onClick={closeMenus}>
          <img src={logo} alt={SITE_NAME} className="h-8 w-auto sm:h-12" />
        </Link>

        {/* After the nav in tab order on wide screens; beside the menu button on narrow ones. */}
        <div className="flex items-center gap-2 xl:order-last">
          {/* Dropped on the narrowest phones, where it would wrap under the logo; the hero and footer still carry it. */}
          <span className="max-[359px]:hidden">
            <ButtonLink to="/contact" compact onClick={closeMenus}>
              Get in touch
            </ButtonLink>
          </span>
          <button
            type="button"
            className="rounded p-2 text-primary-700 xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenu(!mobileOpen)}
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
        </div>

        <animated.nav
          ref={navRef}
          id="primary-navigation"
          aria-label="Primary"
          className="w-full xl:w-auto"
          style={
            isDesktop
              ? undefined
              : {
                  maxHeight: menu.maxHeight,
                  // Fully shut means out of the tab order and the accessibility tree too.
                  visibility: menu.maxHeight.to((height) => (height === 0 ? 'hidden' : 'visible')),
                  overflowY: menuSettled ? 'auto' : 'hidden',
                }
          }
        >
          <ul className="flex flex-col xl:flex-row xl:items-center">
            {primaryLinks.map((link) => (
              <li key={link.path}>
                <NavLink item={link} onNavigate={closeMenus} />
              </li>
            ))}

            <li className="relative">
              <details ref={servicesDropdown} onToggle={onServicesToggle} className="group [&::details-content]:block">
                <summary
                  className={`${linkClassName} cursor-pointer list-none [&::-webkit-details-marker]:hidden ${
                    isServicesActive ? activeColorClassName : inactiveColorClassName
                  }`}
                  aria-current={isServicesActive ? 'page' : undefined}
                >
                  Services
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 inline-block h-4 w-4 align-[-0.125em] transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  >
                    <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" />
                  </svg>
                </summary>
                <animated.ul
                  className="bg-primary-50 xl:absolute xl:left-0 xl:top-full xl:z-10 xl:min-w-max xl:rounded-b xl:shadow-lg"
                  style={{ opacity: dropdown.opacity, transform: dropdown.y.to((y) => `translateY(${y}px)`) }}
                >
                  {servicesLinks.map((link) => (
                    <li key={link.path}>
                      <NavLink item={link} onNavigate={closeMenus} />
                    </li>
                  ))}
                </animated.ul>
              </details>
            </li>

            {trailingLinks.map((link) => (
              <li key={link.path}>
                <NavLink item={link} onNavigate={closeMenus} />
              </li>
            ))}
          </ul>
        </animated.nav>
      </div>
    </header>
  )
}
