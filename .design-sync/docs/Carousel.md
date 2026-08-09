---
category: Media
---

Carousel — an accessible, auto-advancing photo carousel with overlaid previous / play-pause / next controls.

## Props

| Prop | Type | Required | Notes |
|---|---|---|---|
| `slides` | `{ src: string; alt: string }[]` | yes | Rendered in order, looping. `alt` is required — these are content photos, not decoration. |
| `label` | `string` | yes | Names the carousel region for screen readers, e.g. `"Photos from Resonate Music Therapy Studio"`. |

## Usage

```jsx
const slides = [
  { src: therapy1, alt: 'A music therapist and a young client each playing a hand drum together' },
  { src: therapy2, alt: 'A music therapist and a child playing piano together' },
]

<Carousel slides={slides} label="Photos from Resonate Music Therapy Studio" />
```

## Behaviour

- **Autoplay** advances every 4 seconds, and pauses while the user hovers, focuses inside, or touches the carousel. The play/pause button toggles it explicitly.
- **Reduced motion.** Autoplay starts switched off for visitors whose system prefers reduced motion; the controls still work.
- **Accessibility.** The container is a labelled `region` with `aria-roledescription="carousel"`; each slide is a `group` labelled `Slide N of M`, with the offscreen slides `aria-hidden`.

## Composition notes

- Slides are `flex-[0_0_100%]` and images are `object-cover`, so the carousel fills whatever width you give it — full-bleed for a page hero, or inside a `max-w-*` wrapper for a column.
- Give the wrapper a height (or rely on the images' own aspect ratio); the controls sit absolutely at `bottom-3`, centred.
- Two or more slides is the sensible minimum — with one slide the controls loop back to the same image.
