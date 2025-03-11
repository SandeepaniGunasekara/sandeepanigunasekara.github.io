export const METADATA = {
  author: "Sandeepani Gunasekara",
  title: "Portfolio | Sandeepani Gunasekara",
  description:
    "Sandeepani Gunasekara is a dedicated Software Engineer with a strong foundation in software development, programming principles, and software testing methodologies.",
  siteUrl: "https://www.sandeepanigunasekara.me/",
  twitterHandle: "",
  keywords: [
    "Sandeepani Gunasekara",
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A dedicated Software Engineer",
  "I build scalable and efficient systems",
  "I solve complex technical challenges",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: sandeepanigunasekaraofficial@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sandeepani-gunasekara",
  },
  {
    name: "github",
    url: "https://github.com/SandeepaniGunasekara",
  },
  {
    name: "medium",
    url: "https://medium.com/@sandeepanigunasekaraofficial",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "java",
    "csharp",
    "c",
    "python",
  ],
  librariesAndFrameworks: [
    "react",
    "angular",
    "springboot",
    "nodejs",
    // "mvc",
    // "rest",
    "aspnetcore"
  ],
  databases: ["mysql", "mssql", "mongodb"],
  other: ["git", "github", "jira", "trello", "azure","serenitybdd","firebase",
    "RabbitMQ"],
};

export const PROJECTS = [
  {
    name: "School Management System",
    image: "/projects/school-management.webp",
    blurImage: "/projects/blur/school-management-blur.webp",
    description: "School management with zonal director through web application implementation",
    gradient: ["#142D46", "#2E4964"],
    url: "",
    tech: ["angular", "springboot", "mongodb", "firebase", "mvc", "rest"],
    range: "OCT 2022 - JUN 2023",
    type: "Group Project",
  },
  {
    name: "Resume Management System",
    image: "/projects/resume-management.webp",
    blurImage: "/projects/blur/resume-management-blur.webp",
    description: "User-friendly interfaces for designing professional resumes with customizable templates",
    gradient: ["#000066", "#6699FF"],
    url: "",
    tech: ["reactjs", "aspnetcore", "typescript", "entityframework", "mysql"],
    range: "DEC 2024 - PRESENT",
    type: "Individual Project",
  },
  {
    name: "Note Keeping App",
    image: "/projects/note-keeping.webp",
    blurImage: "/projects/blur/note-keeping-blur.webp",
    description: "Web-based note keeping app with color coding, labels, and image uploads",
    gradient: ["#F14658", "#DC2537"],
    url: "",
    tech: ["angular", "springboot", "mongodb", "firebase"],
    range: "AUG 2024 - DEC 2024",
    type: "Individual Project",
  },
  {
    name: "ZeroDefect - Software Quality Testing",
    image: "/projects/zero-defect.webp",
    blurImage: "/projects/blur/zero-defect-blur.webp",
    description: "Software Quality Testing with automated regression suites and real-time bug reporting",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "",
    tech: ["selenium", "serenity", "bdd", "cucumber"],
    range: "DEC 2024 - JAN 2025",
    type: "Group Project",
  },
];

export const WORK_CONTENTS = {
  AGRITHMICS: [
    {
      title: "Agrithmics PVT LTD",
      description:
        "Agrithmics (Private) Limited is an agile IoT-enabled, cloud-based Process Automation and Fintech solution company with over five years of experience, specializing in industrial digitization through swift delivery practices and customer-focused execution. The award-winning AgriX platform streamlines supply chain ecosystems by enabling process automation, digital payment solutions, GPS monitoring, and seamless procurement, benefiting industries, suppliers, and smallholder growers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Intern Software Engineer (Full Stack)
        </div>
      ),
    },
    {
      title: "Work Experience",
      description:
        "Contributed to the Cultive8 and Finlay Agrigen projects, platforms bridging Bangladeshi farmers and retailersERP and IoT systems, by designing and developing full-stack solutions, integrating IoT functionalities, optimizing workflows, and creating and managing RESTful APIs and Microservice architectures. Utilize relational databases and ORM frameworks (Entity Framework, Dapper) Participate in Agile/Scrum methodologies",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Intern Software Engineer (Full Stack)
        </div>
      ),
    },
    {
      title: " Technologies",
      description:
        " React.js, C#, .NET, .NET Core, Node.js, MSSQL, Material UI, Microsoft Azure DevOps,Redis, RabbitMQ, CLEAN Architecture",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Intern Software Engineer (Full Stack)
        </div>
      ),
    },
  //   {
  //     title: "Optimization",
  //     description:
  //       "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Frontend Engineer Intern
  //       </div>
  //     ),
  //   },
  ],
  // AVIATE: [
  //   {
  //     title: "Aviate",
  //     description:
  //       "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Finding the right job isn&apos;t fate, it&apos;s navigation
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Innovation",
  //     description:
  //       "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Frontend Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
};

export const ACHIEVEMENTS = [
  {
    title: "Hack Moral",
    description: "Participant in 2023 | Organized by INTECS, Faculty of Information Technology, University of Moratuwa",
    year: "2023",
  },
  {
    title: "Mora UXplore 1.0",
    description: "Participant in 2023 | Organized by IEEE Student Branch of University of Moratuwa",
    year: "2023",
  },
  {
    title: "FIT CODERUSH",
    description: "Participant in 2023 | Organized by IEEE Student Branch of University of Moratuwa",
    year: "2023",
  },
];

export const ADDITIONAL_DETAILS = {
  programmingLanguages: ["Java", "C#", "C", "Python"],
  webDevelopment: ["HTML", "CSS", "JavaScript"],
  frameworks: ["React.js", ".NET", "Spring Boot", "Angular", "Node.js"],
  databases: ["MySQL", "MSSQL", "MongoDB"],
  versionControl: ["Git", "GitHub", "Jira", "Trello", "Azure DevOps"],
  testingTools: ["Selenium", "Serenity BDD", "Cucumber"],
  softSkills: ["Problem Solving", "Adaptability", "Time Management", "Communication Skills", "Goal oriented"],
  interests: ["Poetry and literature works", "Computing", "Music"],
};

export const REFERENCES = [
  {
    name: "Dr. Supunmali Ahangama",
    title: "Senior Lecturer",
    organization: "Department of Information Technology Faculty of Information Technology University of Moratuwa",
    contact: "+94 71 486 6652",
    email: "supunmali@uom.lk",
  },
  {
    name: "Mr. Hasara Samson",
    title: "Software Engineer",
    organization: "Rootcode Labs",
    contact: "+94 77 505 3145",
    email: "hasara.samson@rootcodelabs.com",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
