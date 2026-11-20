/**
 * The studio's contact details: the one place its phone number, email, address,
 * and social links live. `Footer` and the Contact page both render from here.
 *
 * Kept free of React and asset imports, like the rest of `src/site/`.
 */
export const contact = {
  phone: { display: '0917 507 0990', href: 'tel:+639175070990' },
  email: {
    display: 'resonatemusictherapystudio2024@gmail.com',
    href: 'mailto:resonatemusictherapystudio2024@gmail.com',
  },
  address: ['D & I Tinagan Building', 'Corner Sta. Rosa and Real Streets, Poblacion 8', 'Dumaguete City, Philippines 6200'],
  /** Opens a Messenger conversation with the studio's Facebook page. */
  messenger: 'https://m.me/resonatemtstudio',
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/resonatemtstudio' },
    { label: 'Instagram', href: 'https://www.instagram.com/resonatemusictherapystudio' },
  ],
} as const

/** The studio's tagline, as used in its own advertising. */
export const TAGLINE = 'Creative human connections through music.'
