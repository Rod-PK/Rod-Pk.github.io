import { motion } from 'framer-motion'

export default function SkillCard({ name, icon: Icon, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex items-center gap-4 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-4 transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-elevated)]"
    >
      <Icon className="text-xl text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-text-primary)]" />
      <div className="flex-1">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--color-text-primary)]">{name}</span>
          <span className="text-xs text-[var(--color-text-muted)]">{level}%</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--color-bg-elevated)]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
            className="h-full rounded-full bg-[var(--color-text-secondary)]"
          />
        </div>
      </div>
    </motion.div>
  )
}
