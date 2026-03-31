"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme !== "light" : true

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        "relative rounded-full border border-border/85 bg-card/80 text-foreground shadow-[0_20px_50px_-30px_hsl(var(--shadow-color)/0.72)] backdrop-blur-xl transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun
        className={cn(
          "h-[1.1rem] w-[1.1rem] transition-all",
          isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        )}
      />
      <Moon
        className={cn(
          "absolute h-[1.1rem] w-[1.1rem] transition-all",
          isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"
        )}
      />
      <span className="sr-only">{isDark ? "Switch to light mode" : "Switch to dark mode"}</span>
    </Button>
  )
}
