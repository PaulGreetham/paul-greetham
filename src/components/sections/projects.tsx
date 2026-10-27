import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LinkButton } from "@/components/ui/link-button"
import { Reveal } from "@/components/ui/reveal"
import { typography } from "@/lib/typography"
import { projectsData } from "@/config/projects-data"

export function ProjectsSection() {
  return (
    <TooltipProvider>
      <section id="projects" className="section-shell">
        <div className="section-frame space-y-10">
          <Reveal>
            <div className="space-y-4 text-center">
              <div className="glass-chip">Projects</div>
              <h2 className={cn(typography.h2, "text-center")}>Projects</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projectsData.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <Card className="group flex h-full min-h-[320px] flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-primary/20 to-transparent" />
                  <CardHeader className="pb-4">
                    <CardTitle as="h3" className="text-xl md:text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-6 text-sm leading-7 text-muted-foreground line-clamp-4">{project.details}</p>
                    <ul className="flex flex-wrap gap-3" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((tech) => {
                        const Icon = tech.icon
                        return (
                          <li key={tech.name}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span
                                  tabIndex={0}
                                  role="img"
                                  aria-label={tech.name}
                                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/85 bg-card/85 text-lg text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                  <Icon aria-hidden="true" />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{tech.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </li>
                        )
                      })}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-3">
                    <LinkButton
                      href={project.projectUrl}
                      aria-label={`View ${project.title} live project`}
                    >
                      View Project
                    </LinkButton>

                    {project.githubUrl && (
                      <LinkButton
                        href={project.githubUrl}
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        GitHub
                      </LinkButton>
                    )}
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}
