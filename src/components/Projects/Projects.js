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
          {/* 1) E-Commerce Web Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="E-Commerce Web Application"
              description="Developed a full-stack MERN e-commerce app with user login, product management, shopping cart, and admin dashboard. Integrated JWT authentication, Stripe payment gateway, and responsive UI."
              tech="MongoDB, Express.js, React.js, Node.js, Tailwind CSS"
              ghLink="https://github.com/Nkugavarathan/E-Commerce-website.git"
            />
          </Col>

          {/* 2) Full Stack AI Chatbot */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Full Stack AI Chatbot"
              description="Built a MERN-based AI chatbot that generates text via Google Gemini and images via ImageKit. Added payment gateway for credit purchases, JWT authentication, and deployed as a SaaS product."
              tech="MongoDB, Express.js, React.js, Node.js, ImageKit, OpenAI API"
              ghLink="https://github.com/Nkugavarathan/ai-chatbot-mern.git"
            />
          </Col>

          {/* 3) Full Stack E-Commerce Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Full Stack E-Commerce Website"
              description="Created a Next.js-based e-commerce platform with server-side rendering, integrated Clerk for authentication, and Inngest for background automation."
              tech="Next.js, React.js, MongoDB, Tailwind CSS, Clerk, Inngest"
              ghLink="https://github.com/Nkugavarathan/nextjs-ecommerce.git"
            />
          </Col>

          {/* 4) Smart School Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Smart School Management System"
              description="Developed a role-based web app for admins, teachers, students, and parents. Automated attendance, fee tracking, and academic records, with PDF reports and media sharing."
              tech="PHP, HTML, CSS, Bootstrap 5, JavaScript, MySQL, FPDF library"
              ghLink="https://github.com/YOUR_USERNAME/smart-school-management"
            />
          </Col>

          {/* 5) Movie Review Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Movie Review Application"
              description="Designed a full-stack web app where users can browse and review movies in real time. Built with clear separation of frontend and backend logic using modern frameworks."
              tech="Java, Spring Boot, MongoDB, React"
              ghLink="https://github.com/YOUR_USERNAME/movie-review-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
