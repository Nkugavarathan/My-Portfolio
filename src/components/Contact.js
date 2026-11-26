import React from "react"
import { FiArrowUp, FiMail, FiPhone } from "react-icons/fi"
import { Reveal, CvButton } from "./ui"
import { socialLinks } from "./Hero"
import { profile } from "../data/portfolio"

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact-card">
          <div className="bg-blob bg-blob-contact" aria-hidden="true" />
          <span className="eyebrow">06</span>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-intro">
            I'm currently looking for Software Engineering opportunities. Feel
            free to reach out about a role, a project or just to connect.
          </p>
          <div className="hero-cta center-row">
            <a className="btn btn-primary" href={profile.socials.email}>
              <FiMail aria-hidden="true" /> Say hello
            </a>
            <CvButton variant="secondary" />
          </div>
          <div className="contact-details">
            <a href={profile.socials.email}>
              <FiMail aria-hidden="true" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <FiPhone aria-hidden="true" /> {profile.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="social-row">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="icon-btn small"
            >
              {s.icon}
            </a>
          ))}
          <a href="#home" className="icon-btn small" aria-label="Back to top">
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  )
}
