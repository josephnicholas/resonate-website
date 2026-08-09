# Resonate Music Therapy Studio — building with this design system

These are the components of `resonatemusictherapystudio.com`: a warm, calm marketing site for a music therapy practice. Six components, styled with Tailwind v4 utilities against a brand token theme.

## Wrapping and setup

`Nav` reads the current route from TanStack Router context and renders router `<Link>`s. **Outside a router it throws and the whole tree fails to mount.** The bundle ships a router for exactly this — wrap any tree containing `Nav` in it:

```jsx
const { PreviewRouterProvider, Nav, Footer } = window.ResonateDS;

<PreviewRouterProvider>
  <Nav />
  <main>{/* page content */}</main>
  <Footer />
</PreviewRouterProvider>
```

It carries the site's nine real routes (`/`, `/music-therapy`, `/who-we-serve`, `/services`, `/services/individual-therapy`, `/services/group-therapy`, `/services/adaptive-music-lessons`, `/about`, `/contact`), so nav links resolve and the active link highlights. It renders its children directly — it does not route the page. The other five components need no provider, but wrapping the whole tree is always safe.

## The styling idiom

Tailwind v4 utility classes. There is **no `className` prop on these components** except `ImagePlaceholder` — style your own layout glue with utilities, and let each component own its internals.

Brand scales, all in `50 100 200 300 400 500 600 700 800 900`:

| Family | Use | Reach it with |
|---|---|---|
| `primary-*` | navy, from the studio logo — headers, footers, headings | `bg-primary-600`, `text-primary-700`, `border-primary-200` |
| `secondary-*` | soft sky blue — section backgrounds, provisional states | `bg-secondary-100`, `border-secondary-400` |
| `accent-*` | magenta, from the logo — **sparingly**: CTAs, active states only | `text-accent-200`, `bg-accent-500` |
| `neutral-*` | warm off-white to near-black, never pure white/black | `bg-neutral-50`, `text-neutral-700` |

Prefixes available on every scale: `bg-` `text-` `border-` `ring-` `from-` `via-` `to-`.

Two type families, both shipped as webfonts: **`font-heading`** (Quicksand — headings, nav, buttons) and **`font-body`** (Inter — everything else). Body text defaults to Inter at `text-neutral-700` on `bg-neutral-50`.

House patterns worth copying: page grounds are `bg-neutral-50`, not white; content columns are `mx-auto max-w-3xl` / `max-w-6xl`; section bands are full-bleed with their own `px-4 py-12`; provisional/unfinished things get `border-2 border-dashed border-secondary-400 bg-secondary-100`.

**One hard constraint:** `styles.css` is a pre-compiled stylesheet, not a live Tailwind build, so only classes that were compiled into it exist. The four brand scales above, `font-heading`/`font-body`, and a standard layout vocabulary (spacing `0–24`, `text-xs`–`text-5xl`, `font-normal`–`bold`, `rounded-*`, `shadow-*`, flex/grid with `md:`/`lg:` variants, `grid-cols-1–12`, `max-w-*`, `w-*`/`h-*`, `items-*`/`justify-*`, `object-*`, `overflow-*`, `aspect-*`) are all present. **Arbitrary values (`p-[13px]`, `bg-[#ff0000]`) and off-scale utilities will not resolve** — use an inline `style` for anything the vocabulary doesn't cover.

## Where the truth lives

- `styles.css` and its `@import` closure (`fonts/fonts.css`, `_ds_bundle.css`) — the real tokens, `@font-face` rules, and every available class. Read `_ds_bundle.css` when unsure whether a utility exists.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage, props, behaviour and composition notes. Read this before using a component; each one documents constraints you cannot guess (e.g. `ImagePlaceholder` collapses without a sizing `className`, `AmtaDefinition`'s quotation must not be reworded).
- `components/<group>/<Name>/<Name>.d.ts` — the prop contract. Only `Carousel` and `ImagePlaceholder` take props; the other four take none.

Groups: **layout** (`Nav`, `Footer`), **media** (`Carousel`, `ImagePlaceholder`), **content** (`AmtaDefinition`, `DraftNotice`).

## An idiomatic page

```jsx
const { PreviewRouterProvider, Nav, Footer, Carousel, AmtaDefinition, ImagePlaceholder } = window.ResonateDS;

<PreviewRouterProvider>
  <Nav />
  <main className="bg-neutral-50">
    <Carousel slides={slides} label="Photos from Resonate Music Therapy Studio" />

    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-center font-heading text-3xl font-semibold text-primary-700">Our Services</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="rounded-lg bg-neutral-100 p-6 shadow-md">
            <ImagePlaceholder description={s.photo} className="h-40 w-full" />
            <h3 className="mt-4 font-heading text-lg font-semibold text-primary-700">{s.title}</h3>
            <p className="mt-2 font-body text-neutral-700">{s.description}</p>
          </article>
        ))}
      </div>
    </section>

    <AmtaDefinition />
  </main>
  <Footer />
</PreviewRouterProvider>
```

## Language

This is a clinical practice — the wording is load-bearing. **Music therapy** (clinical, evidence-based, by a credentialed professional) is never "music lessons" or "music class". **Adaptive Music Lessons** are instructional, never "therapy". **Tempo Tunes** is an enrichment program for young children, not a therapy program. Prefer the site's own copy over invented marketing language.
