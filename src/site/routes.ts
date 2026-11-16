import { services } from './services.ts'

/**
 * The route registry: every page on the site, in nav order.
 *
 * The one place a page's path, nav label, heading (its `h1` and tab title),
 * and nav group live. `Nav` renders its links from it, each route takes its
 * `h1` from it, the root layout derives the tab title from it, and the
 * Playwright specs iterate it — so a page added here is in the nav and under
 * test, and a page missing from here has no nav link, heading, or title.
 *
 * `src/routes/` still defines what each path renders; a new page needs its
 * route file as well as its entry here.
 *
 * Kept free of React and asset imports so Playwright can read it directly.
 */

export const SITE_NAME = 'Resonate Music Therapy Studio'

const [individualTherapy, groupTherapy, adaptiveMusicLessons] = services

export const siteRoutes = [
  { path: '/', label: 'Home', heading: 'Music Therapy and Child Enrichment Services', group: 'primary' },
  { path: '/music-therapy', label: 'Music Therapy', heading: 'Music Therapy', group: 'primary' },
  { path: '/who-we-serve', label: 'Who We Serve', heading: 'Who We Serve', group: 'primary' },
  { path: '/services', label: 'All Services', heading: 'Our Services', group: 'services' },
  // The Service pages take their label and heading from the Services catalogue.
  { path: individualTherapy.path, label: individualTherapy.name, heading: individualTherapy.name, group: 'services' },
  { path: groupTherapy.path, label: groupTherapy.name, heading: groupTherapy.name, group: 'services' },
  {
    path: adaptiveMusicLessons.path,
    label: adaptiveMusicLessons.name,
    heading: adaptiveMusicLessons.name,
    group: 'services',
  },
  { path: '/about', label: 'About Us', heading: 'About Us', group: 'trailing' },
  { path: '/contact', label: 'Contact', heading: 'Contact', group: 'trailing' },
] as const

export type SiteRoute = (typeof siteRoutes)[number]
export type SitePath = SiteRoute['path']
/** Where a page's link sits in the nav: before the Services dropdown, inside it, or after it. */
export type NavGroup = SiteRoute['group']

/** The pages in one nav group, in nav order. */
export function routesInGroup<G extends NavGroup>(group: G) {
  return siteRoutes.filter((route): route is Extract<SiteRoute, { group: G }> => route.group === group)
}

/** The registry entry for a page. */
export function siteRoute(path: SitePath): SiteRoute {
  return siteRoutes.find((route) => route.path === path)!
}

/**
 * The browser tab title for a URL path: `Heading | Site name`, or the site
 * name alone for Home and for any path the registry doesn't know.
 */
export function documentTitle(pathname: string): string {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  const route = siteRoutes.find((candidate) => candidate.path === path)

  return route && route.path !== '/' ? `${route.heading} | ${SITE_NAME}` : SITE_NAME
}
