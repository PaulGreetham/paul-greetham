"use client"

import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { experienceData, type ExperienceItem } from "@/config/experience-data"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-frame">
        <div className="mb-8 space-y-4 text-center">
          <div className="glass-chip">Experience</div>
          <h2 className={cn(typography.h2, "text-center")}>Experience</h2>
        </div>
        
        <Tabs defaultValue={experienceData[0].id} className="w-full">
          <TabsList className="mb-8 h-auto w-full justify-start gap-2 overflow-x-auto rounded-full border border-border/70 bg-card/70 p-2">
            {experienceData.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="min-w-fit rounded-full"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {experienceData.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {category.subcategories ? (
                <>
                  {/* Only show nested tabs on md and larger screens */}
                  <div className="hidden md:block">
                    <Tabs defaultValue={category.subcategories[0].id} className="w-full">
                      <TabsList className="mb-6 h-auto w-full justify-start gap-2 rounded-full border border-border/70 bg-card/60 p-2">
                        {category.subcategories.map((sub) => (
                          <TabsTrigger key={sub.id} value={sub.id} className="rounded-full">
                            {sub.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {category.subcategories.map((sub) => (
                        <TabsContent key={sub.id} value={sub.id}>
                          <div className="grid gap-6">
                            {sub.items.map((item) => (
                              <ExperienceCard key={item.id} item={item} />
                            ))}
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>

                  {/* Show all cards stacked on mobile */}
                  <div className="block md:hidden">
                    <div className="grid gap-6">
                      {category.subcategories.map((sub) => (
                        sub.items.map((item) => (
                          <ExperienceCard key={`${sub.id}-${item.id}`} item={item} />
                        ))
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="grid gap-6">
                  {category.items?.map((item) => (
                    <ExperienceCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

    </section>
  )
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl md:text-2xl">{item.title}</CardTitle>
            <CardDescription>{item.organization} | {item.location}</CardDescription>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {item.websiteUrl && (
              <a 
                href={item.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                title="Visit website"
              >
                External Link
              </a>
            )}
            <span className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-sm text-muted-foreground">{item.period}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {item.companyDescription.map((desc, index) => (
          <p key={index} className="mb-2 text-sm leading-7 text-muted-foreground md:text-base">
            {desc}
          </p>
        ))}
        
        {item.duties.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm leading-7 md:text-base">
            {item.duties.map((duty, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>{duty}</span>
              </li>
            ))}
          </ul>
        )}
        
        {item.technologies && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.technologies.map((tech) => (
              <span 
                key={tech}
                className="rounded-full border border-border/70 bg-card/70 px-3 py-1 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
} 