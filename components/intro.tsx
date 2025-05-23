"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const phrases = [
  "web developer.",
  "mobile app developer.",
  "full-stack developer."
];

const typingDelay = 150; // Time to type each character
const erasingDelay = 50; // Time to erase each character
const pauseBetweenPhrases = 1500; // Time to pause before starting the next phrase

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // State to manage popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (isTyping) {
        setDisplayText((prev) => {
          const currentPhrase = phrases[phraseIndex];
          const nextChar = currentPhrase.charAt(prev.length);
          if (nextChar) {
            return prev + nextChar; // Add next character
          } else {
            setIsTyping(false); // Switch to erasing after finishing typing
            return prev;
          }
        });
        timeout = setTimeout(type, typingDelay);
      } else {
        setDisplayText((prev) => {
          if (prev.length > 0) {
            return prev.slice(0, -1); // Remove last character
          } else {
            setIsTyping(true); // Switch to typing after finishing erasing
            setPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase
            return "";
          }
        });
        timeout = setTimeout(type, erasingDelay);
      }
    };

    type(); // Start typing/erasing

    return () => clearTimeout(timeout); // Clean up on unmount
  }, [isTyping, phraseIndex]);

  return (
    <section ref={ref} id="home" className="w-full max-w-2xl mx-auto py-8">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {/* Clickable div to open popup */}
            <div onClick={togglePopup} className="cursor-pointer">
              <Image
                src="/MyProfile.png"
                alt="Vigneshwaran portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
              <motion.span
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
              >
                👋
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup component */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-[90%] max-h-[90%] overflow-hidden relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
              onClick={togglePopup}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">Watch my intro</h2>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1lo5PjeWQ5M?si=7FMCU_DcavNW1Cjl"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="aspect-video"
              style={{
                border: "none",
                minHeight: "400px",
                minWidth: "600px",
              }}
            ></iframe>
          </div>
        </div>
      )}

<motion.h1
  className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
>
  <span className="font-bold">Hello, I'm Vigneshwaran.</span>
  <br />
  <span>I'm a {displayText}</span>
</motion.h1>


      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.6,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-transform duration-300 ease-in-out"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-transform duration-300 ease-in-out cursor-pointer borderBlack dark:bg-white/10"
          href="/Vigneshwaran_CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-transform duration-300 ease-in-out" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-transform duration-300 ease-in-out cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/vigneshwaran-manivannan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-transform duration-300 ease-in-out cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Vignesh2828"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
