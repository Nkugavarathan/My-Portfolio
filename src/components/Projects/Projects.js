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
      title: "CineBook - Movie & Event Booking Platform",
      description:
        "Full-stack booking platform with a customer site and admin portal: seat-map booking with Standard/Premium/VIP pricing, Stripe Checkout, promo codes, self-service refunds and emailed PDF tickets with QR-scan check-in. Prevents double booking under concurrent requests via unique constraints, pessimistic row locks and 10-minute seat holds, with verified, idempotent Stripe webhooks and role-based access.",
      tech: "Java, Spring Boot, Spring Security, JWT, Spring Data JPA, MySQL, Stripe API, OpenPDF, ZXing, React.js, Tailwind CSS, Gemini API",
      ghLink: "https://github.com/Nkugavarathan/cinebook-movie-event-booking",
    },
    {
      title: "POS System - Supermarket Point of Sale",
      description:
        "POS and back-office system with a till interface (camera barcode scanning, cashier shifts, cash-drawer reconciliation), split cash/card/loyalty payments, returns, purchasing, stock counts and CSV reports. Idempotent all-or-nothing checkout with tax/promotion pricing, manager approval tokens and FEFO batch stock deduction with moving-average cost.",
      tech: "Java, Spring Boot, Spring Security (JWT), Spring Data JPA, MySQL, Flyway, Bucket4j, JUnit 5, Next.js, React, Zustand, TanStack Query, ZXing, jsPDF, Recharts",
      ghLink: "https://github.com/Nkugavarathan/POS-System",
    },
    {
      title: "ConstructFlow - Construction Management System",
      description:
        "Multi-tenant construction management system covering projects, tasks, budgets, expense approvals, purchase orders, inventory, versioned documents, risks and safety incidents. 6-role RBAC, JWT with refresh-token rotation, approval workflows with optimistic locking and a transactional audit trail, covered by Testcontainers integration tests.",
      tech: "Java, Spring Boot, Spring Security (JWT), Spring Data JPA, PostgreSQL, Flyway, JUnit 5, Testcontainers, Swagger/OpenAPI, Docker Compose, Next.js, React, TanStack Query, Zod, Recharts, Playwright",
      ghLink: "https://github.com/Nkugavarathan/Construction-Management",
    },
    {
      title: "AirportRide Lanka - Airport Transfer & Vehicle Rental Platform",
      description:
        "Trilingual (English, Sinhala, Tamil) vehicle rental and airport-transfer platform with place autocomplete, NIC-verified owner listings and a Google sign-in admin panel. Real-time trip tracking streams driver GPS via Server-Sent Events, with route recalculation and 90-day trail retention for complaint replay.",
      tech: "Next.js 16, React 19, Tailwind CSS 4, Prisma, MySQL, Auth.js (Google OAuth), next-intl, Leaflet, Google Maps API, OpenRouteService, Nominatim, Sharp",
      demoLink: "https://airportridelanka.com/en",
      demoLabel: "Live",
    },
    {
      title: "FitGenius - AI Fitness Tracker",
      description:
        "Full-stack fitness tracking system for managing workouts, goals and progress, with Gemini AI-powered personalized tips, motivation and a chat-based virtual trainer, JWT authentication and Recharts analytics dashboards.",
      tech: "Java, Spring Boot, React.js, MySQL, Gemini AI API, Tailwind CSS",
      ghLink: "https://github.com/Nkugavarathan/fitgenius-ai-fitness-tracker",
    },
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
                demoLabel={project.demoLabel}
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
