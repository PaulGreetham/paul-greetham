"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { typography } from "@/lib/typography"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto max-w-6xl border border-border/85 bg-background/78 px-3 py-2 shadow-[0_24px_60px_-32px_hsl(var(--shadow-color)/0.7)] backdrop-blur-md md:backdrop-blur-2xl",
          // A pill shape stretches into an oval once the mobile menu expands inside it
          isOpen ? "rounded-[1.75rem]" : "rounded-full"
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <a
            href="#home"
            onClick={closeMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/85 bg-card/80 font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Go to home section"
          >
            PG
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Button
                key={item.id}
                asChild
                variant="ghost"
                className={cn(
                  typography.nav,
                  "rounded-full px-4 text-foreground/75 transition-colors hover:bg-primary/10 hover:text-primary"
                )}
              >
                <a href={`#${item.id}`}>{item.label}</a>
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/85 bg-card/80 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="mt-3 rounded-[1.5rem] border border-border/85 bg-card/85 p-3 shadow-[0_24px_60px_-32px_hsl(var(--shadow-color)/0.65)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  asChild
                  variant="ghost"
                  className={cn(
                    typography.nav,
                    "justify-start rounded-2xl px-4 py-3 text-left text-foreground/85 hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  <a href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
