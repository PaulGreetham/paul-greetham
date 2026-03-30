import { CalendarHeatmap } from "@/components/ui/calendar-heatmap"
import { fetchGitHubActivity } from "@/lib/github-activity"
import { cn } from "@/lib/utils"
import { typography } from "@/lib/typography"
import { LinkButton } from "@/components/ui/link-button"

export async function GitHubActivitySection() {
  const activity = await fetchGitHubActivity()

  return (
    <section id="github-activity" className="section-shell">
      <div className="section-frame space-y-6">
        <div className="space-y-4 text-center">
          <div className="glass-chip">GitHub Activity</div>
          <h2 className={cn(typography.h2, "text-center")}>Contribution Heatmap</h2>
        </div>

        <CalendarHeatmap data={activity} />

        <div className="flex justify-center">
          <LinkButton href="https://github.com/PaulGreetham" title="View GitHub profile">
            View GitHub Profile
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
