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
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mb-28 max-w-[55rem] mx-auto text-center leading-8 sm:mb-40 scroll-mt-28 px-6"
    >
      <SectionHeading>About Me</SectionHeading>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 space-y-5 text-neutral-700 text-[1.05rem]"
      >
        <p>
          <span className="font-bold">Hello, I'm Vigneshwaran.</span> I’m a developer who loves crafting clean, thoughtful, and user-focused digital experiences. I care deeply about how products feel and perform, and how people interact with them.
        </p>

        <p>
          I’m passionate about creating seamless experiences and constantly refining my craft to stay aligned with modern development practices. I enjoy turning concepts into reality and focusing on the subtle details that elevate the overall experience.
        </p>

        <p>
          Outside of work, I’m endlessly curious—exploring new ideas, reading about space and scientific discoveries, and learning about anything that sparks inspiration. Continuous growth drives me, both in technology and in understanding the world around me.
        </p>
      </motion.div>
    </motion.section>
  );
}
