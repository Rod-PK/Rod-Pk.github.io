import { motion } from 'framer-motion'
import Section from '../layout/Section'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <Section id="experience">
      <p className="mb-2 text-sm font-medium tracking-widest uppercase text-[var(--color-accent-blue)]">
        Experience
      </p>
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">
        Where I've worked
      </h2>

      <div className="relative border-l border-[var(--color-dark-500)] pl-8 space-y-12">
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
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent-blue)] bg-[var(--color-dark-900)]" />

            <p className="text-xs font-medium text-[var(--color-accent-blue)] mb-1">
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
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[var(--color-dark-700)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
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
