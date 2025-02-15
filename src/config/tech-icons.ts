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
  SiOpenai,
  SiGithub,
  SiGitlab,
  SiFigma,
  SiDocker,
  SiJest,
  SiCypress,
  SiSass
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
  "Tailwind CSS": {
    name: "Tailwind",
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
  },
  "Github": {
    name: "Github",
    icon: SiGithub
  },
  "Gitlab": {
    name: "Gitlab",
    icon: SiGitlab
  },
  "Figma": {
    name: "Figma",
    icon: SiFigma
  },
  "Docker": {
    name: "Docker",
    icon: SiDocker
  },
  "Jest": {
    name: "Jest",
    icon: SiJest
  },
  "Cypress": {
    name: "Cypress",
    icon: SiCypress
  },
  "SCSS": {
    name: "SCSS",
    icon: SiSass
  }
} as const 