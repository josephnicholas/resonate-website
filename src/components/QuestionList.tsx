import type { ReactNode } from 'react'

/** A list of `Question`s, one under the other. */
export function QuestionList({ children }: { children: ReactNode }) {
  return <dl className="mt-8 grid gap-4 text-left">{children}</dl>
}

type QuestionProps = {
  question: string
  /** The answer, as plain `<p>` children. */
  children: ReactNode
}

/** One question and its answer. Must sit inside a `QuestionList`. */
export function Question({ question, children }: QuestionProps) {
  return (
    <div className="rounded-lg bg-neutral-100 p-6 shadow-md">
      <dt className="font-heading text-lg font-semibold">{question}</dt>
      <dd className="m-0 [&>p]:mt-2 [&>p]:font-body [&>p]:leading-relaxed">{children}</dd>
    </div>
  )
}
