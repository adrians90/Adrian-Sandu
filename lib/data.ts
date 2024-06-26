import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import pizzaImg from "@/public/Pizza.png";
import pawsomeImg from "@/public/Pawsome.png";
import eventoImg from "@/public/Evento.png";
import wildImg from "@/public/Wild.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Pawsome Pro",
    description:
      "Pawsome Pro is a modern, full-stack web application for managing pet care, built with Next.js and Prisma for the backend.",
    tags: ["Next.js", "Prisma", "Tailwind", "TypeScript", "Next Auth"],
    imageUrl: pawsomeImg,
  },
  {
    title: "Evento",
    description:
      "Created a responsive platform for finding local events. Built using TypeScript, Next.js, Prisma, and Tailwind.",
    tags: ["TypeScript", "Next.js", "JavaScript", "Tailwind", "Prisma"],
    imageUrl: eventoImg,
  },
  {
    title: "Cabin Management Portal",
    description:
      "Developed a full-stack cabin management application with user authentication, data visualisation and dark mode features.",
    tags: ["React", "Styled Components", "React query", "Supabase"],
    imageUrl: wildImg,
  },
  {
    title: "Remote Job Board",
    description:
      "A public web app for developers to search, sort and bookmark job listings.",
    tags: ["TypeScript", "JavaScript", "React", "Context API", "CSS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Feedback Application",
    description:
      "Corpo Pulse offers users a seamless platform for submitting company feedback. Developed using TypeScript and React, it features a dynamic and intuitive UI.",
    tags: ["TypeScript", "JavaScript", "React", "Context API", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "React Pizza",
    description:
      "Developed with React, Redux, and React Router, the application provides an intuitive way to browse menus, place orders, and track delivery effortlessly.",
    tags: ["TypeScript", "JavaScript", "React", "Context API", "CSS"],
    imageUrl: pizzaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
