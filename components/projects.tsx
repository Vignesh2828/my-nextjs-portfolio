"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { theme } = useTheme();
  const controls = useAnimation();
  const [sectionRef, inView] = useInView({ threshold: 0.3 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="scroll-mt-24 px-4 max-w-7xl mx-auto"
      initial="hidden"
      animate={controls}
    >
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            className={`flex flex-col justify-between h-full p-6 rounded-xl border shadow-sm hover:shadow-md transition-all ${
              theme === "dark"
                ? "bg-[#1f1f1f] border-[#333] text-white"
                : "bg-white border-gray-200 text-gray-900"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {
                project.link.url && (
                  <a
                href={project.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-lg"
              >
                {project.link.type === "github" ? (
                  <FaGithub />
                ) : (
                  <FaExternalLinkAlt />
                )}
              </a>
                )
              }
            </div>

            <p className="text-sm mb-4 text-gray-600 dark:text-gray-300 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
