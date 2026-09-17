import { profile } from '../data/resume'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <Reveal>
      <div className="rounded-2xl border border-ink-700 bg-gradient-to-br from-ink-900 to-ink-850 p-8 sm:p-12">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Looking for a senior iOS engineer?
        </h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-mist-300">
          I'm open to senior iOS roles at product companies that treat the app as the product. The fastest
          way to reach me is email — I read everything and reply to anything specific.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-400"
          >
            {profile.email}
          </a>
          {profile.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-600 px-5 py-3 text-sm font-medium text-mist-100 transition-colors hover:border-accent-500/60 hover:text-accent-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
