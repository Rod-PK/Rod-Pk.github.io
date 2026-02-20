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
    <Section id="contact" className="bg-[var(--color-dark-800)]">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 text-sm font-medium tracking-widest uppercase text-[var(--color-accent-blue)]">
          Contact
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Let's build something together
        </h2>
        <p className="mb-10 text-[var(--color-text-secondary)]">
          Have a project in mind or want to discuss an opportunity? Send me a message and I'll get back to you promptly.
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
                'w-full rounded-lg border bg-[var(--color-dark-700)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-accent-blue)]',
                errors.name ? 'border-red-500' : 'border-[var(--color-dark-500)]'
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
                'w-full rounded-lg border bg-[var(--color-dark-700)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-accent-blue)]',
                errors.email ? 'border-red-500' : 'border-[var(--color-dark-500)]'
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
                'w-full resize-none rounded-lg border bg-[var(--color-dark-700)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-accent-blue)]',
                errors.message ? 'border-red-500' : 'border-[var(--color-dark-500)]'
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
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-lg bg-[var(--color-accent-blue)] py-3.5 text-sm font-semibold text-[var(--color-dark-900)] transition-all hover:shadow-[0_0_20px_rgba(88,166,255,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
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
