import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Particle from "../Particle"
import Github from "./Github"
import Techstack from "./Techstack"
import Aboutcard from "./AboutCard"
import about from "../../Assets/about.png"
import Toolstack from "./Toolstack"

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
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Techstack />
        </motion.div>

        <h1 className="project-heading">
          <strong className="irishblue">Tools</strong> I use
        </h1>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Toolstack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Github />
        </motion.div>
      </Container>
    </Container>
  )
}

export default About
