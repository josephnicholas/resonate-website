---
category: Layout
---

Footer — the Resonate site footer: a centred copyright line on the brand navy band. Takes no props.

## Usage

Mount it once, as the last element of the page:

```jsx
<>
  <Nav />
  <main>{/* page content */}</main>
  <Footer />
</>
```

## Behaviour

The year is computed at render time from the current date — there is nothing to pass in and nothing to keep up to date.

## Composition notes

- Full-bleed `bg-primary-600` with its own padding, so place it flush against the bottom of the page rather than inside a padded container.
- It brackets the page with `Nav`, but they are not the same band: `Nav` is light (`bg-primary-100`, navy text) and the footer is dark (`bg-primary-600`, white text).
