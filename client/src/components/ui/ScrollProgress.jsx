import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)]"
    />
  )
}
