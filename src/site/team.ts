/**
 * The studio's music therapists, introduced on About.
 *
 * The roles are confirmed: the studio has two music therapists, its Founder and
 * Director and an employed Music Therapist. Everything else waits for the studio
 * owner, and for each therapist's agreement to be named and pictured. A `null`
 * field renders as a marked placeholder — never fill one in with a guess.
 *
 * Kept free of React and asset imports, like the rest of `src/site/`.
 */
export type TeamMember = {
  /** Their role at the studio, used as the card heading. */
  role: string
  /** Their name, or `null` until they agree to be named. */
  name: string | null
  /** Qualifications, certification, and where they trained. */
  credentials: string | null
  /** A short bio in their own words. */
  bio: string | null
}

export const team: readonly TeamMember[] = [
  { role: 'Founder and Director', name: null, credentials: null, bio: null },
  { role: 'Music Therapist', name: null, credentials: null, bio: null },
]
