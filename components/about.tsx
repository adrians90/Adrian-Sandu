"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With a solid background in{" "}
        <span className="italic">the property industry</span>, I transitioned to
        <span className="font-bold"> software development</span> to bring
        innovative solutions to real-world challenges. My experience in{" "}
        <span className="italic">real estate</span> has provided me with a
        unique perspective and a
        <span className="font-bold"> problem-solving</span> mindset, which I now
        apply to my work in tech. As a{" "}
        <span className="font-bold">Frontend Developer</span>, I specialise in
        building performant and intuitive websites and applications using{" "}
        <span className="font-bold">React</span>,{" "}
        <span className="font-bold">Next.js</span>,{" "}
        <span className="font-bold">Node.js</span>, and{" "}
        <span className="font-bold">TypeScript</span>. Driven by a continuous
        desire to learn and grow, I stay updated with the latest technologies
        and trends in the industry. Outside of coding, I enjoy{" "}
        <span className="font-bold">gaming</span>, which keeps me balanced and
        inspired.
      </p>
    </motion.section>
  );
}
