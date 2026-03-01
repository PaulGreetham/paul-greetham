"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { techIcons, type TechIcon } from "@/config/tech-icons"
import { motion } from "motion/react"
import { LinkButton } from "@/components/ui/link-button"

// Define the project type
type Project = {
  id: number
  title: string
  description: string
  details: string
  technologies: TechIcon[]
  projectUrl: string
  githubUrl?: string
}

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: "IndieSuite",
    description: "Micro-SaaS for creative indie freelancers",
    details: "IndieSuite is a micro-SaaS for creative indie freelancers to manage their clients, projects, and invoices.",
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind", "Shadcn", "Vercel"].map(tech => techIcons[tech]),
    projectUrl: "https://www.indiesuite.app/",
  },
  {
    id: 2,
    title: "Crystal Football",
    description: "Football predictions & insights app",
    details: "A mobile app for football fans to view match predictions, track results, and get insights on upcoming fixtures.",
    technologies: ["Expo", "React Native", "TypeScript", "Firebase", "NativeWind", "iOS"].map(tech => techIcons[tech]),
    projectUrl: "https://apps.apple.com/nl/app/crystal-football/id6748298242",
  },
  {
    id: 3,
    title: "WattXchange",
    description: "Energy production monitoring dashboard",
    details: "An internal dashboard for monitoring solar and wind energy production across multiple parks with interactive charts and data tables.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Shadcn", "Jest"].map(tech => techIcons[tech]),
    projectUrl: "https://main.d15sa22sfveukv.amplifyapp.com/",
    githubUrl: "https://github.com/PaulGreetham/wattxchange"
  },
  {
    id: 4,
    title: "Weivly",
    description: "Weight & body-composition tracker",
    details: "A cross‑platform weight and body‑composition tracker with analytics and insights.",
    technologies: ["Expo", "React Native", "TypeScript", "Firebase", "NativeWind", "iOS"].map(tech => techIcons[tech]),
    projectUrl: "https://www.weivly.com/",
  },
  {
    id: 5,
    title: "My Game Weather",
    description: "Weather app for football fans",
    details: "Weather app that allows fans to check the weather for their favourite football team's next game.",
    technologies: ["Expo", "React Native", "TypeScript", "Firebase", "NativeWind", "iOS"].map(tech => techIcons[tech]),
    projectUrl: "https://my-game-weather.vercel.app/",
  },
  {
    id: 6,
    title: "Clinical Trials",
    description: "Streamline clinical trial management",
    details: "Access the latest information on clinical trials, making it easier to find relevant studies and track their progress.",
    technologies: ["Angular", "TypeScript", "SCSS", "RxJS", "Jest", "Vercel"].map(tech => techIcons[tech]),
    projectUrl: "https://clinical-trial-five.vercel.app/home",
    githubUrl: "https://github.com/PaulGreetham/clinical-trial"
  },
  {
    id: 7,
    title: "Check It Out",
    description: "Optimise moped maintenance routes",
    details: "A web application designed to optimize moped maintenance routes and visualize Amsterdam's neighborhoods.",
    technologies: ["React", "Node.js", "TypeScript", "MUI", "Mapbox", "Netlify"].map(tech => techIcons[tech]),
    projectUrl: "https://paul-greetham-check-it-out.netlify.app/",
    githubUrl: "https://github.com/PaulGreetham/check-it-out"
  },
  {
    id: 8,
    title: "Vitalized-FS",
    description: "Listed company financial statements",
    details: "Built for investors, analysts, and finance professionals who need quick access to key financial metrics and statements.",
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "Shadcn", "Vercel"].map(tech => techIcons[tech]),
    projectUrl: "https://vitalized-fs.vercel.app/",
    githubUrl: "https://github.com/PaulGreetham/vitalized-fs"
  },
]

export function ProjectsSection() {
  return (
    <TooltipProvider>
      <section id="projects" className="relative min-h-screen flex flex-col items-center justify-between bg-muted p-4 sm:p-8 md:p-24">
        <div className="z-10 w-full max-w-6xl px-4 sm:px-6 md:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              "text-3xl font-semibold leading-none tracking-tight text-center mb-8"
            )}
          >
            Projects
          </motion.h1>
        </div>
        
        <div className="z-10 w-full max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 // Stagger the animations
                }}
              >
                <Card className="flex flex-col h-[280px] hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-4 text-sm line-clamp-3">{project.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => {
                        const Icon = tech.icon
                        return (
                          <Tooltip key={tech.name}>
                            <TooltipTrigger asChild>
                              <div 
                                className="text-xl text-primary hover:text-primary/80 transition-colors cursor-pointer"
                              >
                                <Icon />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        )
                      })}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <LinkButton 
                      href={project.projectUrl}
                      title="View live project"
                    >
                      View Project
                    </LinkButton>
                    
                    {project.githubUrl && (
                      <LinkButton 
                        href={project.githubUrl}
                        title="View source code"
                      >
                        GitHub
                      </LinkButton>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <DotPattern 
          className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          width={16}
          height={16}
          cx={1}
          cy={1}
          cr={1}
        />
      </section>
    </TooltipProvider>
  )
} 