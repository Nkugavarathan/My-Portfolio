import React from "react"
import Card from "react-bootstrap/Card"
import { ImPointRight } from "react-icons/im"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm{" "}
            <span className="irishblue">Kugavarathan Navaraththinarasa </span>
            from <span className="irishblue">Colombo, Sri Lanka.</span>
            <br />
            I’m currently pursuing a{" "}
            <b className="irishblue">
              B.Sc. (Hons) in Computing and Information Systems{" "}
            </b>
            at{" "}
            <b className="irishblue"> Sabaragamuwa University of Sri Lanka</b>{" "}
            (3rd year).
            <br />
            <br />
            <b>Education</b>
            <br />
            • B.Sc. (Hons) in Computing and Information Systems — Sabaragamuwa
            University of Sri Lanka (2023 – Present)
            <br />
            • Physical Science Stream (G.C.E. Advanced Level) — J/Hartley
            College (Completed 2021)
            <br />
            <br />
            Apart from coding, I love engaging in activities that help me grow
            personally and creatively:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Tutorials & Exploring New Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Learning New Cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and never stop exploring!"
          </p>
          <footer className="blockquote-footer">Kugavarathan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
