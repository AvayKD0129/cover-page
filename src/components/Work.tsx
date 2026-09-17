import { apps, type App } from '../data/resume'
import Reveal from './Reveal'

const StoreIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17 17 7m0 0H8m9 0v9" />
  </svg>
)

function Icon({ stem, alt, className }: { stem: string; alt: string; className: string }) {
  return (
    <picture className="shrink-0">
      <source srcSet={`${stem}.webp`} type="image/webp" />
      <img
        src={`${stem}.jpg`}
        alt={alt}
        width={256}
        height={256}
        loading="lazy"
        decoding="async"
        className={className}
      />
    </picture>
  )
}

function Chips({ app }: { app: App }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      <span className="rounded border border-accent-500/30 bg-accent-500/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-300">
        {app.platform}
      </span>
      <span className="rounded border border-ink-700 bg-ink-850 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mist-500">
        {app.category}
      </span>
    </div>
  )
}

/** Full-width card whose visual is the market strip itself — the point is the spread. */
function FeaturedCard({ app }: { app: App }) {
  return (
    <article className="rounded-xl border border-ink-700 bg-ink-900/60 p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-mist-100">{app.name}</h3>
          <p className="mt-0.5 font-mono text-xs text-mist-500">{app.publisher}</p>
        </div>
        <Chips app={app} />
      </div>

      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist-300">{app.blurb}</p>

      {app.markets && (
        <>
          <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-400">
            Shipped to {app.markets.length} markets
          </p>
          <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {app.markets.map((m) => (
              <li key={m.code}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={`${m.app} — ${m.publisher} (${m.country})`}
                  className="group flex flex-col items-center gap-2 rounded-lg border border-ink-700 bg-ink-850 p-3 text-center transition-colors hover:border-accent-500/50"
                >
                  <Icon
                    stem={m.icon}
                    alt={`${m.app} app icon`}
                    className="h-11 w-11 rounded-xl border border-ink-700"
                  />
                  <span className="font-mono text-[10px] font-medium text-mist-100">{m.code}</span>
                  <span className="text-[10px] leading-tight text-mist-500 transition-colors group-hover:text-accent-300">
                    {m.country}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  )
}

function AppCard({ app }: { app: App }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-ink-700 bg-ink-900/60 p-6 transition-colors hover:border-accent-500/40">
      <div className="flex items-start gap-4">
        {app.icon && (
          <Icon
            stem={app.icon}
            alt={`${app.name} app icon`}
            className="h-14 w-14 rounded-2xl border border-ink-700 shadow-(--shadow-portrait)"
          />
        )}
        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-snug text-mist-100">{app.name}</h3>
          <p className="mt-0.5 truncate font-mono text-xs text-mist-500">{app.publisher}</p>
          <Chips app={app} />
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-mist-300">{app.blurb}</p>

      {app.href && (
        <a
          href={app.href}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent-300 transition-colors hover:text-accent-400"
        >
          View on the App Store
          <StoreIcon />
        </a>
      )}
    </article>
  )
}

export default function Work() {
  if (apps.length === 0) {
    return (
      <Reveal>
        <div className="rounded-xl border border-dashed border-ink-600 bg-ink-900/40 p-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-400">Coming soon</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist-300">
            Shipped apps and App Store links are being added here.
          </p>
        </div>
      </Reveal>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {apps.map((app, i) => (
        <Reveal key={app.name} delay={i * 70} className={app.featured ? 'sm:col-span-2' : ''}>
          {app.featured ? <FeaturedCard app={app} /> : <AppCard app={app} />}
        </Reveal>
      ))}
    </div>
  )
}
