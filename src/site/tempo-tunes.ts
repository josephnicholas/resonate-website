/**
 * Tempo Tunes, as CONTEXT.md defines it: the studio's music enrichment
 * program for babies, toddlers, and preschoolers. Enrichment, not clinical
 * therapy, and not one of the four Services.
 *
 * The one place its name, page, and one-line summary live; the route registry
 * takes its nav label and heading from here. The owner has not yet confirmed
 * the name ("Tempo Tunes" or "TempoTune Kids") or the format ("10-day
 * program" or "0-6 year olds") — change them here when they do, then sweep
 * the prose mentions with `grep -r "Tempo Tunes" src`.
 *
 * Kept free of React and asset imports, like the rest of `src/site/`.
 */
export const tempoTunes = {
  name: 'Tempo Tunes',
  path: '/tempo-tunes',
  summary: 'A 10-day program that offers music enrichment classes to babies, toddlers, and preschoolers.',
  points: [
    'Learning and experiencing music boosts the brain and can positively impact a child’s development.',
    'Classes are filled with fun, entertaining activities that are also beneficial to the child.',
    'We provide a clean, safe environment and a loving atmosphere for learning.',
    'A play-based program that uses music to achieve both musical and non-musical goals.',
    'A great way for parents to spend time with their child and for families to bond together.',
    'We use live music in almost all of our classes.',
  ],
} as const
