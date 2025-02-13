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
  SiRedux,
  SiVercel,
  SiNetlify,
  SiExpo,
  SiApple,
  SiAndroid,
  SiMaptiler,
  SiMapbox,
  SiMui,
  SiShadcnui,
  SiSupabase,
  SiYoutube,
  SiAxios,
  SiCss3,
  SiJavascript,
  SiOpenai
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
  "JavaScript": {
    name: "JavaScript",
    icon: SiJavascript
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
  },
  "Vercel": {
    name: "Vercel",
    icon: SiVercel
  },
  "Netlify": {
    name: "Netlify",
    icon: SiNetlify
  },
  "Expo": {
    name: "Expo",
    icon: SiExpo
  },
  "React Native": {
    name: "React Native",
    icon: SiReact
  },
  "iOS": {
    name: "iOS",
    icon: SiApple
  },
  "Android": {
    name: "Android",
    icon: SiAndroid
  },
  "MapTiler": {
    name: "MapTiler",
    icon: SiMaptiler
  },
  "Mapbox": {
    name: "Mapbox",
    icon: SiMapbox
  },
  "MUI": {
    name: "MUI",
    icon: SiMui
  },
  "Shadcn": {
    name: "Shadcn",
    icon: SiShadcnui
  },
  "Supabase": {
    name: "Supabase",
    icon: SiSupabase
  },
  "Youtube": {
    name: "Youtube",
    icon: SiYoutube
  },
  "Axios": {
    name: "Axios",
    icon: SiAxios
  },
  "CSS": {
    name: "CSS",
    icon: SiCss3
  },
  "OpenAI": {
    name: "OpenAI",
    icon: SiOpenai
  }
} as const 