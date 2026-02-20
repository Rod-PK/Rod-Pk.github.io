import Section from '../layout/Section'

export default function About() {
  return (
    <Section id="about">
      <p className="mb-2 text-sm font-medium tracking-widest uppercase text-[var(--color-accent-blue)]">
        About Me
      </p>
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">
        Building the backend that powers great experiences
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Bio */}
        <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            I'm <span className="text-[var(--color-text-primary)] font-medium">Rodney Hinson</span>,
            a Fullstack &amp; AI Engineer specializing in scalable backend systems, modern React
            interfaces, and intelligent features powered by machine learning.
          </p>
          <p>
            From building a real-time EV charging platform for Ghana to enterprise e-commerce
            backends during my internship at Corextreme, I focus on writing clean, production-grade
            code that solves real-world problems.
          </p>
          <p>
            I thrive at the intersection of backend engineering and AI — designing APIs that are
            robust, developer-friendly, and ready for scale.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: '5+', label: 'Projects Shipped' },
            { value: '3+', label: 'APIs in Production' },
            { value: 'Node.js', label: 'Primary Runtime' },
            { value: 'AI/ML', label: 'Exploring Next' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-xl border border-[var(--color-dark-500)] bg-[var(--color-dark-800)] p-6 text-center transition-colors hover:border-[var(--color-accent-blue)]"
            >
              <span className="text-2xl font-bold text-[var(--color-accent-blue)]">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-[var(--color-text-muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
