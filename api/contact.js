// Vercel serverless function: POST /api/contact
// Sends the enquiry to you and a fixed "thank you" auto-reply to the visitor.
//
// Required environment variables (set them in Vercel > Project > Settings > Environment Variables,
// never in code):
//   SMTP_USER   Gmail address used to send mail
//   SMTP_PASS   Gmail *App Password* for that account (not the normal login password)
// Optional:
//   CONTACT_TO  where enquiries are delivered (default: kugavarathan28@gmail.com)
//   SMTP_HOST   default smtp.gmail.com
//   SMTP_PORT   default 465

const nodemailer = require("nodemailer")

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Best-effort rate limit (per warm instance): 5 requests per IP per 10 minutes
const hits = new Map()
function rateLimited(ip) {
  const now = Date.now()
  const windowMs = 10 * 60 * 1000
  const recent = (hits.get(ip) || []).filter((t) => now - t < windowMs)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 5
}

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

// Strip line breaks so values can't inject extra mail headers
const oneLine = (s) => String(s).replace(/[\r\n]+/g, " ").trim()

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method not allowed" })
  }

  const body = typeof req.body === "string" ? safeJson(req.body) : req.body || {}
  const name = oneLine(body.name || "").slice(0, 100)
  const email = oneLine(body.email || "").slice(0, 200)
  const subject = oneLine(body.subject || "").slice(0, 150)
  const message = String(body.message || "").trim().slice(0, 5000)

  // Honeypot: real visitors never fill this hidden field
  // (named "botcheck" so browser autofill never fills it for real users)
  if (body.botcheck) {
    console.warn("contact: honeypot filled, ignoring submission")
    return res.status(200).json({ ok: true })
  }

  if (!name || !EMAIL_RE.test(email) || !subject || !message) {
    return res.status(400).json({
      error: "Please fill in your name, a valid email, a subject and a message.",
    })
  }

  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown"
  if (rateLimited(ip)) {
    return res.status(429).json({ error: "Too many messages. Please try again later." })
  }

  const { SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("contact: SMTP_USER / SMTP_PASS not configured")
    return res.status(500).json({ error: "Email is not configured yet. Please email me directly." })
  }

  const port = Number(process.env.SMTP_PORT || 465)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const to = process.env.CONTACT_TO || "kugavarathan28@gmail.com"
  const from = `"Kugavarathan Portfolio" <${SMTP_USER}>`

  try {
    // 1) The enquiry, to you. Reply-To is the visitor so you can answer directly.
    const toMeInfo = await transporter.sendMail({
      from,
      to,
      replyTo: { name, address: email },
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
        <strong>Email:</strong> ${escapeHtml(email)}<br/>
        <strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    })

    // 2) Fixed auto-reply to the visitor. It deliberately does not repeat their
    //    subject or message, so the form can't be abused to send arbitrary text to others.
    const replyInfo = await transporter.sendMail({
      from,
      to: email,
      replyTo: to,
      subject: "Thank you for reaching out",
      text:
        `Hi ${name},\n\n` +
        `Thank you for getting in touch. I've received your message and will get back to you as soon as possible, usually within 1–2 working days.\n\n` +
        `In the meantime, you can see my work at https://nkugavarathan.vercel.app or on GitHub: https://github.com/Nkugavarathan\n\n` +
        `Best regards,\nKugavarathan Navaraththinarasa\nSoftware Engineer`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1e293b">
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thank you for getting in touch. I've received your message and will get back to you as soon as possible, usually within 1–2 working days.</p>
          <p>In the meantime, you can see my work on my
          <a href="https://nkugavarathan.vercel.app">portfolio</a> or
          <a href="https://github.com/Nkugavarathan">GitHub</a>.</p>
          <p>Best regards,<br/><strong>Kugavarathan Navaraththinarasa</strong><br/>Software Engineer</p>
        </div>`,
    })

    console.log("contact: sent", {
      to,
      enquiry: toMeInfo.messageId,
      accepted: toMeInfo.accepted,
      autoReply: replyInfo.messageId,
      autoReplyAccepted: replyInfo.accepted,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error("contact: send failed", err && err.message)
    return res.status(502).json({ error: "Sorry, the message could not be sent. Please email me directly." })
  }
}

function safeJson(s) {
  try {
    return JSON.parse(s)
  } catch (e) {
    return {}
  }
}
