import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
  "Software Developer",
  "Freelancer",
  "MERN Stack Developer",
  "Frontend Developer",
  "Open Source Contributor",
  "React Developer",
  "Tech Enthusiast"
],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
