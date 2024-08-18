import shWebPortfolio from "../assets/sh-web-portfolio.png";
import bobsRepairShop from "../assets/bcrs.png";
import nodebucket from "../assets/nodebucket.png";
import oldportfolio from "../assets/oldportfolio.png";
import loanapp from "../assets/loanapp.png";
import gpacalculator from "../assets/gpacalculator.png";
import composerapp from "../assets/composerapp.png";

interface Project {
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  appURL?: string;
  isComplete: boolean;
  projectImage: string;
  projectTechnologies: string[];
}

export const projects: Project[] = [
  {
    projectName: "My Web Portfolio",
    projectDescription:
      "A personal web portfolio designed to showcase my software development projects, highlighting my expertise in front-end technologies. Built using React, HTML, CSS, and TypeScript, this responsive and visually appealing site effectively demonstrates my skills, creativity, and proficiency in modern web development practices.",
    projectUrl: "https://github.com/shaneh92/shane-portfolio",
    isComplete: false,
    projectImage: shWebPortfolio,
    projectTechnologies: ["React", "HTML", "CSS", "TypeScript"],
  },
  {
    projectName: "Bob's Repair Shop",
    projectDescription:
      "A web application for managing PC repair services, enabling work order creation and tracking. It features dedicated portals for employees and customers, secure login, robust error handling, and validation to ensure a reliable user experience. This solution streamlines repairs, enhancing efficiency and customer satisfaction.",
    projectUrl: "https://github.com/shaneh92/bcrs/tree/main",
    appURL: "https://hingtgen-bcrs.onrender.com",
    isComplete: true,
    projectImage: bobsRepairShop,
    projectTechnologies: [
      "Angular",
      "JavaScript",
      "MongoDB",
      "RESTful APIs",
      "Node.js",
      "Express.js",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    projectName: "Nodebucket",
    projectDescription:
      "Nodebucket is a dynamic web app for efficient task management, using APIs and drag-and-drop functionality for a seamless user experience. Features include sign-in for user authentication, an about page detailing the app's purpose, and a contact page for inquiries. Nodebucket ensures a consistent, responsive interface across all devices.",
    projectUrl: "https://github.com/shaneh92/nodebucket",
    appURL: "https://hingtgen-nodebucket.onrender.com/#/",
    isComplete: true,
    projectImage: nodebucket,
    projectTechnologies: [
      "Angular",
      "JavaScript",
      "MongoDB",
      "RESTful APIs",
      "Node.js",
      "Express.js",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    projectName: "Old Portfolio",
    projectDescription:
      "This portfolio showcases my earlier work, crafted with HTML, CSS, and JavaScript. It features a comprehensive collection of my coursework, highlighting projects that shaped my web development skills. Designed to be simple, functional, and easy to navigate, it provided a clear overview of my journey and acquired skills.",
    projectUrl: "https://github.com/shaneh92/personal-portfolio",
    isComplete: true,
    projectImage: oldportfolio,
    projectTechnologies: ["HTML", "JavaScript", "CSS"],
  },
  {
    projectName: "Loan App",
    projectDescription:
      "Loan App is a powerful tool for calculating interest rates on loan amounts over any number of years. Users input loan details to receive accurate interest rate calculations. The app includes robust form validation, ensuring that users cannot submit the form until all required data is filled out, providing a user-friendly experience.",
    projectUrl: "https://github.com/shaneh92/loan-app",
    appURL: "https://shaneh92.github.io/loan-app/home",
    isComplete: true,
    projectImage: loanapp,
    projectTechnologies: ["Angular", "JavaScript", "MongoDB", "RESTful APIs"],
  },
  {
    projectName: "GPA Calculator",
    projectDescription:
      "This GPA Calculator lets students track classes and grades, storing data directly in the browser. It calculates GPA based on input and includes a login portal. Students can log in using predefined IDs (1007, 1008, 1009, 1010, 1011) to access personalized grade tracking and GPA calculation, ensuring a tailored user experience.",
    projectUrl: "https://github.com/shaneh92/gpa-calculator-app",
    appURL: "https://shaneh92.github.io/gpa-calculator-app/",
    isComplete: true,
    projectImage: gpacalculator,
    projectTechnologies: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    projectName: "Composer App",
    projectDescription:
      "Composer App displays a list of composers in a table and lets users search for them. Users can click on a composer’s ID to learn more about them. The app includes an 'About' page detailing its purpose and a 'Contact Us' page for user inquiries, offering a comprehensive and interactive experience",
    projectUrl: "https://github.com/shaneh92/composer-app",
    appURL: "https://shaneh92.github.io/composer-app/composer-list",
    isComplete: true,
    projectImage: composerapp,
    projectTechnologies: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
];
