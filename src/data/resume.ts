interface Education {
  school: string;
  degree: string;
  awards?: string[];
}
interface Certifications {
  certificationName: string;
  credentialID?: string;
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
  certifications: Certifications[];
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
      awards: ["Honor's Student Program"],
    },
    {
      school: "Kirkwood Community College",
      degree: "A.A.S. in Energy Production & Distribution Technology",
      awards: ["Dean's List"],
    },
  ],
  certifications: [
    {
      certificationName: "CompTIA Security+ (SY0-701)",
      credentialID: "GDESXVXSZEVQQ29T",
    },
    { certificationName: "OSHA 30 General Industry and Health" },
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
        "Created UI mockups in Figma, delivering 6+ designs translated into functional user interfaces with a focus on usability and adherence to client specifications.",
        "Built and implemented features, such as custom API error handling through banners for intuitive user feedback.",
        "Implemented custom field validators to ensure data integrity and improve user experience.",
        "Designed and developed forms with a user-centric approach, leveraging React to create intuitive and responsive form layouts for enhanced user interaction and data collection.",
        "Wrote custom theming using CSS and Material UI's theming capabilities, ensuring consistency and brand alignment across web applications.",
        "Proficient in debugging issues both in code and within Azure DevOps, utilizing troubleshooting skills to identify and resolve issues efficiently.",
        "Developed and executed at least 2–3 test cases per component using Vitest, ensuring comprehensive software quality and reliability.",
        "Presented 10+  finalized features to stakeholders, effectively communicating project progress and gathering feedback for continuous improvement.",
      ],
    },
    {
      company: "Ulteig",
      position: "Distribution Field Designer",
      location: "Hiawatha, IA",
      startDate: "September 2019",
      endDate: "Present",
      description: [
        "Utilized CAD & ArcGIS to produce compliant designs that meet client specifications and regulatory standards.",
        "Performed calculations to size transformers, anchors, and poles in accordance with client, local, and national code requirements.",
        "Conducted meticulous field data collection.",
        "Conducted meticulous field data collection using Trimble survey equipment, accurately capturing over 1,000 data points to support precise geospatial analysis and project planning.",
        "Mentored two new team members.",
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
        "Installed circuit breakers, power converters, control modules, and communication devices, while also performing maintenance on slip rings, large circuit breakers, gearboxes, and generators.",
        "Primary inventory manager for wind site value totaling approximately $2 Million.",
      ],
    },
  ],
};
