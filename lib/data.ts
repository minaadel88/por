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
  },
] as const;

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
    title: "Accountant at Egyptian Ministry of Interior",
    location: "cairo, EG",
    description:
      "I am currently working as an accountant, where my role involves reviewing maintenance contracts and preparing financial reports for the payment of invoices related to those contracts. I also analyze data for the contracted companies to support timely decision-making.",
    icon: React.createElement(FaReact),
    date: "2015 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Religious application",
    description:
"This is my first application, where I tried to implement what I learned, such as routing, navigation between pages, adding text features, formatting text, and including a video for each text section.",
    tags: ["React", "Next.js",  "Tailwind"],
    imageUrl: "/1.jpeg",
    link:"https://first-project-psi-silk.vercel.app/",
  },
  {
    title: "Kero Player",
    description:
      "A modern audio streaming app built with Vite.js, Firebase, and the YouTube API.",
    tags: ["Vite.js", "Firebase", "YouTube API", "TypeScript"],
    imageUrl: "/2.jpg", 
    link: "https://kero-player.vercel.app",
  },
  
] as const;

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
  "Framer Motion",
] as const;
