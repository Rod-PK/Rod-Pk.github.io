import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi2'

export default function Hero() {
  function scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* Ambient glow - single subtle glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--color-accent-brand)] opacity-[0.02] blur-[120px]" />
      </div>

      {/* Intro Tag */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 text-[var(--color-text-muted)] font-mono text-xs tracking-widest uppercase"
      >
        Rodney Hinson
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-5xl font-semibold tracking-tight leading-tight md:text-6xl lg:text-7xl"
      >
        <span className="text-[var(--color-text-primary)]">Fullstack </span>
        <span className="text-[var(--color-text-primary)]">&amp; AI</span>
        <br />
        <span className="text-[var(--color-text-primary)]">Engineer</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]"
      >
        Scalable backends, production APIs, and AI-ready systems for enterprise and global teams.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          onClick={() =>
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="rounded-lg bg-[var(--color-text-primary)] px-6 py-2.5 text-sm font-medium text-[var(--color-bg-base)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          View Projects
        </button>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-[var(--color-border-subtle)] bg-transparent px-6 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)] inline-block"
        >
          Download Resume
        </a>
        <button
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="rounded-lg border border-[var(--color-border-subtle)] bg-transparent px-6 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]"
        >
          Contact
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-10 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <HiChevronDown className="text-2xl" />
        </motion.div>
      </motion.button>
    </section>
  )
}
