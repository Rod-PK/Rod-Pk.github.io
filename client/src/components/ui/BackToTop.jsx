import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronUp } from 'react-icons/hi2'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-dark-500)] bg-[var(--color-dark-800)] text-[var(--color-text-muted)] shadow-lg transition-colors hover:border-[var(--color-accent-blue)] hover:text-[var(--color-accent-blue)]"
          aria-label="Back to top"
        >
          <HiChevronUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
