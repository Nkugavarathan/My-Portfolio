import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { CgWebsite } from "react-icons/cg"
import { BsGithub } from "react-icons/bs"

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/*  style={{ position: "relative", minHeight: "200px" }} */}
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/*  show Tech Stack */}
        {props.tech && (
          <Card.Text style={{ fontSize: "0.9rem", color: "#888" }}>
            <strong>Tech:</strong> {props.tech}
          </Card.Text>
        )}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; Github
          </Button>
        )}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProjectCards
