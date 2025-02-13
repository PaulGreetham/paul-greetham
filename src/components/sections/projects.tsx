"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { techIcons, type TechIcon } from "@/config/tech-icons"

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
    details: "The most advanced football weather app ever created. How's the weather at YOUR game?",
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
    description: "Search financial statements of listed companies",
    details: "Built for investors, analysts, and finance professionals who need quick access to key financial metrics and statements.",
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "Shadcn", "Vercel"].map(tech => techIcons[tech]),
    projectUrl: "https://vitalized-fs.vercel.app/",
    githubUrl: "https://github.com/PaulGreetham/vitalized-fs"
  },
  {
    id: 4,
    title: "The Beautiful Beatiful Game",
    description: "AI-powered football player biographies",
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
    <section id="projects" className="relative min-h-screen flex flex-col items-center justify-between bg-muted p-24">
      <div className="z-10 w-full max-w-7xl">
        <h1 className={cn(
          "text-3xl font-semibold leading-none tracking-tight text-center mb-20 mt-4"
        )}>
          Projects
        </h1>
      </div>
      
      <div className="z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{project.details}</p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => {
                    const Icon = tech.icon
                    return (
                      <div 
                        key={tech.name} 
                        className="text-2xl text-primary hover:text-primary/80 transition-colors"
                        title={tech.name}
                      >
                        <Icon />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
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
              </CardFooter>
            </Card>
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
  )
} 