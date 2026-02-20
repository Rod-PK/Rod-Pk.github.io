import { useState } from 'react'
import Section from '../layout/Section'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../../data/projects'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Section id="projects">
        <p className="mb-2 text-sm font-medium tracking-widest uppercase text-[var(--color-accent-blue)]">
          Projects
        </p>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Things I've built
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelected}
            />
          ))}
        </div>
      </Section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
