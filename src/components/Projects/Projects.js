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
          {/* 1. Ai career coach */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AI Career Coach"
              description="AI-powered platform generating resumes, cover letters, and mock interview questions. Features secure Clerk authentication, Prisma ORM, and automated reminders via n8n."
              tech="Next.js, React, Tailwind CSS, Shadcn UI, Prisma ORM, Clerk, Gemini AI, Inngest, n8n"
              ghLink="https://github.com/Nkugavarathan/AI-Career-Coach"
            />
          </Col>
          {/* 2) VARA Fashion – Shopping Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="VARA Fashion – Shopping Platform"
              description="Full-stack MERN platform with user login, product management, shopping cart, admin dashboard, JWT auth, and responsive UI."
              tech="MongoDB, Express.js, React.js, Node.js, Tailwind CSS"
              ghLink="https://github.com/Nkugavarathan/vara-fashion-ecommerce-mern"
              demoLink="https://www.youtube.com/watch?v=hywZ-p3JLxE&feature=youtu.be"
            />
          </Col>
          {/* 3) AI Chatbot */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AI Chatbot"
              description="MERN-based AI chatbot with text & image generation, payment gateway, and JWT authentication."
              tech="MongoDB, Express.js, React.js, Node.js, ImageKit, OpenAI API, Stripe"
              ghLink="https://github.com/Nkugavarathan/ai-chatbot"
              demoLink="https://chatwithmygpt.vercel.app/"
            />
          </Col>
          {/* 4) CineBook - Movie & Event Ticket Booking Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CineBook - Ticket Booking Platform"
              description="Full-stack booking platform with movie/event listings, seat selection, admin dashboard, and Stripe payments."
              tech="Java, Spring Boot, MySQL, React.js, Stripe"
              ghLink="https://github.com/Nkugavarathan/cinebook-movie-event-booking"
            />
          </Col>
          {/* 5) FitGenius - AI Fitness Tracker */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="FitGenius - AI Fitness Tracker"
              description="Full-stack fitness app with AI-based tips, progress tracking, JWT authentication, and automated reminders via n8n."
              tech="Java, Spring Boot, React.js, MySQL, Gemini AI API, n8n, TailwindCSS"
              ghLink="https://github.com/Nkugavarathan/fitgenius-ai-fitness-tracker"
            />
          </Col>
          {/* 4)  School Management System */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title=" School Management System"
              description="Developed a role-based web app for admins, teachers, students, and parents. Automated attendance, fee tracking, and academic records, with PDF reports and media sharing."
              tech="PHP, HTML, CSS, Bootstrap 5, JavaScript, MySQL, FPDF library"
              ghLink="https://github.com/Nkugavarathan/School-Management-System"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
