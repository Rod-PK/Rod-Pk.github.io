import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiEnvelope } from 'react-icons/hi2'

const socials = [
  {
    label: 'GitHub',
    icon: SiGithub,
    href: 'https://github.com/rod-Pk',
  },
  {
    label: 'LinkedIn',
    icon: SiLinkedin,
    href: 'https://www.linkedin.com/in/rodney-hinson',
  },
  {
    label: 'Email',
    icon: HiEnvelope,
    href: 'mailto:rodneyhinson22@gmail.com',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-dark-500)] bg-[var(--color-dark-900)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        {/* Branding */}
        <p className="text-sm text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} Rodney Hinson. Built with React & intention.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-accent-blue)] text-xl"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
