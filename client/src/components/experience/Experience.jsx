import { motion } from 'framer-motion'
import Section from '../layout/Section'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <Section id="experience">
      <p className="mb-2 text-xs font-mono tracking-widest uppercase text-[var(--color-text-muted)]">
        Experience
      </p>
      <h2 className="mb-10 text-3xl font-medium tracking-tight md:text-4xl">
        Where I've worked
      </h2>

      <div className="relative border-l border-[var(--color-border-subtle)] pl-8 space-y-12">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)]" />

            <p className="text-xs font-mono text-[var(--color-text-muted)] mb-1">
              {item.period}
            </p>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
              {item.role}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-3">
              {item.company}
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {item.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-[var(--color-border-subtle)] bg-transparent px-2.5 py-0.5 text-xs text-[var(--color-text-muted)] font-mono uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
