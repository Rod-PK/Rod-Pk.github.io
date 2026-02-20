import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] p-8 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
            aria-label="Close modal"
          >
            <HiXMark className="text-xl" />
          </button>

          {/* Category */}
          <span className="inline-block rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-base)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)] mb-4">
            {project.category}
          </span>

          {/* Title */}
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-1">
            {project.title}
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-6">
            {project.tagline}
          </p>

          {/* Long Description */}
          <div className="mb-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {project.longDescription}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)]">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-base)] px-3 py-1 text-xs text-[var(--color-text-secondary)] font-mono uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[var(--color-text-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg-base)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <SiGithub /> View Repository
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
