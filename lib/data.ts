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
    date: "Mar 2023 - Jul 2023",
  },
  {
    title: "Algorithm Trading Intern",
    location: "Algowizz",
    description:
      "During my two-month internship, I contributed to algorithmic trading projects by writing Python scripts for various trading strategies.",
    icon: React.createElement(FaPython),
    date: "Aug 2023 - Sep 2023",
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
    keyFeatures: {},
    link: {}
  },
  {
    title: "Custom Employee Attendance Mobile App",
    description:
      "Built a custom employee attendance tracking app using React Native Expo with real-time geolocation. The app allows employees to punch in/out with precise location data, ensuring accurate timekeeping for businesses.",
    techStack: ["React Native", "Expo", "Geolocation API", "ASP.NET", "MySQL", "Redux"],
    keyFeatures: {},
    link: {}
  },
  {
    title: "Urbnseek - Local Services and Events Discovery App 📎",
    description:
      "The Urbnseek app is designed to connect users with a wide range of local services, activities, and events within their area, making it easy for anyone to explore and discover nearby experiences. Built with React Native and Expo, this app leverages the Geolocation API to offer personalized, location-based suggestions, ensuring that users can easily find what's available close to them.",
    keyFeatures: {
      "Simple Profile Creation": "Users can create a profile and view their personal information with a few simple steps.",
      "Verified Services": "All services are 100% verified. Service providers complete Aadhaar and PAN verification to ensure authenticity.",
      "Service Discovery and Categories": "Users can explore services by category and use location-based suggestions to find relevant options nearby.",
      "Service Reviews and Ratings": "Detailed reviews, ratings, and images of recently completed works are available for each service.",
      "Recommended Services": "Users receive suggestions for related services based on their preferences and browsing history."
    },
    techStack: ["React Native", "Expo", "Geolocation API", "Node.js", "Express.js", "Mongo DB", "Redux", "AWS"],
    link: {
    type : "github",
    url : "https://github.com/Vignesh2828/UrbnSeek"
  }
  },
  {
    title: "Money Tracker Mobile App",
    description:
      "Created a personal money tracker app for managing finances, used by myself and a friend. The app allows easy tracking of expenses and income, with simple yet effective functionality for budgeting and financial management.",
    techStack: ["React Native", "Expo", "Expo Secure Store", "Redux"],
    keyFeatures: {},
    link: {}
  },
  {
  title: "DPS Tuition Centre Website",
  description:
    "Developed a responsive, SEO-optimized website for DPS Tuition Centre to showcase personalized one-to-one academic tuition services. The site includes sections for features, testimonials, FAQs, contact, and WhatsApp integration to boost student engagement and conversions.",
  techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "React Icons", "React Hot Toast"],
  keyFeatures: {
   
  },
  link: {
    type : "website",
    url : "https://dpstuition.com"
  }
},

  {
    title: "Trackbot - Chennai Metro Water Seawater Desalination Plant (Web App)",
    description:
      " A real-time web tracking platform developed using Angular and Google Maps, built for the Chennai Metro Water Seawater Desalination Plant project. The system monitors shipping containers, underwater pipelines, and vessels using WebSocket-based live updates, providing a seamless, interactive tracking experience.",
    techStack: ["Angular", "Google Maps API", "WebSocket", "Angular Material"],
    keyFeatures: {
      "one": "Integrated live GPS tracking using WebSocket to display tracker movements with dynamic status indicators",
      "two": "Implemented KML file upload feature to visualize underwater pipe layouts on the map. Users can customize polyline and marker styles.",
      "three" : "Enabled full edit capability of KML paths and markers, with real-time map updates and persistent changes across sessions.",
      "four" : "Designed playback feature to replay tracker history over 24-hour periods with play, pause, fast-forward, and reverse controls.",
      "five" : "Allowed users to mark custom points on the map with draggable markers and maintain their state across sessions.",
      "sixth" :"Designed an interactive dashboard with detailed reports, data visualizations, and management tools for users, trackers, and configurations."
    },
    link: {}
  },
  {
    title: "BillSmith - Invoice & GST Manager",
    description:
      "BillSmith is an invoice management application that helps users create and manage invoices effortlessly. Users can email invoices to clients, share public read-only links, download invoices as PDF, and view a dashboard summary for quick financial insights. The app also generates GSTR-1 reports from invoice data to simplify GST filing. Authentication and role-based authorization secure the application.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    keyFeatures: {
      "Create & Manage Invoices": "Design, save and edit invoices with line items, taxes and discounts.",
      "Share & Email": "Send invoices directly to clients via authenticated email or share a public, read-only link.",
      "PDF Export": "Download invoices as production-ready PDFs.",
      "Dashboard Summary": "Quick overview of receivables, outstanding invoices and cashflow metrics.",
      "GSTR-1 Report": "Generate GSTR-1 reports from invoice data to simplify GST filing.",
      "Authentication & Authorization": "User accounts with secure auth and role-based access controls."
    },
    link: {
      type : "website",
      url : "https://billsmith.vercel.app"
    }
  }
];

export const skillsData1 = [
  { name: "HTML", logo: "/skillLogo/html.png" },
  { name: "CSS", logo: "/skillLogo/css.png" },
  { name: "JavaScript", logo: "/skillLogo/js.png" },
  { name: "Typescript", logo: "/skillLogo/ts.png" },
  { name: "Reactjs", logo: "/skillLogo/react.png" },
  { name: "Nextjs", logo: "/skillLogo/nextjs.png" },
  { name: "AngularJS", logo: "/skillLogo/angularjs.png" },
  { name: "Expo", logo: "/skillLogo/expo.png" },
  { name: "Node.js", logo: "/skillLogo/node.png" },
  { name: "Express.js", logo: "/skillLogo/express.png" },
  { name: "Python", logo: "/skillLogo/python.png" },
  { name: "C#", logo: "/skillLogo/c-sharp.png" },
  { name: "Asp .NET", logo: "/skillLogo/asp.png" },
  
] as const;
export const skillsData2 = [
  { name: "MySQL", logo: "/skillLogo/mysql.png" },
  { name: "Mongo DB", logo: "/skillLogo/mongo.png" },
  { name: "SQL", logo: "/skillLogo/sql.png" },
  { name: "Tailwind", logo: "/skillLogo/tailwind.png" },
  { name: "MUI", logo: "/skillLogo/mui.png" },
  { name: "Redux", logo: "/skillLogo/redux.png" },
  { name: "Git", logo: "/skillLogo/git.png" },
  { name: "AWS", logo: "/skillLogo/aws.png" },
] as const;

