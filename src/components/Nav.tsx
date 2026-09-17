import { useEffect, useState } from 'react'
import { profile, sections } from '../data/resume'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [active, setActive] = useState(sections[0].id)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: the last section whose top has passed the header line wins.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px' },
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-ink-700/70 bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-500/40 bg-accent-500/10 font-mono text-sm font-semibold text-accent-300">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active === s.id ? 'text-accent-300' : 'text-mist-300 hover:text-mist-100'
              }`}
            >
              {s.label}
            </a>
          ))}
          <ThemeToggle className="ml-2" />
          <a
            href={profile.resume}
            download
            className="ml-2 rounded-md border border-accent-500/50 bg-accent-500/10 px-3.5 py-2 text-sm font-medium text-accent-300 transition-colors hover:bg-accent-500/20"
          >
            Résumé
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="grid h-9 w-9 place-items-center rounded-md border border-ink-700 text-mist-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-700/70 bg-ink-950/95 px-5 pb-4 backdrop-blur-xl md:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-ink-800 py-3 text-sm text-mist-300 last:border-0"
            >
              {s.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="mt-3 block rounded-md border border-accent-500/50 bg-accent-500/10 px-3 py-2.5 text-center text-sm font-medium text-accent-300"
          >
            Download résumé
          </a>
        </div>
      )}
    </header>
  )
}
