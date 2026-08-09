---
category: Content
---

AmtaDefinition — the full-width "What is Music Therapy" band: the American Music Therapy Association's definition, quoted and attributed. Takes no props.

## Usage

Drop it between page sections; it brings its own heading, quotation, attribution, background and padding:

```jsx
<main>
  <Carousel slides={slides} label="Photos from Resonate Music Therapy Studio" />
  <AmtaDefinition />
  {/* … */}
</main>
```

## Behaviour

The content is fixed — the AMTA definition is a quotation that must not be paraphrased or trimmed. If a page needs different wording, write that section directly rather than adapting this component.

## Composition notes

- Full-bleed `bg-secondary-100` with a `max-w-3xl` centred column, so place it as a direct child of the page, not inside another padded container.
- It reads as the page's calm, explanatory beat — the home page and the Music Therapy page both use it that way, after the hero and before the services detail.
