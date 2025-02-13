"use client"

// import { useState } from "react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { experienceData } from "@/config/experience-data"

// Define types for our experience data
type ExperienceItem = {
  id: number
  title: string
  organization: string
  location: string
  period: string
  companyDescription: string[]
  duties: string[]
  technologies?: string[]
}

type ExperienceCategory = {
  id: string
  label: string
  subcategories?: {
    id: string
    label: string
    items: ExperienceItem[]
  }[]
  items?: ExperienceItem[]
}

export function ExperienceSection() {
  // const [activeCategory, setActiveCategory] = useState(experienceData[0].id)

  return (
    <section id="experience" className="relative min-h-screen flex flex-col items-center bg-background py-24 px-4 sm:px-8 md:px-24">
      <div className="z-10 w-full max-w-6xl">
        <h2 className={cn(typography.h2, "text-center mb-12")}>Experience</h2>
        
        <Tabs defaultValue={experienceData[0].id} className="w-full">
          <TabsList className="w-full justify-start mb-8 overflow-x-auto">
            {experienceData.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="min-w-fit"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {experienceData.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {category.subcategories ? (
                <Tabs defaultValue={category.subcategories[0].id} className="w-full">
                  <TabsList className="w-full justify-start mb-6">
                    {category.subcategories.map((sub) => (
                      <TabsTrigger key={sub.id} value={sub.id}>
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

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.organization} | {item.location}</CardDescription>
          </div>
          <span className="text-sm text-muted-foreground">{item.period}</span>
        </div>
      </CardHeader>
      <CardContent>
        {/* Company description */}
        {item.companyDescription.map((desc, index) => (
          <p key={index} className="mb-2 text-muted-foreground">
            {desc}
          </p>
        ))}
        
        {/* Duties/Responsibilities */}
        {item.duties.length > 0 && (
          <ul className="list-disc list-inside space-y-2 mt-4">
            {item.duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        )}
        
        {/* Technologies */}
        {item.technologies && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
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