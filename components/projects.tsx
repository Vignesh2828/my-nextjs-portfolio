"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { projectsData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { theme } = useTheme();

  const controls = useAnimation();
  const [sectionRef, inView] = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const sectionVariants = {
    hidden: { y: 100 },
    visible: { y: 0, transition: { delay: 0.175, duration: 0.6 } },
  };

  const projectVariants = {
    hidden: { y: 50 },
    visible: { y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="scroll-mt-28 mb-28 px-6"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

      <div className="space-y-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
              theme === 'dark' 
                ? (index % 2 === 0 ? 'bg-gray-800 text-gray-200' : 'bg-gray-700 text-gray-300') 
                : (index % 2 === 0 ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-900')
            }`}
            initial="hidden"
            animate={controls}
            variants={projectVariants}
          >
            <h3 className={`text-2xl font-semibold mb-4`}>
              {project.title}
            </h3>
            <p className="mb-4">{project.description}</p>

            <div className="flex flex-wrap items-center mb-4">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
