import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Particle from "../Particle"
import Github from "./Github"
import Techstack from "./Techstack"
import Aboutcard from "./AboutCard"
import about from "../../Assets/about.png"
import Toolstack from "./Toolstack"
import { motion } from "framer-motion"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="irishblue">I'M</strong>
              </h1>
              <Aboutcard />
            </motion.div>
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img src={about} alt="about" className="img-fluid" />
            </motion.div>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="irishblue">Skillset </strong>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ marginBottom: "50px" }}
        >
          <Techstack />
        </motion.div>

        <h1 className="project-heading">
          <strong className="irishblue">Tools</strong> I use
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ marginBottom: "50px" }}
        >
          <Toolstack />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ marginBottom: "50px" }}
        >
          <Github />
        </motion.div>
      </Container>
    </Container>
  )
}

export default About
