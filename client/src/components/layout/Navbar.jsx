import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { cn } from '../../utils/cn'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const activeSection = useScrollSpy()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] transition-colors"
        >
          RH<span className="text-[var(--color-accent-blue)]">.</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={cn(
                  'relative text-sm font-medium transition-colors duration-200',
                  activeSection === link.id
                    ? 'text-[var(--color-accent-blue)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                )}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-[var(--color-accent-blue)] rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume Button (Desktop) */}
        <a
          href="/resume/Rodney_Hinson_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 rounded-lg border border-[var(--color-accent-blue)] px-4 py-2 text-sm font-medium text-[var(--color-accent-blue)] transition-all hover:bg-[var(--color-accent-blue)] hover:text-[var(--color-dark-900)]"
        >
          Resume
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[var(--color-text-primary)] text-2xl"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={cn(
                      'text-sm font-medium transition-colors',
                      activeSection === link.id
                        ? 'text-[var(--color-accent-blue)]'
                        : 'text-[var(--color-text-secondary)]'
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/resume/Rodney_Hinson_Resume.pdf"
                  download
                  className="rounded-lg border border-[var(--color-accent-blue)] px-4 py-2 text-sm font-medium text-[var(--color-accent-blue)]"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
