interface Education {
  school: string;
  degree: string;
  graduationYear: string;
  awards?: string[];
}

interface WorkExperience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface Resume {
  resumeIntro: {
    name: string;
    title: string;
    email: string;
  };
  education: Education[];
  skills: string[];
  workExperience: WorkExperience[];
}

export const resume: Resume = {
  resumeIntro: {
    name: "Shane Hingtgen",
    title: "Software Developer",
    email: "shanehingtgen@gmail.com",
  },
  education: [
    {
      school: "Bellevue University",
      degree: "B.S. in Web Development",
      graduationYear: "2024",
      awards: ["Honor's Student Program"],
    },
    {
      school: "Kirkwood Community College",
      degree: "A.A.S. in Energy Production & Distribution Technology",
      graduationYear: "2014",
      awards: ["Dean's List"],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "React MUI",
    "Angular",
    "HTML",
    "CSS",
    "MongoDB",
    "RESTful APIs",
  ],
  workExperience: [
    {
      company: "Ulteig",
      position: "Software Developer",
      location: "Hiawatha, IA",
      startDate: "August 2023",
      endDate: "Present",
      description: [
        "Developed interactive web applications using React framework, implementing reusable components to enhance code efficiency and maintainability.",
        "Utilized TypeScript to ensure robust and scalable code bases, enhancing development workflow and minimizing errors.",
        "Created UI mockups in Figma, translating design concepts into functional user interfaces with attention to detail and usability.",
        "Built and implemented features, such as custom API error handling through banners for intuitive user feedback.",
        "Implemented custom field validators to ensure data integrity and improve user experience.",
        "Designed and developed forms with a user-centric approach, leveraging React to create intuitive and responsive form layouts for enhanced user interaction and data collection.",
        "Wrote custom theming using CSS and Material UI's theming capabilities, ensuring consistency and brand alignment across web applications.",
        "Proficient in debugging issues both in code and within Azure DevOps, utilizing troubleshooting skills to identify and resolve issues efficiently.",
        "Developed and executed test cases using Jest and Vitest, ensuring software quality and reliability.",
        "Presented finalized features to stakeholders, effectively communicating project progress and gathering feedback for continuous improvement.",
      ],
    },
    {
      company: "Ulteig",
      position: "Distribution Field Designer",
      location: "Hiawatha, IA",
      startDate: "September 2019",
      endDate: "Present",
      description: [
        "Proficient in CAD to produce compliant designs that meet client specifications and regulatory standards.",
        "Conducted meticulous field data collection.",
        "Mentored new team members.",
      ],
    },
    {
      company: "NextEra Energy",
      position: "Wind Turbine Technician II",
      location: "Carlock, IL",
      startDate: "October 2014",
      endDate: "September 2019",
      description: [
        "Mentored new team members,focusing on safety protocols and productivity enhancement.",
        "Employed diagnostic tools and performance profiling to accurately identify and troubleshoot turbine malfunctions.",
      ],
    },
  ],
};
