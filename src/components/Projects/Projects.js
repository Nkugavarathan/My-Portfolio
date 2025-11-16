import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"
import Button from "react-bootstrap/Button"

// import sampleImg from "../../Assets/Projects/blog.png"

function Projects() {
  const [visibleCount, setVisibleCount] = useState(5)
  const projects = [
    {
      title: "AI Career Coach",
      description:
        "AI-powered platform generating resumes, cover letters, and mock interview questions. Features secure Clerk authentication, Prisma ORM, and automated reminders via n8n.",
      tech: "Next.js, React, Tailwind CSS, Shadcn UI, Prisma ORM, Clerk, Gemini AI, Inngest, n8n",
      ghLink: "https://github.com/Nkugavarathan/AI-Career-Coach",
    },
    {
      title: "VARA Fashion – Shopping Platform",
      description:
        "Full-stack MERN platform with user login, product management, shopping cart, admin dashboard, JWT auth, and responsive UI.",
      tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
      ghLink: "https://github.com/Nkugavarathan/vara-fashion-ecommerce-mern",
      demoLink: "https://www.youtube.com/watch?v=hywZ-p3JLxE&feature=youtu.be",
    },
    {
      title: "AI Chatbot",
      description:
        "MERN-based AI chatbot with text & image generation, payment gateway, and JWT authentication.",
      tech: "MongoDB, Express.js, React.js, Node.js, ImageKit, OpenAI API, Stripe",
      ghLink: "https://github.com/Nkugavarathan/ai-chatbot",
      demoLink: "https://chatwithmygpt.vercel.app/",
    },
    {
      title: "CineBook - Ticket Booking Platform",
      description:
        "Full-stack booking platform with movie/event listings, seat selection, admin dashboard, and Stripe payments.",
      tech: "Java, Spring Boot, MySQL, React.js, Stripe",
      ghLink: "https://github.com/Nkugavarathan/cinebook-movie-event-booking",
    },
    {
      title: "FitGenius - AI Fitness Tracker",
      description:
        "Full-stack fitness app with AI-based tips, progress tracking, JWT authentication, and automated reminders via n8n.",
      tech: "Java, Spring Boot, React.js, MySQL, Gemini AI API, n8n, TailwindCSS",
      ghLink: "https://github.com/Nkugavarathan/fitgenius-ai-fitness-tracker",
    },
    {
      title: "Nellai Styles – Fashion E-Commerce Website",
      description:
        "Responsive fashion e-commerce site built with WordPress and WooCommerce, featuring custom branding, product layouts, and mobile-first design with Elementor-powered UI.",
      tech: "WordPress, WooCommerce, HTML, CSS, Elementor, PHP",
      demoLink: "https://youtu.be/Z-pgnU_n6e8",
    },
  ]

  const handleLoadMore = () => {
    console.log("lenght", projects.length)
    setVisibleCount(projects.length)
  }
  const handleShowLess = () => {
    setVisibleCount(5)
  }

  return (
    <Container fluid className="project-section">
      <div style={{ pointerEvents: "none" }}>
        <Particle />
      </div>

      <Container className="project-container">
        <h1 className="project-heading">
          My Recent <strong className="irishblue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've developed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.slice(0, visibleCount).map((project, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
        <div className="">
          {visibleCount < projects.length ? (
            <div className="text-center">
              <Button
                variant="primary"
                className="cursor-pointer"
                onClick={handleLoadMore}
              >
                Load More
              </Button>
            </div>
          ) : (
            <Button
              variant="primary"
              className="cursor-pointer"
              onClick={handleShowLess}
            >
              Show Less
            </Button>
          )}
        </div>
      </Container>
    </Container>
  )
}

export default Projects
