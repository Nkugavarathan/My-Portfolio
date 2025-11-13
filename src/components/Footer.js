import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { AiFillGithub } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Kugavarathan Navaraththtinarasa</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} KN</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Nkugavarathan"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kugavarathan-navaraththinarasa-7ab094267/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="mailto:kugavarathan28@gmail.com"
                style={{ color: "white" }}
              >
                <MdEmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/94775019192"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
