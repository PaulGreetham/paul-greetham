"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { techIcons, type TechIcon } from "@/config/tech-icons"
import { motion } from "motion/react"

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
    title: "My Game Weather",
    description: "Weather app for football fans",
    details: "The most advanced football weather app ever created. How's the weather at YOUR game? On iOS and Android.",
    technologies: ["Expo", "Next.js", "Supabase", "React Native", "TypeScript", "Tailwind CSS", "MapTiler", "iOS", "Android"].map(tech => techIcons[tech]),
    projectUrl: "https://www.mgw.football/",
  },
  {
    id: 2,
    title: "Check It Out",
    description: "Optimise moped maintenance routes",
    details: "A web application designed to optimize moped maintenance routes and visualize Amsterdam's neighborhoods.",
    technologies: ["React", "Node.js", "TypeScript", "MUI", "Mapbox", "Netlify"].map(tech => techIcons[tech]),
    projectUrl: "https://paul-greetham-check-it-out.netlify.app/",
    githubUrl: "https://github.com/PaulGreetham/check-it-out"
  },
  {
    id: 3,
    title: "Vitalized-FS",
    description: "Listed company financial statements",
    details: "Built for investors, analysts, and finance professionals who need quick access to key financial metrics and statements.",
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "Shadcn", "Vercel"].map(tech => techIcons[tech]),
    projectUrl: "https://vitalized-fs.vercel.app/",
    githubUrl: "https://github.com/PaulGreetham/vitalized-fs"
  },
  {
    id: 4,
    title: "The Beautiful Beatiful Game",
    description: "AI-powered footballer biographies",
    details: "An application that generates football player biographies in the style of famous authors using AI.",
    technologies: ["OpenAI", "Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "Shadcn", "Vercel"].map(tech => techIcons[tech]),
    projectUrl: "https://the-beautiful-beautiful-game.vercel.app/",
    githubUrl: "https://github.com/PaulGreetham/the-beautiful-beautiful-game"
  },
  {
    id: 5,
    title: "Workout Warrior",
    description: "Personal workout companion",
    details: "Workout Warrior allows users to search for exercise inspiration, log their gains, and watch workout videos from YouTube.",
    technologies: ["Youtube", "React", "Node.js", "JavaScript", "CSS", "Axios", "Netlify"].map(tech => techIcons[tech]),
    projectUrl: "https://workout-warrior.netlify.app/",
    githubUrl: "https://github.com/PaulGreetham/workout-warrior"
  },
  {
    id: 6,
    title: "Found + Ground",
    description: "Coffee blog",
    details: "Coffee blog showcasing the latest trends and expert insights, making it an essential resource for coffee enthusiasts.",
    technologies: ["React", "Node.js", "TypeScript", "CSS", "Netlify"].map(tech => techIcons[tech]),
    projectUrl: "https://found-and-ground.netlify.app/",
    githubUrl: "https://github.com/PaulGreetham/found-and-ground"
  }
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
                    {project.id === 1 ? (
                      <span className="text-sm text-muted-foreground">
                        To be released April &apos;25.
                      </span>
                    ) : (
                      <>
                        <a 
                          href={project.projectUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm underline"
                        >
                          View Project
                        </a>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm underline"
                        >
                          GitHub
                        </a>
                      </>
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