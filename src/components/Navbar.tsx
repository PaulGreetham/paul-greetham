"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { typography } from "@/lib/typography"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false) // Close menu after clicking
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border-b z-50">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 items-center ml-auto">
        {navItems.map((item) => (
          <Button 
            key={item.id}
            variant="ghost" 
            onClick={() => scrollToSection(item.id)}
            className={typography.nav}
          >
            {item.label}
          </Button>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden">
          <div className="flex flex-col p-4">
            {navItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  typography.nav,
                  "justify-start w-full text-left py-3"
                )}
              >
                {item.label}
              </Button>
            ))}
            <div className="pt-2 pb-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 