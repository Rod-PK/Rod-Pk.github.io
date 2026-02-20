import { motion } from 'framer-motion'
import Section from '../layout/Section'
import { useForm } from '../../hooks/useForm'
import { submitContact } from '../../lib/api'
import { cn } from '../../utils/cn'

export default function ContactForm() {
  const { values, errors, status, setStatus, validate, handleChange, reset } = useForm()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      await submitContact(values)
      setStatus('success')
      reset()
      // Auto-dismiss success after 5s
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" className="border-t border-[var(--color-border-subtle)]">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 text-xs font-mono tracking-widest uppercase text-[var(--color-text-muted)]">
          Contact
        </p>
        <h2 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
          Open to roles. Let's talk.
        </h2>
        <p className="mb-10 text-[var(--color-text-secondary)]">
          Enterprise, remote, or hybrid — share the opportunity and I'll respond promptly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--color-text-secondary)]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="Your name"
              className={cn(
                'w-full rounded-lg border bg-[var(--color-bg-base)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-text-secondary)] focus:ring-1 focus:ring-[var(--color-text-secondary)]',
                errors.name ? 'border-red-500' : 'border-[var(--color-border-subtle)]'
              )}
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-text-secondary)]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={cn(
                'w-full rounded-lg border bg-[var(--color-bg-base)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-text-secondary)] focus:ring-1 focus:ring-[var(--color-text-secondary)]',
                errors.email ? 'border-red-500' : 'border-[var(--color-border-subtle)]'
              )}
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--color-text-secondary)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className={cn(
                'w-full resize-none rounded-lg border bg-[var(--color-bg-base)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-text-secondary)] focus:ring-1 focus:ring-[var(--color-text-secondary)]',
                errors.message ? 'border-red-500' : 'border-[var(--color-border-subtle)]'
              )}
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          {/* Honeypot */}
          <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-lg bg-[var(--color-text-primary)] py-3.5 text-sm font-semibold text-[var(--color-bg-base)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-[var(--color-accent-green)]"
            >
              ✓ Message sent! I'll get back to you soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-red-400"
            >
              Something went wrong. Please try again or email me directly.
            </motion.p>
          )}
        </form>
      </div>
    </Section>
  )
}
