import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  FiAlertCircle,
  FiArrowUp,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiX,
} from "react-icons/fi"
import { Reveal, CvButton } from "./ui"
import { socialLinks } from "./Hero"
import { profile } from "../data/portfolio"

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  botcheck: "", // honeypot
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
          "Thanks for reaching out. I'll get back to you soon. A confirmation email is on its way to you.",
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
  const showPopup = status.state === "sent" || status.state === "error"
  const closePopup = () => setStatus({ state: "idle", message: "" })

  // Auto-hide the popup: success after 4s, errors after 6s (more to read)
  useEffect(() => {
    if (!showPopup) return
    const id = setTimeout(
      () => setStatus({ state: "idle", message: "" }),
      status.state === "sent" ? 4000 : 6000
    )
    return () => clearTimeout(id)
  }, [showPopup, status.state])

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
        name="botcheck"
        value={form.botcheck}
        onChange={update}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button className="btn btn-primary form-submit" type="submit" disabled={sending}>
        <FiSend aria-hidden="true" /> {sending ? "Sending..." : "Send message"}
      </button>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="form-popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closePopup}
          >
            <motion.div
              className={`form-popup ${status.state}`}
              role={status.state === "error" ? "alert" : "status"}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="form-popup-close"
                onClick={closePopup}
                aria-label="Close"
              >
                <FiX />
              </button>
              <span className="form-popup-icon">
                {status.state === "sent" ? <FiCheckCircle /> : <FiAlertCircle />}
              </span>
              <strong>
                {status.state === "sent" ? "Message sent!" : "Message not sent"}
              </strong>
              <p>{status.message}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
                message and I'll get back to you within 1 working day.
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
