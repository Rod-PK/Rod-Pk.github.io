import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onOpen(project)}
      className="group cursor-pointer rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-6 shadow-md shadow-[rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-elevated)]"
    >
      {/* Category badge */}
      <span className="inline-block rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-base)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)] mb-4 transition-colors group-hover:border-[var(--color-border-hover)]">
        {project.category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-2">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="text-sm text-[var(--color-text-muted)] mb-3">{project.tagline}</p>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mb-5">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-xl border border-[var(--color-border-subtle)] bg-transparent px-2.5 py-0.5 text-xs text-[var(--color-text-muted)] font-mono uppercase"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
        >
          <SiGithub /> Code
        </a>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onOpen(project)
          }}
          className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
        >
          <HiArrowTopRightOnSquare /> Details
        </button>
      </div>
    </motion.article>
  )
}
