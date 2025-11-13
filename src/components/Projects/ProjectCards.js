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

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
        {/* Buttons container */}
        {/* <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)", // center horizontally
            display: "flex",
            gap: "10px",
          }}
        >
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div> */}
      </Card.Body>
    </Card>
  )
}

export default ProjectCards
