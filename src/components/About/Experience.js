import React from "react"
import { Row, Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { MdWorkOutline } from "react-icons/md"

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Airentosoft (Pvt) Ltd",
    period: "Dec 2025 - May 2026 (6 months)",
  },
]

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {experiences.map((exp) => (
        <Col md={8} key={exp.role + exp.company}>
          <Card className="project-card-view" style={{ textAlign: "left" }}>
            <Card.Body>
              <Card.Title>
                <MdWorkOutline style={{ marginBottom: "4px" }} /> &nbsp;
                {exp.role}
              </Card.Title>
              <Card.Text>
                <span className="irishblue">{exp.company}</span>
                <br />
                <span style={{ color: "#888" }}>{exp.period}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Experience
