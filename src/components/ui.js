import React from "react"
import { motion } from "framer-motion"
import { FiDownload } from "react-icons/fi"
import cv from "../Assets/kugavarathan.pdf"

export function Reveal({ children, delay = 0, className, as = "div" }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

export function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function CvButton({ variant = "primary", label = "Download CV" }) {
  return (
    <a
      className={`btn btn-${variant}`}
      href={cv}
      download="Kugavarathan_CV.pdf"
    >
      <FiDownload aria-hidden="true" />
      {label}
    </a>
  )
}

export function Chip({ children }) {
  return <span className="chip">{children}</span>
}
