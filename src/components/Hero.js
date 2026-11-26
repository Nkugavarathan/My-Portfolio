import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { SiHackerrank, SiMedium } from "react-icons/si"
import { CvButton, Rich } from "./ui"
import { profile, stats } from "../data/portfolio"
import photo from "../Assets/profile-cutout.png"

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export const socialLinks = [
  { href: profile.socials.github, label: "GitHub", icon: <FiGithub /> },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: <FiLinkedin /> },
  { href: profile.socials.hackerrank, label: "HackerRank", icon: <SiHackerrank /> },
  { href: profile.socials.medium, label: "Medium", icon: <SiMedium /> },
  { href: profile.socials.email, label: "Email", icon: <FiMail /> },
  { href: profile.socials.whatsapp, label: "WhatsApp", icon: <FaWhatsapp /> },
]

const openRoles = ["Software Engineer", "Full-Stack Developer"]

// Cycles through openRoles one at a time with a short slide/fade.
function RotatingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % openRoles.length),
      2600
    )
    return () => clearInterval(id)
  }, [])

  return (
    <span className="rotating-role">
      <AnimatePresence mode="wait" initial={false}>
        <motion.strong
          key={openRoles[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {openRoles[index]}
        </motion.strong>
      </AnimatePresence>
    </span>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="bg-blob bg-blob-hero" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.p className="status-pill" {...fade(0)}>
            <span className="status-dot" />
            <span>
              Open to <RotatingRole /> roles
            </span>
          </motion.p>

          <motion.h1 className="hero-title" {...fade(0.08)}>
            {profile.name}
          </motion.h1>

          <motion.p className="hero-role" {...fade(0.14)}>
            {profile.role} <span className="sep">/</span> Backend &amp; Full-Stack
          </motion.p>

          <motion.p className="hero-tagline" {...fade(0.2)}>
            <Rich text={profile.tagline} />
          </motion.p>

          <motion.div className="hero-cta" {...fade(0.28)}>
            <CvButton />
            <a className="btn btn-secondary" href="#projects">
              View projects <FiArrowRight aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div className="hero-meta" {...fade(0.36)}>
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
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="blob-back" aria-hidden="true" />
          <div className="blob-ring" aria-hidden="true" />
          <img className="hero-photo" src={photo} alt={profile.name} />
        </motion.div>
      </div>

      <div className="container">
        <motion.dl className="stats" {...fade(0.45)}>
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
