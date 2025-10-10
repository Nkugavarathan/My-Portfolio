import React from "react"
import Typewriter from "typewriter-effect"

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
          "Spring Boot Developer",
          "Full Stack Engineer",
          "Tech Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
