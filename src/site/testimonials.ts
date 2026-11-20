/**
 * Family testimonials shown on Home.
 *
 * Every slot is empty until the studio owner supplies real quotes and confirms
 * each family's consent covers the website (consent given for the ad does not
 * automatically extend here). An empty slot renders as a marked placeholder —
 * never write a quote on a family's behalf.
 *
 * Kept free of React and asset imports, like the rest of `src/site/`.
 */
export type Testimonial = {
  /** The family's own words, or `null` while the slot is still waiting for one. */
  quote: string | null
  /** How the family agreed to be credited, e.g. "Parent of a Group Therapy client". */
  attribution: string | null
}

export const testimonials: readonly Testimonial[] = [
  { quote: null, attribution: null },
  { quote: null, attribution: null },
  { quote: null, attribution: null },
]
