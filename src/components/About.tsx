import { education, intro, languages } from '../data/resume'
import Highlights from './Highlights'
import Reveal from './Reveal'

export default function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
      <Reveal>
        <div className="space-y-5">
          {intro.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-mist-300">
              {p}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="space-y-6">
        <Reveal delay={80}>
          <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-400">Education</h3>
            <p className="mt-4 text-sm font-semibold text-mist-100">{education.degree}</p>
            <p className="mt-1 text-sm text-mist-300">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-mist-500">
              {education.location} · {education.detail}
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-400">Languages</h3>
            <ul className="mt-4 space-y-4">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-medium text-mist-100">{lang.name}</span>
                    <span className="font-mono text-xs text-mist-500">{lang.level}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-700">
                    <div
                      className="h-full rounded-full bg-accent-500"
                      style={{ width: `${lang.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="lg:col-span-2">
        <Highlights />
      </div>
    </div>
  )
}
