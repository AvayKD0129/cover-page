import { highlights } from '../data/resume'
import Reveal from './Reveal'

export default function Highlights() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {highlights.map((h, i) => (
        <Reveal key={h.label} delay={i * 70}>
          <div className="h-full rounded-xl border border-ink-700 bg-ink-900/60 p-6 transition-colors hover:border-accent-500/40">
            <p className="font-mono text-2xl font-semibold text-accent-300">{h.metric}</p>
            <p className="mt-1 text-sm font-semibold text-mist-100">{h.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-mist-300">{h.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
