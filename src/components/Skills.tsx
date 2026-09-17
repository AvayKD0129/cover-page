import { skillGroups } from '../data/resume'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {skillGroups.map((group, i) => (
        <Reveal key={group.name} delay={i * 80}>
          <div className="h-full rounded-xl border border-ink-700 bg-ink-900/60 p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-400">{group.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-ink-700 bg-ink-850 px-2.5 py-1.5 text-xs text-mist-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
