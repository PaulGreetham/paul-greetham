import type { IconType } from "react-icons"

export type TechIcon = {
  name: string
  icon: IconType
}

export type TechIconsMap = Record<string, TechIcon>
