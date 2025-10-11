import React from "react"
import { Col, Row } from "react-bootstrap"
import {
  SiVisualstudiocode,
  SiIntellijidea,
  SiPostman,
  SiGithub,
  SiVercel,
  SiFigma,
  SiEclipseide,
  SiDocker,
} from "react-icons/si"

function Toolstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        padding: "10px",
        marginBottom: "50px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
    </Row>
  )
}

export default Toolstack
