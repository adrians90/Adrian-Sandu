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
        Let's get one thing straight:{" "}
        <span className="italic">I dominated the property industry</span>, then
        decided to level up and take on
        <span className="font-bold"> software development.</span> Why? Because I
        solve real-world problems, and frankly, tech needs me. My time in
        <span className="italic"> real estate</span> gave me a unique edge - you
        know, a perspective mere mortals lack.
        <span className="font-bold">
          {" "}
          Now, I apply that to the tech world,
        </span>{" "}
        building lightning-fast, intuitive websites and apps using React,
        Next.js, and TypeScript.{" "}
        <span className="font-bold">
          I don't just ride the wave of innovation; I <em>am</em> the wave.
        </span>{" "}
        I'm constantly learning, evolving, and staying ahead of the curve,
        because anything less is for amateurs. And when I'm not busy being
        brilliant in code, I'm <span className="font-bold">gaming</span> - keeps
        my mind sharp and my reflexes sharper.
      </p>
    </motion.section>
  );
}
