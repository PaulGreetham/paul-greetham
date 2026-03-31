import type { CalendarHeatmapData } from "@/types/github"

const GITHUB_ACTIVITY_URL = "https://github.com/users/PaulGreetham/contributions"

export async function fetchGitHubActivity(): Promise<CalendarHeatmapData[]> {
  try {
    const response = await fetch(GITHUB_ACTIVITY_URL, {
      next: { revalidate: 60 * 60 * 24 },
      headers: {
        "User-Agent": "paul-greetham-portfolio",
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub activity fetch failed with status ${response.status}`)
    }

    const html = await response.text()
    const matches = html.matchAll(
      /data-date="([^"]+)"[^>]*id="([^"]+)"[^>]*data-level="([^"]+)"[\s\S]*?<tool-tip[^>]*for="\2"[^>]*>([^<]+)<\/tool-tip>/g
    )
    const activity = Array.from(matches, ([, date, _id, level, tooltip]) => ({
      date,
      count: parseContributionCount(tooltip),
      level: Number(level),
    }))

    if (activity.length === 0) {
      throw new Error("No GitHub activity data found")
    }

    return activity
  } catch {
    return buildFallbackActivity()
  }
}

function buildFallbackActivity(): CalendarHeatmapData[] {
  const today = new Date()
  const start = new Date(today)
  start.setMonth(today.getMonth() - 11)

  const activity: CalendarHeatmapData[] = []
  const cursor = new Date(start)

  while (cursor <= today) {
    const day = cursor.getDay()
    const count = day === 0 || day === 6 ? 1 : day % 5
    activity.push({
      date: cursor.toISOString().slice(0, 10),
      count,
      level: Math.min(count, 4),
    })
    cursor.setDate(cursor.getDate() + 1)
  }

  return activity
}

function parseContributionCount(tooltip: string) {
  if (tooltip.startsWith("No contributions")) {
    return 0
  }

  const match = tooltip.match(/(\d+)\s+contribution/)
  return match ? Number(match[1]) : 0
}
