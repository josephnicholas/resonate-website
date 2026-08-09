---
category: Media
---

ImagePlaceholder — a dashed, labelled box that reserves the space a real photo will occupy, with an icon and the photo's description.

## Props

| Prop | Type | Required | Notes |
|---|---|---|---|
| `description` | `string` | yes | Doubles as the visible caption and the `aria-label`. Write it as the alt text the real photo will carry. |
| `className` | `string` | no | Appended to the built-in classes — this is how you give the box its dimensions. |

## Usage

```jsx
<ImagePlaceholder
  description="A therapist playing guitar with a young client"
  className="h-48 w-full"
/>
```

## Behaviour

The box is a `figure` with `role="img"` and `aria-label={description}`, so assistive tech announces it as a single image rather than reading the decorative icon.

## Composition notes

- It has no intrinsic size — without a `className` giving it height (and usually width) it collapses to icon-plus-caption. Always pass one.
- Use it wherever the layout is final but the photography isn't; swap it for an `<img>` (or `Carousel`) once the real asset exists.
- It shares the dashed `secondary-400` border and `secondary-100` fill with `DraftNotice`, which is what marks both as provisional.
