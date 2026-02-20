import Section from '../layout/Section'

export default function About() {
  return (
    <Section id="about">
      <p className="mb-2 text-xs font-mono tracking-widest uppercase text-[var(--color-text-muted)]">
        About Me
      </p>
      <h2 className="mb-8 text-3xl font-medium tracking-tight md:text-4xl">
        Backend-first engineer. APIs, scale, and AI-ready systems.
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Bio */}
        <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            <span className="text-[var(--color-text-primary)] font-medium">Rodney Hinson</span> —
            Fullstack &amp; AI Engineer. I ship production backends, RESTful APIs, and modern
            frontends. Strong in Node.js, React, and bringing AI/ML into real products.
          </p>
          <p>
            Experience ranges from real-time EV charging platforms to enterprise e-commerce
            backends (Corextreme). I write maintainable code, design for scale, and integrate
            cleanly with existing systems.
          </p>
          <p>
            Open to global, hybrid, and remote roles where backend quality and intelligent
            features matter.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: '5+', label: 'Projects Shipped' },
            { value: '3+', label: 'APIs in Production' },
            { value: 'Node.js', label: 'Primary Runtime' },
            { value: 'AI/ML', label: 'In Practice' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-6 text-center shadow-none transition-all duration-300 ease-out hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-elevated)]"
            >
              <span className="text-2xl font-bold text-[var(--color-text-primary)]">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-[var(--color-text-muted)] font-mono uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
