"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData1, skillsData2 } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const sliderAnimation1 = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const sliderAnimation2 = {
  animate: {
    x: ["-100%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full max-w-5xl mx-auto py-8 mt-10"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="overflow-hidden w-full mb-10">
        <motion.div
          className="flex gap-6"
          variants={sliderAnimation1}
          animate="animate"
        >
          {[...skillsData1, ...skillsData1].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center"
              style={{ minWidth: "150px" }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="h-8 w-8 mr-2"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-6"
          variants={sliderAnimation2}
          animate="animate"
        >
          {[...skillsData2, ...skillsData2].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center"
              style={{ minWidth: "150px" }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="h-8 w-8 mr-2"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
