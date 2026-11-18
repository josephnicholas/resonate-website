/** A single-column list of short points, each on its own raised tile. */
export function PointList({ points }: { points: readonly string[] }) {
  return (
    <ul className="mx-auto mt-8 grid max-w-2xl gap-4 text-left">
      {points.map((point) => (
        <li key={point} className="rounded-xl bg-neutral-100 px-6 py-4 font-body leading-relaxed shadow-md">
          {point}
        </li>
      ))}
    </ul>
  )
}
