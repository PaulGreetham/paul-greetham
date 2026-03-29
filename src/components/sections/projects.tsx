"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "motion/react"
import { LinkButton } from "@/components/ui/link-button"
import { typography } from "@/lib/typography"
import { projectsData } from "@/config/projects-data"

export function ProjectsSection() {
  return (
    <TooltipProvider>
      <section id="projects" className="section-shell">
        <div className="section-frame space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 text-center">
              <div className="glass-chip">Projects</div>
              <h2 className={cn(typography.h2, "text-center")}>Projects</h2>
              <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                A selection of web and mobile products, from internal dashboards to consumer-facing apps.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projectsData.map((project, index) => (
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
                <Card className="group flex h-full min-h-[320px] flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-primary/20 to-transparent" />
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-6 text-sm leading-7 text-muted-foreground line-clamp-4">{project.details}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => {
                        const Icon = tech.icon
                        return (
                          <Tooltip key={tech.name}>
                            <TooltipTrigger asChild>
                              <div 
                                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-card/80 text-lg text-primary transition-all duration-200 hover:border-primary/40 hover:bg-primary/10"
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
                  <CardFooter className="flex justify-between gap-3">
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
          className="opacity-60 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
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