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
  githubUrl: string
}

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: "My Game Weather",
    description: "Weather app for football fans",
    details: "A responsive portfolio website showcasing my projects and skills, featuring dark mode ans somehtign",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"].map(tech => techIcons[tech]),
    projectUrl: "https://www.mgw.football/",
    githubUrl: "https://github.com/username/portfolio"
  },
  {
    id: 2,
    title: "Check It Out",
    description: "Full-stack e-commerce solution",
    details: "Complete e-commerce platform with shopping cart, payment processing, and order management",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"].map(tech => techIcons[tech]),
    projectUrl: "https://paul-greetham-check-it-out.netlify.app/",
    githubUrl: "https://github.com/PaulGreetham/check-it-out"
  },
  {
    id: 3,
    title: "Vitalized-FS",
    description: "Collaborative task tracker",
    details: "Real-time task management application with team collaboration features and progress tracking",
    technologies: ["Vue.js", "Firebase", "TypeScript"].map(tech => techIcons[tech]),
    projectUrl: "https://vitalized-fs.vercel.app/",
    githubUrl: "https://github.com/PaulGreetham/vitalized-fs"
  },
  {
    id: 4,
    title: "Workout Warrior",
    description: "Real-time weather tracking",
    details: "Weather forecasting application with interactive maps and detailed meteorological data",
    technologies: ["React", "Node.js", "MongoDB"].map(tech => techIcons[tech]),
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/username/weather"
  },
  {
    id: 5,
    title: "The Beautiful Game",
    description: "Social media metrics tracker",
    details: "Analytics dashboard for tracking social media engagement and audience growth",
    technologies: ["Angular", "Node.js", "PostgreSQL"].map(tech => techIcons[tech]),
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/username/analytics"
  },
  {
    id: 6,
    title: "Found + Ground",
    description: "Personal workout companion",
    details: "Mobile-first fitness application for tracking workouts and monitoring progress",
    technologies: ["React", "GraphQL", "MongoDB"].map(tech => techIcons[tech]),
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/username/fitness"
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