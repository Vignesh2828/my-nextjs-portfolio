import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated BCA",
    location: "H.H. The Rajah's College, Pudukkottai",
    description:
      "I graduated with a Bachelor of Computer Applications (BCA) in 2021 from H.H. The Rajah's College, Pudukkottai.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Graduated MCA",
    location: "Anna University, Trichy",
    description:
      "I completed my Master of Computer Applications (MCA) in 2023 from Anna University, Trichy, enhancing my knowledge in software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer Intern",
    location: "Netcraft Solutions Pvt Ltd",
    description:
      "I worked as a Front-End Developer intern for four months, gaining experience in modern web development technologies and building user interfaces.",
    icon: React.createElement(FaReact),
    date: "May 2023 - Aug 2023",
  },
  {
    title: "Algorithm Trading Intern",
    location: "Algowizz",
    description:
      "During my two-month internship, I contributed to algorithmic trading projects by writing Python scripts for various trading strategies.",
    icon: React.createElement(FaPython),
    date: "Sep 2023 - Oct 2023",
  },
  {
    title: "Full-Stack Web and Mobile App Developer",
    location: "Ticktix Solutions Pvt Ltd, Chennai",
    description:
      "I'm currently working full-time as a Full-Stack Web and Mobile App Developer at Ticktix Solutions Pvt Ltd, contributing to both front-end and back-end development since February 2024.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - present",
  },
] as const;


export const projectsData = [
  {
    title: "ERP Web Application",
    description:
      "Developed a comprehensive ERP web application at Ticktix Solutions using Next.js for the front-end and ASP.NET for the back-end API. The application helps manage business operations like accounting, procurement, and HR functions.",
    techStack: ["Next.js", "ASP.NET", "Tailwind CSS", "MySQL", "Redux"],
    link: "",
  },
  {
    title: "Custom Employee Attendance Mobile App",
    description:
      "Built a custom employee attendance tracking app using React Native Expo with real-time geolocation. The app allows employees to punch in/out with precise location data, ensuring accurate timekeeping for businesses.",
    techStack: ["React Native", "Expo", "Geolocation API", "ASP.NET", "MySQL", "Redux"],
    link: "",
  },
  {
    title: "Money Tracker Mobile App",
    description:
      "Created a personal money tracker app for managing finances, used by myself and a friend. The app allows easy tracking of expenses and income, with simple yet effective functionality for budgeting and financial management.",
    techStack: ["React Native", "Expo", "Expo Secure Store", "Redux"],
    link: "",
  },
] as const;

export const skillsData1 = [
  { name: "HTML", logo: "/skillLogo/html.png" },
  { name: "CSS", logo: "/skillLogo/css.png" },
  { name: "JavaScript", logo: "/skillLogo/js.png" },
  { name: "Typescript", logo: "/skillLogo/ts.png" },
  { name: "Reactjs", logo: "/skillLogo/react.png" },
  { name: "Nextjs", logo: "/skillLogo/nextjs.png" },
  { name: "Python", logo: "/skillLogo/python.png" },
  { name: "C#", logo: "/skillLogo/c-sharp.png" },
  { name: "Asp .NET", logo: "/skillLogo/asp.png" },
  
] as const;
export const skillsData2 = [
  { name: "MySQL", logo: "/skillLogo/mysql.png" },
  { name: "SQL", logo: "/skillLogo/sql.png" },
  { name: "Tailwind", logo: "/skillLogo/tailwind.png" },
  { name: "MUI", logo: "/skillLogo/mui.png" },
  { name: "Redux", logo: "/skillLogo/redux.png" },
  { name: "Git", logo: "/skillLogo/git.png" },
] as const;

