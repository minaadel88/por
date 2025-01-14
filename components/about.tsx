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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-4">
        After earning my degree in <span className="font-medium">Accounting</span>, I decided to follow my
        passion for technology and transitioned into the world of programming. To kickstart my journey, I
        enrolled in an intensive coding bootcamp where I mastered the fundamentals of{" "}
        <span className="font-medium">Front-End Development</span>. Since then, I have been honing my
        skills and building impactful projects, driven by a love for solving complex problems and crafting
        elegant solutions.
      </p>

      <p className="mb-4">
        My technical expertise lies in modern JavaScript frameworks and tools, with a strong focus on{" "}
        <span className="font-medium">React, Next.js, Vite.js, and TypeScript</span>. I am particularly
        drawn to the dynamic and interactive aspects of front-end development, as well as the meticulous
        attention to detail that responsive and user-friendly interfaces demand. I am also exploring{" "}
        <span className="font-medium">back-end technologies</span> like <span className="font-medium">Node.js</span>{" "}
        to broaden my skill set and become a more versatile developer.
      </p>

      <p className="mb-4">
        What excites me most about programming is the problem-solving aspect. There’s nothing quite like
        the satisfaction of tackling a challenging bug or implementing a complex feature after hours of
        debugging and brainstorming. It’s this constant challenge and opportunity for growth that fuels my
        passion for development.
      </p>

      <p className="mb-4">
        In addition to my technical skills, I value <span className="font-medium">continuous learning</span> 
        and am always eager to dive into new technologies, frameworks, and methodologies to stay at the
        forefront of the field.
      </p>

      <p className="mb-4">
        I am currently seeking a <span className="font-medium">full-time</span> or{" "}
        <span className="font-medium">part-time</span> position as a <span className="font-medium">Software Developer</span> 
        where I can contribute to impactful projects, collaborate with talented teams, and continue growing
        as a professional.
      </p>

      <p>
        When I’m not coding, I enjoy unwinding with video games, watching movies, or hitting the field for
        a game of football. I’m also an avid learner and love exploring new topics, from technology to
        personal development.
      </p>
    </motion.section>
  );
}
