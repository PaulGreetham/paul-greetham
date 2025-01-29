"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { typography } from "@/lib/typography"

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full flex items-center justify-end p-4 bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="flex gap-4 items-center">
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection("home")}
          className={typography.nav}
        >
          Home
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection("about")}
          className={typography.nav}
        >
          About
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection("experience")}
          className={typography.nav}
        >
          Experience
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection("projects")}
          className={typography.nav}
        >
          Projects
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection("contact")}
          className={typography.nav}
        >
          Contact
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar 