import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Section from './components/Section'
import Skills from './components/Skills'
import Work from './components/Work'
import { profile } from './data/resume'

export default function App() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />

        <Section id="about" eyebrow="About" title="Why I build what I build">
          <About />
        </Section>

        <Section id="work" eyebrow="Selected work" title="Apps I've shipped">
          <Work />
        </Section>

        <Section id="experience" eyebrow="Experience" title="Nine years, four teams">
          <Experience />
        </Section>

        <Section id="skills" eyebrow="Toolkit" title="What I work with">
          <Skills />
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's talk">
          <Contact />
        </Section>
      </main>

      <footer className="mx-auto max-w-5xl px-5 pb-10 sm:px-8">
        <div className="border-t border-ink-800 pt-6">
          <p className="font-mono text-xs text-mist-500">
            © {new Date().getFullYear()} {profile.name} · Built with React, Vite and Tailwind
          </p>
        </div>
      </footer>
    </>
  )
}
