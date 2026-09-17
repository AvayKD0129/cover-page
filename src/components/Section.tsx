import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-400">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-5 h-px w-full bg-gradient-to-r from-accent-500/50 via-ink-700 to-transparent" />
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  )
}
