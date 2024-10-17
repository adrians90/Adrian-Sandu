import pawsomeImg from "@/public/Pawsome.png";
import CyberImg from "@/public/CyberChow.png";

import jetbyteImg from "@/public/JetByte.png";

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
    title: "JetByte",
    description:
      "JetByte is an Open-AI powered travel companion web application built with Next.js and Neon/Postgresql for the database.",
    tags: ["Next.js", "Tailwind", "Prisma", "Neon", "Clerk", "React Query"],
    imageUrl: jetbyteImg,
    link: "https://jetbyte.vercel.app/",
  },
  {
    title: "Cyber Chow",
    description:
      "Cyber Chow is a futuristic food delivery web application. Built with TypeScript, React, Node.js, and MongoDB, the app offers a sleek and immersive user interface.",
    tags: ["React", "TypeScript", "Zod", "React Query", "MongoDB"],
    imageUrl: CyberImg,
    link: "https://cyber-chow-frontend.onrender.com/",
  },

  {
    title: "Pawsome Pro",
    description:
      "Pawsome Pro is a modern, full-stack web application for managing pet care, built with Next.js and Prisma for the backend.",
    tags: ["Next.js", "Prisma", "Tailwind", "TypeScript", "Next Auth"],
    imageUrl: pawsomeImg,
    link: "https://pawsome-pro.vercel.app/",
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
] as const;
