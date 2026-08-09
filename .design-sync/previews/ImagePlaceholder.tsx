import { ImagePlaceholder } from 'resonate-website'

// The default box: it sizes to its content, so it needs a `className` to give
// it real dimensions in a layout. `description` is the accessible label — write
// it as the alt text the real photo will eventually carry.
export const Default = () => (
  <ImagePlaceholder description="A therapist playing guitar with a young client" className="h-48" />
)

// Full-width banner slot — the shape a page hero or section header reserves.
export const Banner = () => (
  <ImagePlaceholder
    description="Group therapy session in the studio's main room"
    className="h-56 w-full"
  />
)

// Several in a grid: the pattern a photo gallery uses while the real photos are
// still being collected.
export const Gallery = () => (
  <div className="grid grid-cols-3 gap-4">
    <ImagePlaceholder description="A child exploring a hand drum" className="h-32" />
    <ImagePlaceholder description="A therapist and client at the piano" className="h-32" />
    <ImagePlaceholder description="Shakers and tambourines laid out for a group session" className="h-32" />
  </div>
)
