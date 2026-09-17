import { apps } from '../data/resume'
import Reveal from './Reveal'

export default function Work() {
  if (apps.length === 0) {
    return (
      <Reveal>
        <div className="rounded-xl border border-dashed border-ink-600 bg-ink-900/40 p-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-400">Coming soon</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist-300">
            Shipped apps, screenshots and App Store links are being added here. In the meantime, the
            experience below covers the products and the part I played in each.
          </p>
        </div>
      </Reveal>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {apps.map((app, i) => (
        <Reveal key={app.name} delay={i * 70}>
          <article className="group h-full overflow-hidden rounded-xl border border-ink-700 bg-ink-900/60 transition-colors hover:border-accent-500/40">
            {app.image && (
              <img
                src={app.image}
                alt={`${app.name} screenshot`}
                loading="lazy"
                className="aspect-[16/10] w-full border-b border-ink-700 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-mist-100">{app.name}</h3>
                <p className="font-mono text-xs text-mist-500">{app.role}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mist-300">{app.blurb}</p>
              {app.href && (
                <a
                  href={app.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 hover:text-accent-400"
                >
                  View on the App Store
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7m0 0H8m9 0v9" />
                  </svg>
                </a>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
