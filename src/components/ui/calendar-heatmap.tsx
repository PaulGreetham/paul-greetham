"use client"

import { eachDayOfInterval, endOfWeek, format, startOfWeek, subMonths } from "date-fns"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { CalendarHeatmapData } from "@/lib/github-activity"

type CalendarHeatmapProps = {
  data: CalendarHeatmapData[]
}

const heatmapClassNames = {
  zero: "bg-white/70 border-border/80 dark:bg-[#161b22] dark:border-[#2d333b]",
  one: "bg-[#c6edcf] border-[#b2dfbf] dark:bg-[#0e4429] dark:border-[#0e4429]",
  two: "bg-[#93e0a5] border-[#79cf8e] dark:bg-[#006d32] dark:border-[#006d32]",
  three: "bg-[#57cd72] border-[#43bb5f] dark:bg-[#26a641] dark:border-[#26a641]",
  four: "bg-[#2cc84d] border-[#1cb33f] dark:bg-[#39d353] dark:border-[#39d353]",
} as const

const heatmapLegend = [
  heatmapClassNames.zero,
  heatmapClassNames.one,
  heatmapClassNames.two,
  heatmapClassNames.three,
  heatmapClassNames.four,
]

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function CalendarHeatmap({ data }: CalendarHeatmapProps) {
  const sortedData = [...data].sort((a, b) => a.date.localeCompare(b.date))
  const firstDate = sortedData[0]?.date
  const lastDate = sortedData[sortedData.length - 1]?.date
  const startDate = startOfWeek(firstDate ? new Date(`${firstDate}T00:00:00`) : subMonths(new Date(), 11), {
    weekStartsOn: 0,
  })
  const endDate = endOfWeek(lastDate ? new Date(`${lastDate}T00:00:00`) : new Date(), { weekStartsOn: 0 })

  const activityByDate = new Map(sortedData.map((item) => [item.date, item]))
  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const weeks: Date[][] = []
  for (let index = 0; index < days.length; index += 7) {
    weeks.push(days.slice(index, index + 7))
  }

  const monthLabels = weeks.map((week, index) => {
    const labelDay = week.find((day) => day >= startDate && day <= endDate && day.getDate() <= 7)
    if (!labelDay) return ""
    if (index > 0) {
      const previousWeek = weeks[index - 1]
      if (previousWeek?.some((day) => day >= startDate && day <= endDate && day.getMonth() === labelDay.getMonth())) {
        return ""
      }
    }
    return format(labelDay, "MMM")
  })

  const firstLabelIndex = monthLabels.findIndex(Boolean)
  const lastLabelIndex = monthLabels.length - 1 - [...monthLabels].reverse().findIndex(Boolean)

  if (
    firstLabelIndex !== -1 &&
    lastLabelIndex !== -1 &&
    firstLabelIndex !== lastLabelIndex &&
    monthLabels[firstLabelIndex] === monthLabels[lastLabelIndex]
  ) {
    monthLabels[firstLabelIndex] = ""
  }

  return (
    <TooltipProvider>
      <div className="overflow-x-auto py-3">
        <div className="min-w-[820px] rounded-[1.5rem] border border-border/85 bg-card/68 p-5 backdrop-blur-xl">
          <div className="mb-3 grid grid-cols-[auto_1fr] gap-3">
            <div />
            <div className="grid" style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}>
              {monthLabels.map((label, index) => (
                <div key={`${label}-${index}`} className="text-[11px] text-muted-foreground">
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-3">
            <div className="grid grid-rows-7 gap-1 pt-1">
              {weekDays.map((day) => (
                <div key={day} className="flex h-3 items-center text-[11px] text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}>
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                  {week.map((day) => {
                    const dateKey = format(day, "yyyy-MM-dd")
                    const entry = activityByDate.get(dateKey)
                    const count = entry?.count ?? 0
                    const level = entry?.level ?? 0
                    const levelClass =
                      level <= 0
                        ? heatmapClassNames.zero
                        : level === 1
                          ? heatmapClassNames.one
                          : level === 2
                            ? heatmapClassNames.two
                            : level === 3
                              ? heatmapClassNames.three
                              : heatmapClassNames.four

                    return (
                      <Tooltip key={dateKey}>
                        <TooltipTrigger asChild>
                          <div
                            className={cn(
                              "h-3 w-3 rounded-[3px] border transition-transform hover:scale-110",
                              levelClass
                            )}
                          />
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <p>
                            {count === 0 ? "No contributions" : `${count} contribution${count === 1 ? "" : "s"}`} on{" "}
                            {format(day, "dd MMM yyyy")}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex items-center gap-1">
              {heatmapLegend.map((className, index) => (
                <div
                  key={index}
                  className={cn("h-3 w-3 rounded-[3px] border", className)}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
