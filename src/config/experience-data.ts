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
              "Achieved consistent 100% year-on-year growth for four consecutive years, generating £1.3m in annual revenue.",
              "Expanded internationally, exporting to nine markets while securing UK-wide distribution.",
              "Launched three city-centre bars in Manchester, creating 25+ jobs across multiple businesses.",
              "Led full brand design, artwork direction, and grew social media presence from zero to 14K followers.",
              "Successfully raised €550k in capital investment to fuel business growth from private investors."
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
        id: "salt",
        label: "School of Applied Technology (SALT)",
        items: [
          {
            id: 6,
            title: "Full-Stack Trainee Developer",
            organization: "School of Applied Technology (SALT)",
            location: "Amsterdam, NL",
            period: "January 2022 - April 2022",
            companyDescription: [
              "3 month full-stack trainee developer bootcamp at the School of Applied Technology (SALT). Embedded recruitment contract, but the firm went bankrupt in the Netherlands."
            ],
            duties: [
              "Intensive 3 month training bootcamp, which included weekend and monthly testing.",
              "Programming in a set team of 4 (mob programming).",
              "Used modern stack of TypeScript, React, Redux, MongoDB, Express, HTML, SCSS and Git.",
              "Final full-stack project witin a team of 4 focussing on B2C e-commerce.",
              "Extensive unit and e2e testing using Jest and Cypress."
            ],
            technologies: ["TypeScript", "Redux", "MongoDB", "Express", "HTML", "SCSS", "Git", "Jest", "Cypress"]
          }
        ]
      },
      {
        id: "le-wagon",
        label: "Le Wagon Amsterdam",
        items: [
          {
            id: 5,
            title: "Software Engineering Bootcamp",
            organization: "Le Wagon",
            location: "Amsterdam, NL",
            period: "July 2022 - September 2022",
            companyDescription: [
              "Intensive 10-week full-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6, SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to production a clone of AirBnB and a Rails prototype of NaturEscape. Modules included:."
            ],
            duties: [
              "Developed full-stack applications using Ruby on Rails.",
              "Implemented MVC architecture patterns.",
              "Built responsive web applications with Bootstrap.",
              "Worked with SQL databases and Active Record.",
              "Used with git and GitHub whilst pair programming."
            ],
            technologies: ["Ruby", "Rails", "PostgreSQL", "Bootstrap", "HTML", "CSS", "JavaScript"]
          }
        ]
      },
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
              "Design Principles & Processes",
              "Layout, Interactivity & Animation",
              "Color, Shapes & Effects",
              "Typography, Iconography & Imagery",
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
      },
      {
        id: "university",
        label: "University",
        items: [
          {
            id: 11,
            title: "BA (Hons) English Literature & Language",
            organization: "Manchester Metropolitan University",
            location: "Manchester, UK",
            period: "September 2002 - May 2006",
            companyDescription: [
              "A degree in English Literature & Language from Manchester Metropolitan University, which included modules/skills in:"
            ],
            duties: [
              "Shakespearean Drama, Romanticism, Modernism, Postmodernism, and Contemporary Literature.",
              "Ability to critically analyse texts to understand the author's intent and the context of the work.",
              "Working in a team to discuss and debate texts and ideas as well as project work.",
              "Political writing in the 20th Century and the works of George Orwell, Aldous Huxley, and Joseph Heller.",
              "Critial film theory and the role of literature in film and media.",
            ],
            technologies: ["English Literature", "Language", "Critical Analysis", "Writing", "Critial Reading", "Group Work", "Presentation Skills", "Public Speaking"]
          }
        ]
      },
    ]
  }
] 