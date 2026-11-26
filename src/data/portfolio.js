// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Kugavarathan Navaraththinarasa",
  shortName: "Kugavarathan",
  initials: "KN",
  role: "Software Engineer",
  roles: [
    "Backend Developer",
    "Full-Stack Engineer",
    "Spring Boot Developer",
    "Next.js & React Developer",
  ],
  location: "Colombo, Sri Lanka",
  email: "kugavarathan28@gmail.com",
  phone: "+94 77 501 9192",
  tagline:
    "I build secure, reliable web applications, from Spring Boot APIs and relational databases to clean React and Next.js interfaces.",
  summary: [
    "I'm a 4th-year BSc (Hons) Computing and Information Systems undergraduate at Sabaragamuwa University of Sri Lanka, with a strong interest in backend software development.",
    "I work mainly with Java and Spring Boot, OOP, data structures & algorithms, design patterns, RESTful APIs and relational databases (MySQL, PostgreSQL). I test my work at every level with JUnit 5, Testcontainers and Playwright, and ship with Git, Docker and Agile practices.",
    "I'm analytical, resilient and collaborative, and I'm curious about data and financial technology.",
  ],
  socials: {
    github: "https://github.com/Nkugavarathan",
    linkedin:
      "https://www.linkedin.com/in/kugavarathan-navaraththinarasa-7ab094267/",
    whatsapp: "https://wa.me/94775019192",
    email: "mailto:kugavarathan28@gmail.com",
  },
}

export const stats = [
  { value: "6 mo", label: "Industry internship" },
  { value: "10+", label: "Projects built" },
  { value: "4th", label: "Year BSc (Hons)" },
]

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Airentosoft (Pvt) Ltd",
    period: "Dec 2025 – May 2026",
    duration: "6 months",
    points: [
      "Developed and customised WordPress and Next.js, React and Tailwind CSS websites for car rental clients, including reusable components, API integration, SEO and deployment.",
      "Built a booking engine and integrated its frontend with ASP.NET Core APIs.",
      "Contributed to a Next.js and Supabase platform, a RAG-based AI chatbot using the Gemini API, and an AI-powered blog CMS (Next.js, Express.js, Firebase).",
      "Assisted with PHP CRM API integration, and tested and debugged applications.",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "WordPress", "ASP.NET Core APIs", "Supabase", "Gemini API", "Firebase"],
  },
]

export const education = [
  {
    title: "B.Sc. (Hons) in Computing and Information Systems",
    place: "Sabaragamuwa University of Sri Lanka",
    period: "July 2023 – Present",
  },
  {
    title: "G.C.E. Advanced Level – Physical Science Stream",
    place: "J/Hartley College",
    period: "Completed 2021",
  },
]

