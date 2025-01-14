import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
  }
];

export const experiencesData = [
  {
    title: "Graduate from Ain Shams University",
    location: "cairo, EG",
    description:"Faculty of Commerce",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Accountant At Armanious group",
    location: "cairo, EG",
    description:
      "I worked in accounts receivable and general accounting related to budget preparation for the company, which was responsible for distributing all Eva Pharma products as well as beauty products.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2015",
  },
  {
    title: "Frontend Developer at Egyptian Ministry of Interior",
    location: "cairo, EG",
    description:
      " Developed internal web applications using React and Next.js, improving user experience and system efficiency. Collaborated with cross-functional teams to design user-friendly, secure interfaces. Optimized applications for speed and scalability using server-side rendering and state management. Integrated APIs for real-time data updates and reporting.",
    icon: React.createElement(FaReact),
    date: "2015 - present",
  }
];

export const projectsData = [
  {
    title: "Religious application",
    description:
      "This is my first application, where I tried to implement what I learned, such as routing, navigation between pages, adding text features, formatting text, and including a video for each text section.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: "/1.jpeg",
    link: "https://first-project-psi-silk.vercel.app/",
  },
  {
    title: "Kero Player",
    description:
      "A modern audio streaming app built with Vite.js, Firebase, and the YouTube API.",
    tags: ["Vite.js", "Firebase", "YouTube API", "TypeScript"],
    imageUrl: "/2.jpg",
    link: "https://audio-player-nu-seven.vercel.app/",
    imageClasses: "rounded-lg w-full h-auto object-cover",
  },
  {
    title: "E-Commerce App",
    description:
      "This is a React-based e-commerce application that integrates with the Fake Store API to display products, handle shopping cart functionality, and manage user interactions. The app features a clean and modern design, with a 5% discount popup and dynamic cart updates.",
    tags: ["React", "Vite.js", "Fake Store API", "Tailwind", "JavaScript"],
    imageUrl: "/3.jpg",
    link: "https://e-commerce-app-chi-ten.vercel.app/",
    imageClasses: "rounded-lg w-full h-auto object-cover",
  },
];


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion"
];
