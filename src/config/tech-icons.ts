import { IconType } from 'react-icons'
import { 
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiVuedotjs,
  SiAngular,
  SiPostgresql,
  SiGraphql,
  SiTailwindcss,
  SiStripe,
  SiRedux
} from 'react-icons/si'

export type TechIcon = {
  name: string
  icon: IconType
}

export const techIcons: { [key: string]: TechIcon } = {
  "Next.js": {
    name: "Next.js",
    icon: SiNextdotjs
  },
  "React": {
    name: "React",
    icon: SiReact
  },
  "TypeScript": {
    name: "TypeScript",
    icon: SiTypescript
  },
  "Node.js": {
    name: "Node.js",
    icon: SiNodedotjs
  },
  "MongoDB": {
    name: "MongoDB",
    icon: SiMongodb
  },
  "Firebase": {
    name: "Firebase",
    icon: SiFirebase
  },
  "Vue.js": {
    name: "Vue.js",
    icon: SiVuedotjs
  },
  "Angular": {
    name: "Angular",
    icon: SiAngular
  },
  "PostgreSQL": {
    name: "PostgreSQL",
    icon: SiPostgresql
  },
  "GraphQL": {
    name: "GraphQL",
    icon: SiGraphql
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    icon: SiTailwindcss
  },
  "Stripe": {
    name: "Stripe",
    icon: SiStripe
  },
  "Redux": {
    name: "Redux",
    icon: SiRedux
  }
} as const 