type ExperienceItem = {
  id: number
  title: string
  organization: string
  location: string
  period: string
  companyDescription: string[]
  duties: string[]
  technologies?: string[]
}

type ExperienceCategory = {
  id: string
  label: string
  subcategories?: {
    id: string
    label: string
    items: ExperienceItem[]
  }[]
  items?: ExperienceItem[]
}

export const experienceData: ExperienceCategory[] = [
  {
    id: "professional",
    label: "Professional",
    subcategories: [
      {
        id: "check-technologies",
        label: "Check Technologies",
        items: [
          {
            id: 1,
            title: "Frontend Developer",
            organization: "Check Technologies",
            location: "Amsterdam, NL",
            period: "October 2024 - Present",
            companyDescription: [
              "Check is a start-up specialising in shared-mobility (mopeds and cars) within the Netherlands. It is a high volume usage (20m+ trips) app that aims to redefine an industry."
            ],
            duties: [
              "Worked on frontend features and tickets for the back office custom built system, ToolShed, used by all departments.",
              "Built most advanced feature undertaken by Check, Planned Reservations, for cars.",
              "Created new service areas, zones, sectors and subsectors using geojson from backend api.",
              "Implemented draw functionality and animations in MapBox for better UX/UI.",
              "Added a new UI library, ShadCn, into the existing UI library to modernise an uninspiring UI."
            ],
            technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind", "ShadCn", "MapBox", "GeoJson", "GitHub", "Docker"]
          }
        ]
      },
      {
        id: "risk-challenger",
        label: "RiskChallenger",
        items: [
          {
            id: 2,
            title: "Frontend Developer",
            organization: "RiskChallenger",
            location: "Amersfoort, NL",
            period: "April 2023 - September 2024",
            companyDescription: [
              "RiskChallenger is a risk consultancy software provider within the communicative risk industry. It is a Saas scale-up and used by multinational companies and government agencies."
            ],
            duties: [
              "Focussed on working through tickets for the custom built Saas system, including creating new features and fixing bugs.",
              "Saught to improve the codebase and make it more maintainable and scalable, from both a technical and UX perspective.",
              "Liased with internal teams to ensure relevant improvements that were needed by the clinets were on point.",
              "Wrote tests using Cypress and Jest to ensure the code was working as expected and adhered to best practices.",
              "Worked with the design team to ensure the UI was up to standard and adhered to the brand guidelines."
            ],
            technologies: ["Next.js", "Angular", "TypeScript", "Node.js", "HTML", "SCSS", "GitLab", "Cypress", "Jest"]
          }
        ]
      },
      {
        id: "beatnikz",
        label: "Beatnikz Republic Brewing Co.",
        items: [
          {
            id: 3,
            title: "Founder",
            organization: "Beatnikz Republic Brewing Co.",
            location: "Manchester, UK",
            period: "January 2015 - April 2022",
            companyDescription: [
              "I founded Beatnikz Republic Brewing Co., in Manchester, UK. From brewing in my kitchen to producing 500,000L annually and exporting to 9 global markets and supplying supermarkets."
            ],
            duties: [
              "Generated £1.3m annual revenue",
              "100% yoy growth (4 years in a row)",
              "Exported to 9 different markets",
              "Open 3 city centre bars in Manchetser",
              "Full brand design and artwork direction",
              "Built social media accounts to 14K from 0",
              "Employed 25+ staff over 3 businesses",
              "Raised €550k of capital investment"
            ],
            technologies: ["Business Development", "Brand Management", "Team Leadership", "Financial Management", "Marketing", "Operations"]
          }
        ]
      }
    ]
  },
  {
    id: "bootcamps",
    label: "Bootcamps",
    subcategories: [
      {
        id: "le-wagon",
        label: "Le Wagon Amsterdam",
        items: [
          {
            id: 5,
            title: "Software Engineering Bootcamp",
            organization: "Le Wagon",
            location: "Remote",
            period: "September 2022 - December 2022",
            companyDescription: [
              "Intensive web development bootcamp covering full-stack development. Built multiple web applications using Ruby on Rails."
            ],
            duties: [
              "Developed full-stack applications using Ruby on Rails",
              "Implemented MVC architecture patterns",
              "Built responsive web applications with Bootstrap",
              "Worked with SQL databases and Active Record"
            ],
            technologies: ["Ruby", "Rails", "PostgreSQL", "Bootstrap", "HTML", "CSS", "JavaScript"]
          }
        ]
      },
      {
        id: "salt",
        label: "School of Applied Technology (SALT)",
        items: [
          {
            id: 6,
            title: "Introduction to Software Development",
            organization: "School of Applied Technology",
            location: "Remote",
            period: "June 2022 - August 2022",
            companyDescription: [
              "Foundation course in software development fundamentals. Focus on JavaScript and modern web development practices."
            ],
            duties: [
              "Learned JavaScript fundamentals",
              "Built basic web applications",
              "Practiced test-driven development",
              "Collaborated on team projects"
            ],
            technologies: ["JavaScript", "HTML", "CSS", "Git", "Testing"]
          }
        ]
      }
    ]
  },
  {
    id: "certifications",
    label: "Certifications",
    subcategories: [
      {
        id: "ux-design",
        label: "UX Design Institute",
        items: [
          {
            id: 8,
            title: "Professional Diploma in UI Design",
            organization: "UX Design Institute",
            location: "Remote",
            period: "January 2024 - May 2024",
            companyDescription: [
              "A university-accredited UI course to learn how to create pixel-perfect user interfaces. This course includes both a final exam and a course project. The project is to create the UI for a new challenger bank. Modules of the course include:"
            ],
            duties: [
              "Introduction to UI Design",
              "Brand + Persoanlity",
              "Layout",
              "Design Principles",
              "Interactivity",
              "Typography",
              "Color, Shapes + Effects",
              "Iconography + Imagery",
              "Design Processes",
              "Presenting Designs",
            ],
            technologies: ["UI Design", "Figma", "Moodboards", "Wireframing", "Prototyping"]
          }
        ]
      },
      {
        id: "udemy",
        label: "Udemy",
        items: [
          {
            id: 9,
            title: "Angular Development",
            organization: "Udemy",
            location: "Remote",
            period: "April 2023",
            companyDescription: [
              "Comprehensive Angular development course covering modern web development practices."
            ],
            duties: [
              "Angular (The Complete Guide 2023)",
            ],
            technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "Material Design"]
          }
        ]
      },
      {
        id: "codecademy",
        label: "Codecademy",
        items: [
          {
            id: 10,
            title: "Web Development Path",
            organization: "Codecademy",
            location: "Remote",
            period: "May 2022 - January 2023",
            companyDescription: [
              "Comprehensive web development curriculum covering front-end and back-end technologies."
            ],
            duties: [
              "Learn Intermediate TypeScript (Jan '23)",
              "Learn SCSS: Responsive Design (Nov '22)",
              "Learn Intermediate JavaScript (Nov '22)",
              "Learn Node.js (Nov '22)",
              "Introduction to X/UI Design (Oct '22)",
              "Learning Color Design (Oct '22)",
              "Learn Responsive Design (Oct '22)",
              "Learn Ruby (Sept '22)",
              "Learn JavaScript (July '22)",
              "Learn CSS (June '22)",
              "Learn HTML (May '22)"
            ],
            technologies: [
              "TypeScript",
              "SCSS",
              "JavaScript",
              "Node.js",
              "UI Design",
              "Ruby",
              "HTML",
              "CSS",
              "Responsive Design"
            ]
          }
        ]
      }
    ]
  }
] 