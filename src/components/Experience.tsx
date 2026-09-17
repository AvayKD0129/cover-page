import { roles } from '../data/resume'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <ol className="relative">
      {/* Timeline rail — hidden on phones where the indent would cost too much width. */}
      <div aria-hidden className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-ink-700 sm:block" />

      {roles.map((role, i) => (
        <li key={`${role.company}-${role.start}`} className="relative sm:pl-10">
          <Reveal delay={i * 60}>
            <span
              aria-hidden
              className={`absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 sm:block ${
                role.current ? 'border-accent-400 bg-accent-400' : 'border-ink-600 bg-ink-950'
              }`}
            />

            <div className="pb-12">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight text-mist-100">
                  {role.title}
                  <span className="text-accent-400"> · </span>
                  <span className="text-mist-300">{role.company}</span>
                </h3>
                <p className="font-mono text-xs text-mist-500">
                  {role.start} — {role.end}
                </p>
              </div>

              <p className="mt-1 font-mono text-xs text-mist-500">{role.location}</p>

              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3 text-sm leading-relaxed text-mist-300">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                    <span>
                      {b.lead && <strong className="font-semibold text-mist-100">{b.lead}: </strong>}
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
