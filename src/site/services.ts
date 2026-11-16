/**
 * The Services catalogue: the studio's four Services, as CONTEXT.md defines
 * them. The one place a Service's name, one-line description, and page live.
 *
 * `path` is `undefined` for a Service with no page of its own.
 *
 * Kept free of React and asset imports so Playwright can read it too (through
 * the route registry in `./routes.ts`).
 */
export const services = [
  {
    name: 'Individual Therapy',
    description: "One-on-one music therapy sessions tailored to a single client's specific needs and goals.",
    path: '/services/individual-therapy',
  },
  {
    name: 'Group Therapy',
    description:
      'Music therapy sessions for neurodivergent children focused on improving social skills, run with at least three clients per session.',
    path: '/services/group-therapy',
  },
  {
    name: 'Adaptive Music Lessons',
    description: "Voice, piano, and guitar lessons adapted to an individual's abilities and needs.",
    path: '/services/adaptive-music-lessons',
  },
  {
    name: 'Company Team Building Activities',
    description:
      'Group activities for corporate clients aimed at improving team communication, collaboration, and morale.',
    path: undefined,
  },
] as const

export type Service = (typeof services)[number]
