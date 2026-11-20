---
category: Layout
---

Nav — the Resonate site header: logo, primary links, a Services dropdown, and a mobile menu toggle. Takes no props.

## Usage

Mount it once, as the first element of the page, above `<main>`:

```jsx
<>
  <Nav />
  <main>{/* page content */}</main>
  <Footer />
</>
```

## Behaviour

- **Self-routing.** Nav owns its own link list (Home, Music Therapy, Who We Serve, Services, About Us, Contact) and reads the current route from router context to highlight the active link in `accent-700`. You do not pass links or an active state.
- **Services dropdown.** A native `<details>`/`<summary>` disclosure — open on click, closed again when one of its links is followed, and the summary itself highlights whenever the current path starts with `/services`.
- **Responsive.** Below `xl` the link list collapses behind a hamburger button (`aria-expanded`, `aria-controls="primary-navigation"`) and closes again when a link is followed; at `xl` and above it lays out inline and the dropdown becomes an absolutely-positioned panel.

## Composition notes

- It is `bg-primary-100` full-bleed with a full-width inner row and dark navy (`primary-700`) links — put it flush against the top of the page, not inside a padded container.
- Do not wrap it in a width constraint or the header band will stop short of the viewport edges.
