import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { GitHubActivitySection } from "@/components/sections/github-activity"
import { ContactSection } from "@/components/sections/contact"

export default async function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-background antialiased">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubActivitySection />
      <ContactSection />
    </main>
  )
}
