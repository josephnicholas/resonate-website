/**
 * Every real route on the site.
 *
 * This is the list the integration specs iterate — nav navigation, direct-URL
 * loads, in-page link hygiene, and the contrast audit all read it, rather than
 * each keeping its own copy.
 *
 * It is *not* the site's single source of truth for routing: `src/routes/`
 * defines the routes and `src/components/Nav.tsx` holds its own link lists.
 * This is the expected shape those must match, and nav.spec.ts is what asserts
 * they still do. A new route means updating all three.
 */
export interface SiteRoute {
  /** The nav link's text, exactly as rendered. */
  name: string
  /** The route's `h1`. */
  heading: string
  path: string
}

/**
 * Routes reachable from a top-level nav link. The rendered nav interleaves the
 * Services dropdown between `Who We Serve` and `About Us`; these are flattened
 * together because every one of them behaves the same way in the specs.
 */
export const topLevelRoutes: SiteRoute[] = [
  { name: 'Home', heading: 'Music Therapy and Child Enrichment Services', path: '/' },
  { name: 'Music Therapy', heading: 'Music Therapy', path: '/music-therapy' },
  { name: 'Who We Serve', heading: 'Who We Serve', path: '/who-we-serve' },
  { name: 'About Us', heading: 'About Us', path: '/about' },
  { name: 'Contact', heading: 'Contact', path: '/contact' },
]

/** Routes reachable only from inside the nav's Services dropdown. */
export const servicesRoutes: SiteRoute[] = [
  { name: 'All Services', heading: 'Our Services', path: '/services' },
  { name: 'Individual Therapy', heading: 'Individual Therapy', path: '/services/individual-therapy' },
  { name: 'Group Therapy', heading: 'Group Therapy', path: '/services/group-therapy' },
  {
    name: 'Adaptive Music Lessons',
    heading: 'Adaptive Music Lessons',
    path: '/services/adaptive-music-lessons',
  },
]

export const allRoutes: SiteRoute[] = [...topLevelRoutes, ...servicesRoutes]
