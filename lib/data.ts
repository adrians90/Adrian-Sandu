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
    link: "https://pawsome-pro.vercel.app/",
  },
  {
    title: "Evento",
    description:
      "Created a responsive platform for finding local events. Built using TypeScript, Next.js, Prisma, and Tailwind.",
    tags: ["TypeScript", "Next.js", "JavaScript", "Tailwind", "Prisma"],
    imageUrl: eventoImg,
    link: "https://evento-as90.vercel.app/",
  },
  {
    title: "Cabin Management Portal",
    description:
      "Developed a full-stack cabin management application with user authentication, data visualisation and dark mode features.",
    tags: ["React", "Styled Components", "React query", "Supabase"],
    imageUrl: wildImg,
    link: "https://the-wild-oasis-as90.netlify.app/",
  },
  {
    title: "Remote Job Board",
    description:
      "A public web app for developers to search, sort and bookmark job listings.",
    tags: ["TypeScript", "JavaScript", "React", "Context API", "CSS"],
    imageUrl: rmtdevImg,
    link: "https://rmt-dev-as90.vercel.app/",
  },
  {
    title: "Feedback Application",
    description:
      "Corpo Pulse offers users a seamless platform for submitting company feedback. Developed using TypeScript and React, it features a dynamic and intuitive UI.",
    tags: ["TypeScript", "JavaScript", "React", "Context API", "CSS"],
    imageUrl: corpcommentImg,
    link: "https://corpo-pulse.vercel.app/",
  },
  {
    title: "React Pizza",
    description:
      "Developed with React, Redux, and React Router, the application provides an intuitive way to browse menus, place orders, and track delivery effortlessly.",
    tags: ["TypeScript", "JavaScript", "React", "Context API", "CSS"],
    imageUrl: pizzaImg,
    link: "https://fast-react-pizza-as90.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Prisma",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Git",
  "Tailwind CSS",
  "Redux",
  "Framer Motion",
] as const;
