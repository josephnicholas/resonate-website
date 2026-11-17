import type { ReactNode } from 'react'
import { team } from '../site/team'
import { ImagePlaceholder } from './ImagePlaceholder'
import { ToConfirm } from './ToConfirm'

/**
 * The music therapists from `src/site/team.ts`, as a card per person: portrait,
 * role, then name, credentials, and bio. A detail not supplied yet renders a
 * marked placeholder. Needs a wide container to go two-across.
 */
export function TeamMembers() {
  return (
    <ul className="mt-8 grid gap-6 text-left md:grid-cols-2">
      {team.map((member) => (
        <li key={member.role} className="rounded-2xl bg-neutral-100 p-6 shadow-md">
          <ImagePlaceholder
            className="aspect-[4/3] rounded-xl"
            description={`Portrait of the studio’s ${member.role.toLowerCase()} (awaiting their agreement to be pictured)`}
          />
          <h3 className="mt-6 font-heading text-xl font-semibold">{member.role}</h3>
          <dl className="mt-4 grid gap-4 font-body leading-relaxed">
            <Detail term="Name">
              {member.name ?? <ToConfirm>their name, if they are willing to be named</ToConfirm>}
            </Detail>
            <Detail term="Credentials">
              {member.credentials ?? <ToConfirm>qualifications, certification, and where they trained</ToConfirm>}
            </Detail>
            <Detail term="About">
              {member.bio ?? (
                <ToConfirm>a short bio: background, experience, and approach, in their own words</ToConfirm>
              )}
            </Detail>
          </dl>
        </li>
      ))}
    </ul>
  )
}

function Detail({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div>
      <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-600">{term}</dt>
      <dd className="m-0">{children}</dd>
    </div>
  )
}
