import React from "react"
import GitHubCalendar from "react-github-calendar"
import { Row } from "react-bootstrap"

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Nkugavarathan"
        blockSize={15}
        blockMargin={5}
        color="#3b82f6" // soft blue accent
        fontSize={16}
      />
    </Row>
  )
}

export default Github
