"use client";

import React from "react";
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
        {" "}
        <span className="font-bold">Hello, I'm Vigneshwaran.</span> I completed
        my undergraduate studies in <span className="font-medium">BCA</span> and
        went on to earn my <span className="font-medium">MCA</span>. Following
        my academic journey, I immersed myself in an internship focusing on{" "}
        <span className="italic">React and Python</span>, where I spent six
        months honing my skills in developing a marketplace and algorithmic
        trading systems. My core stack includes{" "}
        <span className="font-medium">Next.js, React, React Native, ASP.NET,</span> and{" "}
        <span className="font-medium">MySQL</span>. I have a keen interest in{" "}
        <span className="underline">space-oriented news</span> and technology,
        always eager to explore new advancements in these fields.{" "}
      </p>{" "}
      <p>
        {" "}
        <span className="italic">When I'm not coding</span>, you can find me
        diving into the latest tech trends, staying updated on astronomical
        discoveries, or indulging my curiosity about the universe. I’m
        passionate about continuous learning, always seeking to expand my
        knowledge and skills.{" "}
      </p>
    </motion.section>
  );
}
