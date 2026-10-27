import { DotPattern } from "@/components/ui/dot-pattern"
import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"
import { typography } from "@/lib/typography"

const highlights = [
  { label: "Products", items: ["SaaS Platforms", "Mobile Apps"] },
  { label: "Focus", items: ["MVP Creation", "Frontend/Full-Stack"] },
  { label: "Background", items: ["Former Founder", "Customer Centric"] },
]

export function HeroSection() {
  return (
    <section id="home" className="section-shell pt-32 md:pt-40">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
        <div className="section-frame overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--glow-1)/0.22),transparent_32%),radial-gradient(circle_at_bottom_right,hsl(var(--glow-2)/0.18),transparent_30%)]" />
          <div className="relative space-y-14 md:space-y-24">
            <div className="space-y-6">
              <Reveal immediate y={16}>
                <p className="glass-chip">Software Developer</p>
              </Reveal>

              <Reveal immediate y={24} duration={0.6}>
                <h1
                  className={cn(
                    typography.h1,
                    "max-w-none text-left leading-[1.02] lg:text-[5.5rem] lg:whitespace-nowrap xl:text-8xl"
                  )}
                >
                  <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                    Hi, I&apos;m Paul Greetham
                  </span>
                </h1>
              </Reveal>

              <Reveal immediate delay={0.2} className="max-w-2xl">
                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  I build modern SaaS platforms, data-heavy dashboards and mobile apps with TypeScript,
                  bringing a founder&apos;s eye for product and customers to every line of code.
                </p>
              </Reveal>
            </div>

            <Reveal immediate delay={0.25} duration={0.6} className="grid gap-4 md:grid-cols-3">
              {highlights.map((highlight) => (
                <div key={highlight.label} className="glass-card p-5">
                  <p className="glass-chip mb-4">{highlight.label}</p>
                  <div className="space-y-1.5">
                    {highlight.items.map((item) => (
                      <p key={item} className="text-2xl font-semibold leading-tight">{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>

      <DotPattern
        className="fixed inset-0 z-0 opacity-60 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        width={16}
        height={16}
        cx={1}
        cy={1}
        cr={1}
      />
    </section>
  )
}
