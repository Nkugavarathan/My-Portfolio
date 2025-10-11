import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"
// import sampleImg from "../../Assets/Projects/blog.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="irishblue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've developed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/*  E-Commerce Web Application   imgPath={sampleImg}*/}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="E-Commerce Web Application"
              description="Full-stack MERN e-commerce app with user login, product management, shopping cart, and admin dashboard. Includes MVC architecture, JWT authentication, and Stripe payment integration."
              ghLink="https://github.com/Nkugavarathan/E-Commerce-website.git"
            />
          </Col>

          {/* AI Chatbot */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Full Stack AI Chatbot"
              description="MERN-based AI chatbot app using Google Gemini and ImageKit. Added payment gateway for credit purchases, JWT auth, and deployed full SaaS system."
              ghLink="https://github.com/Nkugavarathan/ai-chatbot-mern.git"
            />
          </Col>

          {/* Next.js E-Commerce Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Full Stack E-Commerce Website"
              description="Next.js-based e-commerce site with MongoDB and Tailwind CSS. Integrated Clerk for authentication and Inngest for background automation."
              ghLink="https://github.com/Nkugavarathan/nextjs-ecommerce.git"
            />
          </Col>
          {/* Food Delivery App */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Full Stack Food Delivery App"
              description="Developed a React + Spring Boot food delivery app using MongoDB. Integrated Razorpay for secure online payments and deployed with AWS. Built efficient APIs and responsive UI."
              ghLink="https://github.com/Nkugavarathan/Food-delivery-app-react-springboot.git"
            />
          </Col>

          {/* Library Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Library Management System"
              description="Java CLI-based system for managing books, borrowing, and returns. Applied OOP principles for modular and maintainable code."
              ghLink="https://github.com/Nkugavarathan/Library-Management-System-Using-Java.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
