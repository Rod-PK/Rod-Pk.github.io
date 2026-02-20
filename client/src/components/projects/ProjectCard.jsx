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
      className="group cursor-pointer rounded-xl border border-[var(--color-dark-500)] bg-[var(--color-dark-800)] p-6 transition-all duration-300 hover:border-[var(--color-accent-blue)] hover:shadow-[0_0_30px_rgba(88,166,255,0.06)]"
    >
      {/* Category badge */}
      <span className="inline-block rounded-full bg-[var(--color-dark-700)] px-3 py-1 text-xs font-medium text-[var(--color-accent-blue)] mb-4">
        {project.category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent-blue)] transition-colors">
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
            className="rounded-full bg-[var(--color-dark-700)] px-2.5 py-0.5 text-xs text-[var(--color-text-muted)]"
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
          className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-blue)]"
        >
          <SiGithub /> Code
        </a>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onOpen(project)
          }}
          className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-blue)]"
        >
          <HiArrowTopRightOnSquare /> Details
        </button>
      </div>
    </motion.article>
  )
}
