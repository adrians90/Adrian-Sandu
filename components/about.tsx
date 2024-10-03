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
        After a successful career in{" "}
        <span className="font-bold">the property industry</span>, I made the
        leap to
        <span className="font-bold"> software development </span>to solve
        real-world problems through technology. My background in
        <span className="italic"> real estate</span> has given me a unique
        perspective, allowing me to approach challenges with a strategic mindset
        that stands out in the tech world.
        <span>
          {" "}
          Now, I specialise in building{" "}
          <span className="italic">
            high-performance, intuitive websites and applications
          </span>{" "}
          using
        </span>{" "}
        <span className="font-bold">React, Next.js, and TypeScript.</span>{" "}
        <span>
          I'm always <span className="font-bold">learning and evolving</span> to
          stay ahead of the curve.
        </span>{" "}
        Outside of development, you'll find me
        <span className="font-bold"> gaming.</span>
      </p>
    </motion.section>
  );
}