export const projects = [
  {
    title: "CineBook",
    subtitle: "Movie & Event Booking Platform",
    featured: true,
    description:
      "Customer site and admin portal with seat-map booking (Standard/Premium/VIP), Stripe Checkout, promo codes, self-service refunds and emailed PDF tickets with QR check-in.",
    highlight:
      "Stops double booking under concurrent requests using unique constraints, pessimistic row locks and 10-minute seat holds. Payments are confirmed by verified, idempotent Stripe webhooks.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Stripe", "React", "Tailwind CSS"],
    github: "https://github.com/Nkugavarathan/cinebook-movie-event-booking",
  },
  {
    title: "POS System",
    subtitle: "Supermarket Point of Sale",
    featured: true,
    description:
      "Till and back-office system: camera barcode scanning, cashier shifts, cash-drawer reconciliation, split payments, returns, purchasing, stock counts, CSV reports and click-and-collect.",
    highlight:
      "An idempotent, all-or-nothing checkout uses manager approval tokens and deducts stock from a locked ledger (first-expiry-first-out batches, moving-average cost).",
    tech: ["Java", "Spring Boot", "MySQL", "Flyway", "Bucket4j", "JUnit 5", "Next.js", "Zustand", "TanStack Query"],
    github: "https://github.com/Nkugavarathan/POS-System",
  },
  {
    title: "ConstructFlow",
    subtitle: "Construction Management System",
    featured: true,
    description:
      "Multi-tenant platform for projects, tasks, budgets, expense approvals, purchase orders, inventory, versioned documents, risks and safety incidents.",
    highlight:
      "6-role permission model, JWT with refresh-token rotation, and approval workflows with optimistic locking and a transactional audit trail. Covered by Testcontainers tests.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Flyway", "Testcontainers", "Docker", "Next.js", "Zod", "Playwright"],
    github: "https://github.com/Nkugavarathan/Construction-Management",
  },
  {
    title: "AirportRide Lanka",
    subtitle: "Airport Transfer & Vehicle Rental Platform",
    featured: true,
    description:
      "Trilingual (English, Sinhala, Tamil) rental and airport-transfer platform with place autocomplete, NIC-verified owner listings and a Google sign-in admin panel.",
    highlight:
      "Live trip tracking: drivers stream GPS and riders follow along via Server-Sent Events. Per-trip GPS trails are kept for 90 days so admins can replay routes.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "Prisma", "MySQL", "Auth.js", "Leaflet", "Google Maps API"],
    live: "https://airportridelanka.com/en",
  },
  {
    title: "FitGenius",
    subtitle: "AI Fitness Tracker",
    description:
      "Fitness tracking for workouts, goals and progress, with Gemini AI tips, motivation and a chat-based virtual trainer. Includes JWT auth and Recharts dashboards.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/Nkugavarathan/fitgenius-ai-fitness-tracker",
  },
  {
    title: "VARA Fashion",
    subtitle: "MERN Shopping Platform",
    description:
      "Full-stack MERN store with MVC architecture: login, product management, cart, admin dashboard, JWT and role-based auth, chatbot, analytics and PDF receipts.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Nkugavarathan/vara-fashion-ecommerce-mern",
    demo: "https://www.youtube.com/watch?v=hywZ-p3JLxE&feature=youtu.be",
  },
  {
    title: "AI Career Coach",
    subtitle: "Resume & Interview Assistant",
    description:
      "Generates resumes, cover letters and mock interview questions, with Clerk authentication, Prisma ORM and automated reminders via n8n.",
    tech: ["Next.js", "Shadcn UI", "Prisma", "Clerk", "Gemini AI", "Inngest", "n8n"],
    github: "https://github.com/Nkugavarathan/AI-Career-Coach",
  },
  {
    title: "AI Chatbot",
    subtitle: "Text & Image Generation",
    description:
      "MERN AI chatbot with text and image generation, Stripe payments and JWT authentication.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "OpenAI API", "ImageKit", "Stripe"],
    github: "https://github.com/Nkugavarathan/ai-chatbot",
    live: "https://chatwithmygpt.vercel.app/",
  },
  {
    title: "Nellai Styles",
    subtitle: "Fashion E-Commerce Website",
    description:
      "Responsive WooCommerce fashion store with custom branding, product layouts and a mobile-first Elementor UI.",
    tech: ["WordPress", "WooCommerce", "Elementor", "PHP"],
    demo: "https://youtu.be/Z-pgnU_n6e8",
  },
]

export const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "PHP", "SQL"] },
  {
    group: "Backend & Security",
    items: ["Spring Boot", "Spring Security", "Spring Data JPA (Hibernate)", "Node.js", "Express.js", "JWT", "REST APIs"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "SASS", "HTML", "CSS"],
  },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Flyway"] },
  { group: "Testing & Automation", items: ["JUnit 5", "Testcontainers", "Jest", "Playwright", "n8n"] },
  { group: "Cloud & DevOps", items: ["Docker", "Docker Compose", "Git", "GitHub", "Vercel"] },
  { group: "Integrations", items: ["Stripe API", "Google Gemini API"] },
  {
    group: "Tools",
    items: ["IntelliJ IDEA", "VS Code", "Eclipse", "Postman", "Swagger / OpenAPI", "Figma", "WordPress"],
  },
  {
    group: "Practices",
    items: ["OOP", "Design Patterns", "MVC", "Layered Architecture", "DSA", "Agile"],
  },
]

export const achievements = [
  "Semi-Finalist, HackX 8.0 (2023), University of Kelaniya",
  "Participant, J'pura Xtreme Hackathon 2024, University of Sri Jayewardenepura",
]

export const leadership = [
  "Finance Team Member, PearlHack 3.0 (IEEE WIE Affinity Group)",
  "Assistant Manager, IT & Satellite Division, SEDS Sabaragamuwa",
  "Web Team Member, IEEE WIE, Sabaragamuwa University of Sri Lanka",
  "Volunteer, IEEE Student Branch, Sabaragamuwa University of Sri Lanka",
  "Cricket Team Captain (U-19), J/Hartley College",
]

export const certifications = [
  "Fundamentals of Java Programming",
  "Building Applications with Spring Boot and MVC Architecture",
  "Java Data Structures & Algorithms + LeetCode",
  "Postman API Fundamentals Student Expert",
  "SQL (Intermediate)",
  "JavaScript Essential",
  "React",
  "Introduction to MERN",
  "Getting Started with Git and GitHub",
  "Introduction to AI",
]
