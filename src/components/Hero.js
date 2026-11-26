import React from "react"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { CvButton } from "./ui"
import { profile, stats } from "../data/portfolio"
import photo from "../Assets/profile.jpg"

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export const socialLinks = [
  { href: profile.socials.github, label: "GitHub", icon: <FiGithub /> },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: <FiLinkedin /> },
  { href: profile.socials.email, label: "Email", icon: <FiMail /> },
  { href: profile.socials.whatsapp, label: "WhatsApp", icon: <FaWhatsapp /> },
]

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.span className="status-pill" {...fade(0)}>
            <span className="status-dot" />
            Open to Software Engineering roles
          </motion.span>

          <motion.h1 className="hero-title" {...fade(0.08)}>
            Hi, I'm <span className="gradient-text">{profile.shortName}</span>.
            <br />
            I build software that holds up.
          </motion.h1>

          <motion.div className="hero-roles" {...fade(0.16)}>
            <span className="mono">&gt;</span>
            <Typewriter
              options={{
                strings: profile.roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 55,
              }}
            />
          </motion.div>

          <motion.p className="hero-tagline" {...fade(0.24)}>
            {profile.tagline}
          </motion.p>

          <motion.div className="hero-cta" {...fade(0.32)}>
            <CvButton />
            <a className="btn btn-secondary" href="#projects">
              View my work <FiArrowRight aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div className="hero-meta" {...fade(0.4)}>
            <span className="hero-location">
              <FiMapPin aria-hidden="true" /> {profile.location}
            </span>
            <div className="social-row">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="icon-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-frame">
            <img src={photo} alt={profile.name} />
          </div>
          <div className="floating-card card-top">
            <span className="mono">@Spring Boot</span>
            <strong>REST APIs · JPA · Security</strong>
          </div>
          <div className="floating-card card-bottom">
            <span className="mono">{"<Next.js />"}</span>
            <strong>React · Tailwind CSS · Responsive UI</strong>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <motion.dl className="stats" {...fade(0.5)}>
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

export default Hero
