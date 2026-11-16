import React from "react"
import { Row, Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { MdWorkOutline } from "react-icons/md"

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Airentosoft (Pvt) Ltd",
    period: "Dec 2025 - May 2026 (6 months)",
    points: [
      "Developed and customised WordPress and Next.js, React and Tailwind CSS websites for car rental clients, including reusable components, API integration, SEO and deployment.",
      "Built a booking engine and integrated its frontend with ASP.NET Core APIs.",
      "Contributed to a Next.js and Supabase platform, a RAG-based AI chatbot using the Gemini API, and an AI-powered blog CMS (Next.js, Express.js, Firebase).",
      "Assisted with PHP CRM API integration, and tested and debugged applications.",
    ],
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
              {exp.points && (
                <ul style={{ textAlign: "justify", paddingLeft: "20px" }}>
                  {exp.points.map((point) => (
                    <li key={point} style={{ marginBottom: "6px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Experience
