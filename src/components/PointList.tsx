/** A single-column list of short points, each on its own raised tile. */
export function PointList({ points }: { points: readonly string[] }) {
  return (
    <ul className="mx-auto mt-8 grid max-w-2xl gap-4 text-left">
      {points.map((point) => (
        <li key={point} className="rounded-lg bg-neutral-100 p-4 font-body text-sm leading-relaxed shadow-md">
          {point}
        </li>
      ))}
    </ul>
  )
}
