import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiReact,
  SiPython,
  SiGit,
  SiDocker,
  SiFirebase,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si'
import { HiShieldCheck, HiCpuChip } from 'react-icons/hi2'

export const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, level: 90 },
      { name: 'Node.js', icon: SiNodedotjs, level: 90 },
      { name: 'Express.js', icon: SiExpress, level: 85 },
      { name: 'React', icon: SiReact, level: 80 },
      { name: 'Python', icon: SiPython, level: 70 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80 },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'REST APIs', icon: SiPostman, level: 90 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'Firebase', icon: SiFirebase, level: 75 },
      { name: 'Authentication', icon: HiShieldCheck, level: 85 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: SiGit, level: 85 },
      { name: 'Docker', icon: SiDocker, level: 65 },
      { name: 'AI / ML', icon: HiCpuChip, level: 60 },
    ],
  },
]
