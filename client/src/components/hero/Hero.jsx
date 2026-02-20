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
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--color-accent-blue)] opacity-[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-[var(--color-accent-purple)] opacity-[0.04] blur-[100px]" />
      </div>

      {/* Intro Tag */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 text-sm font-medium tracking-widest uppercase text-[var(--color-accent-blue)]"
      >
        Hi, I'm Rodney Hinson
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
      >
        <span className="text-[var(--color-text-primary)]">Fullstack </span>
        <span className="gradient-text">&amp; AI</span>
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
        I build scalable systems and intelligent applications —&nbsp;from
        RESTful APIs to AI-powered experiences.
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
          className="rounded-lg bg-[var(--color-accent-blue)] px-6 py-3 text-sm font-semibold text-[var(--color-dark-900)] transition-all hover:shadow-[0_0_20px_var(--color-accent-blue)] hover:scale-[1.02]"
        >
          View Projects
        </button>
        <button
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="rounded-lg border border-[var(--color-dark-500)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent-blue)] hover:text-[var(--color-accent-blue)]"
        >
          Get in Touch
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-10 text-[var(--color-text-muted)] hover:text-[var(--color-accent-blue)] transition-colors"
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
