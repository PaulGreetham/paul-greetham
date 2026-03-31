export type ExperienceItem = {
  id: number
  title: string
  organization: string
  location: string
  period: string
  companyDescription: string[]
  duties: string[]
  technologies?: string[]
  websiteUrl?: string
}

export type ExperienceSubcategory = {
  id: string
  label: string
  items: ExperienceItem[]
}

export type ExperienceCategory = {
  id: string
  label: string
  subcategories?: ExperienceSubcategory[]
  items?: ExperienceItem[]
}
