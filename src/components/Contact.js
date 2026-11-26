import React, { useState } from "react"
import {
  FiAlertCircle,
  FiArrowUp,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi"
import { Reveal, CvButton } from "./ui"
import { socialLinks } from "./Hero"
import { profile } from "../data/portfolio"

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "", // honeypot
}

function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState({ state: "idle", message: "" })

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: "sending", message: "" })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }
      setForm(emptyForm)
      setStatus({
        state: "sent",
        message:
          "Thanks! Your message has been sent. A confirmation email is on its way to you.",
      })
    } catch (err) {
      setStatus({
        state: "error",
        message:
          err.message === "Failed to fetch"
            ? "Couldn't reach the server. Please email me directly."
            : err.message,
      })
    }
  }

  const sending = status.state === "sending"

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label className="field">
          <span>Name</span>
          <input
            name="name"
            value={form.name}
            onChange={update}
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Your name"
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="field">
        <span>Subject</span>
        <input
          name="subject"
          value={form.subject}
          onChange={update}
          required
          maxLength={150}
          placeholder="What is it about?"
        />
      </label>

      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          required
          maxLength={5000}
          rows={5}
          placeholder="Your message..."
        />
      </label>

      {/* Honeypot: hidden from people; bots tend to fill it */}
      <input
        className="hp"
        type="text"
        name="company"
        value={form.company}
        onChange={update}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button className="btn btn-primary form-submit" type="submit" disabled={sending}>
        <FiSend aria-hidden="true" /> {sending ? "Sending..." : "Send message"}
      </button>

      {status.message && (
        <p className={`form-status ${status.state}`} role="status">
          {status.state === "sent" ? (
            <FiCheckCircle aria-hidden="true" />
          ) : (
            <FiAlertCircle aria-hidden="true" />
          )}
          {status.message}
        </p>
      )}
    </form>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact-card">
          <div className="bg-blob bg-blob-contact" aria-hidden="true" />
          <div className="contact-grid">
            <div className="contact-info">
              <span className="eyebrow">06</span>
              <h2 className="section-title">Get in touch</h2>
              <p className="section-intro">
                Have a <strong className="hl">job opportunity</strong>, a{" "}
                <strong className="hl">project</strong> or a question? Send me a
                message and I'll get back to you within 1 working days.
              </p>
              <div className="contact-details">
                <a href={profile.socials.email}>
                  <FiMail aria-hidden="true" /> {profile.email}
                </a>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  <FiPhone aria-hidden="true" /> {profile.phone}
                </a>
                <span>
                  <FiMapPin aria-hidden="true" /> {profile.location}
                </span>
              </div>
              <CvButton variant="secondary" />
            </div>
            <ContactForm />
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
