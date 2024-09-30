import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
// import project3 from "../assets/projects/project-3.webp";
// import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I'am full-stack web developer, and Passionate person about programming and tech relateds, i enjoy working with the front end technologies like Next.js , React and tailwind, as well as back-end solutions using laravel. Passionate about writing clean and efficient code, designing databases and Adept at problem-solving.
Always open to learn new technologies and contribute to meaningful projects.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Intern full stack developer",
    company: "NetFar",
    description: `creating a web application to manage the events and their exhibitors, with features like authentication and dashboard.`,
    technologies: ["Next.js", "Laravel", "UML"],
  },
  
  {
    year: "2021 - 2023",
    role: "A student at National Specialized Institute Boucenna Mohamed Tayeb ",
    company: "",
    description: `Studied web and mobile development fundamentals, how to start a web and moible application from scratch, designing a database and solving problems.`,
    technologies: ["Php", "Laravel","Java" , "React", "Tailwind","Flutter", "Sql", "UML", "Figma"],
  },
 
];

export const PROJECTS = [
  {
    title: "events managing website",
    image: project1,
    description:
      "a web application to manage the events and their exhibitors, with features like authentication and dashboard",
    technologies: ["Next.js","tailwind", "Laravel", "UML"],
  },
  {
    title: "Connectify",
    image: project2,
    description:
      "A social media web application with features like profile, posts, lists and user authentication",
    technologies: ["React", "tailwind", "Appwrite"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["React", "Tailwind"],
  // },
  
];

export const CONTACT = {
  address: "Algiers, Algeria ",
  email: "djazouliselsabil@gmail.com",
};
