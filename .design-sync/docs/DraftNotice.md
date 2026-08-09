---
category: Content
---

DraftNotice — a dashed callout marking a page as unreviewed draft content for the studio owner. Takes no props.

## Usage

Place it directly under the page heading, before the first body section:

```jsx
<h1>Individual Therapy</h1>
<DraftNotice />
<p>One-on-one music therapy sessions tailored to a single client's needs and goals.</p>
```

## Behaviour

The wording is fixed and deliberately explicit ("this page is a first draft for the studio owner's review") — it is a review artefact, not a general-purpose alert. It renders as `role="note"`.

## Composition notes

- Centred and capped at `max-w-2xl` with its own top margin, so it sits inside the page's normal content flow rather than full-bleed.
- Dashed `secondary-400` border on `secondary-100` — the same provisional treatment as `ImagePlaceholder`, which is how a reviewer reads both as "not final".
- Remove it when the page's content is signed off; there is no prop to soften or dismiss it.
