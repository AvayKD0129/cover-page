import { profile } from '../data/resume'

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
  </svg>
)

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:gap-14">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
            {profile.location}
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-medium text-mist-100 sm:text-2xl">{profile.title}</p>
          <p className="mt-1.5 font-mono text-sm text-mist-500">{profile.tagline}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-300">
            Eight years building high-performance consumer apps for massive user bases — and lately, the
            agentic AI tooling that makes building them faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-400"
            >
              <MailIcon />
              Get in touch
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-ink-600 px-4 py-2.5 text-sm font-medium text-mist-100 transition-colors hover:border-accent-500/60 hover:text-accent-300"
            >
              <DownloadIcon />
              Résumé
            </a>
            {profile.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-ink-600 px-4 py-2.5 text-sm font-medium text-mist-100 transition-colors hover:border-accent-500/60 hover:text-accent-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative shrink-0">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-500/35 via-accent-700/15 to-transparent blur-xl"
          />
          <img
            src={profile.photo}
            alt={`${profile.name}, ${profile.title}`}
            width={1254}
            height={1254}
            className="relative h-40 w-40 rounded-3xl border border-ink-600 object-cover shadow-(--shadow-portrait) sm:h-52 sm:w-52 md:h-60 md:w-60"
          />
        </div>
      </div>
    </section>
  )
}
