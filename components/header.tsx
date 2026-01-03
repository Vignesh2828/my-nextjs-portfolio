"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from "next/navigation";
import {
  ArrowDownLeftSquare,
  ArrowDownRightSquare,
  ArrowUpRight,
  ArrowUpRightSquare,
  InfoIcon,
} from "lucide-react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const pathname = usePathname();
  const isBlogActive = pathname.startsWith("/blog");
  const isHomePage = pathname === "/";

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg backdrop-blur-[0.5rem]
                   sm:top-6 sm:h-[3.25rem] sm:w-[48rem] sm:rounded-full
                   dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
          {/* Section links */}
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative h-3/4 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "px-3 py-3 transition hover:text-gray-950 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      isHomePage && activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {isHomePage && activeSection === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 -z-10 rounded-full bg-slate-200 dark:bg-gray-800"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}

          {/* Blog route link */}
          <motion.li
            className="relative h-3/4 flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="/blog"
              className={clsx(
                "px-3 py-3 transition hover:text-gray-950 dark:hover:text-gray-300",
                {
                  "text-gray-950 dark:text-gray-200": isBlogActive,
                }
              )}
            >
                Blog
              {isBlogActive && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 -z-10 rounded-full bg-slate-200 dark:bg-gray-800"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
