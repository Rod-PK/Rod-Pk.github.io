import Section from '../layout/Section'
import SkillCard from './SkillCard'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  let globalIndex = 0

  return (
    <Section id="skills">
      <p className="mb-2 text-sm font-medium tracking-widest uppercase text-[var(--color-accent-blue)]">
        Skill Set
      </p>
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">
        Technologies I work with
      </h2>

      <div className="space-y-10">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-4 text-lg font-semibold text-[var(--color-text-secondary)]">
              {category.title}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  {...skill}
                  index={globalIndex++}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
