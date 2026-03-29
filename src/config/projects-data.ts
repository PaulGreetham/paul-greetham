import { techIcons, type TechIcon } from "@/config/tech-icons"

export type Project = {
  id: number
  title: string
  description: string
  details: string
  technologies: TechIcon[]
  projectUrl: string
  githubUrl?: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "IndieSuite",
    description: "Micro-SaaS for creative indie freelancers",
    details: "IndieSuite is a micro-SaaS for creative indie freelancers to manage their clients, projects, and invoices.",
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind", "Shadcn", "Vercel"].map((tech) => techIcons[tech]),
    projectUrl: "https://www.indiesuite.app/",
  },
  {
    id: 2,
    title: "Crystal Football",
    description: "Football predictions & insights app",
    details: "A mobile app for football fans to view match predictions, track results, and get insights on upcoming fixtures.",
    technologies: ["Expo", "React Native", "TypeScript", "Firebase", "RevenueCat", "NativeWind", "iOS"].map((tech) => techIcons[tech]),
    projectUrl: "https://apps.apple.com/nl/app/crystal-football/id6748298242",
  },
  {
    id: 3,
    title: "WattXchange",
    description: "Energy production monitoring dashboard",
    details: "An internal dashboard for monitoring solar and wind energy production across multiple parks with interactive charts and data tables.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Shadcn", "Jest"].map((tech) => techIcons[tech]),
    projectUrl: "https://main.d15sa22sfveukv.amplifyapp.com/",
    githubUrl: "https://github.com/PaulGreetham/wattxchange"
  },
  {
    id: 4,
    title: "Weivly",
    description: "Weight & body-composition tracker",
    details: "A cross-platform weight and body-composition tracker with analytics and insights.",
    technologies: ["Expo", "React Native", "TypeScript", "Firebase", "NativeWind", "iOS"].map((tech) => techIcons[tech]),
    projectUrl: "https://www.weivly.com/",
  },
  {
    id: 5,
    title: "My Game Weather",
    description: "Weather app for football fans",
    details: "Weather app that allows fans to check the weather for their favourite football team's next game.",
    technologies: ["Expo", "React Native", "TypeScript", "Firebase", "NativeWind", "iOS"].map((tech) => techIcons[tech]),
    projectUrl: "https://my-game-weather.vercel.app/",
  },
  {
    id: 6,
    title: "Clinical Trials",
    description: "Streamline clinical trial management",
    details: "Access the latest information on clinical trials, making it easier to find relevant studies and track their progress.",
    technologies: ["Angular", "TypeScript", "SCSS", "RxJS", "Jest", "Vercel"].map((tech) => techIcons[tech]),
    projectUrl: "https://clinical-trial-five.vercel.app/home",
    githubUrl: "https://github.com/PaulGreetham/clinical-trial"
  },
  {
    id: 7,
    title: "Check It Out",
    description: "Optimise moped maintenance routes",
    details: "A web application designed to optimize moped maintenance routes and visualize Amsterdam's neighborhoods.",
    technologies: ["React", "Node.js", "TypeScript", "MUI", "Mapbox", "Netlify"].map((tech) => techIcons[tech]),
    projectUrl: "https://paul-greetham-check-it-out.netlify.app/",
    githubUrl: "https://github.com/PaulGreetham/check-it-out"
  },
  {
    id: 8,
    title: "Vitalized-FS",
    description: "Listed company financial statements",
    details: "Built for investors, analysts, and finance professionals who need quick access to key financial metrics and statements.",
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "Shadcn", "Vercel"].map((tech) => techIcons[tech]),
    projectUrl: "https://vitalized-fs.vercel.app/",
    githubUrl: "https://github.com/PaulGreetham/vitalized-fs"
  },
]
