import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../utils/cn'

export default function Section({ id, className, children }) {
  const { ref, isInView } = useInView()

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'relative min-h-screen px-6 py-32 md:py-40 md:px-12 lg:px-24 xl:px-32',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  )
}
