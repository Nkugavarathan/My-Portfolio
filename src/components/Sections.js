import React, { useState } from "react"
import GitHubCalendar from "react-github-calendar"
import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiGithub,
  FiPlay,
  FiUsers,
} from "react-icons/fi"
import { Section, Reveal, Chip, Rich } from "./ui"
import {
  profile,
  education,
  experience,
  projects,
  skills,
  practices,
  achievements,
  leadership,
  certifications,
} from "../data/portfolio"
import { techIcons } from "./techIcons"
import { useTheme } from "../theme"

export function About() {
  return (
    <Section id="about" eyebrow="01" title="About me">
      <div className="about-grid">
        <Reveal className="about-text">
          {profile.summary.map((p) => (
            <p key={p}>
              <Rich text={p} />
            </p>
          ))}
        </Reveal>

        <Reveal className="edu-list" delay={0.1}>
          <h3 className="card-label">
            <FiBookOpen aria-hidden="true" /> Education
          </h3>
          {education.map((e) => (
            <div key={e.title} className="edu-item">
              <strong>{e.title}</strong>
              <span>{e.place}</span>
              <span className="muted mono">{e.period}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="02" title="Experience">
      <div className="timeline">
        {experience.map((job) => (
          <Reveal key={job.role + job.company} className="timeline-item">
            <div className="card job-card">
              <div className="job-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="accent">{job.company}</p>
                </div>
                <div className="job-period mono">
                  {job.period}
                  <span className="muted"> · {job.duration}</span>
                </div>
              </div>
              <ul className="job-points">
                {job.points.map((p) => (
                  <li key={p}>
                    <Rich text={p} />
                  </li>
                ))}
              </ul>
              <div className="chip-row">
                {job.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer">
          <FiGithub aria-hidden="true" /> Code
        </a>
      )}
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer">
          <FiArrowUpRight aria-hidden="true" /> Live site
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer">
          <FiPlay aria-hidden="true" /> Demo
        </a>
      )}
    </div>
  )
}

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const visibleOthers = showAll ? others : others.slice(0, 3)

  return (
    <Section
      id="projects"
      eyebrow="03"
      title="Selected projects"
      intro="Systems I designed and built end to end. Each one is built around a real engineering problem: concurrency, payments, permissions or live data."
    >
      <div className="featured-grid">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} className="card project-card featured">
            <div className="project-top">
              <span className="project-index mono">0{i + 1}</span>
              <ProjectLinks project={p} />
            </div>
            <h3>{p.title}</h3>
            <p className="project-subtitle">{p.subtitle}</p>
            <p>
              <Rich text={p.description} />
            </p>
            {p.highlight && (
              <p className="project-highlight">
                <FiCheckCircle aria-hidden="true" />
                <span>
                  <Rich text={p.highlight} />
                </span>
              </p>
            )}
            <div className="chip-row">
              {p.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="subhead">
        <h3>More projects</h3>
      </Reveal>
      <div className="mini-grid">
        {visibleOthers.map((p) => (
          <Reveal key={p.title} className="card project-card mini">
            <h4>{p.title}</h4>
            <p className="project-subtitle">{p.subtitle}</p>
            <p>
              <Rich text={p.description} />
            </p>
            <div className="chip-row">
              {p.tech.slice(0, 5).map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            <ProjectLinks project={p} />
          </Reveal>
        ))}
      </div>
      {others.length > 3 && (
        <div className="center">
          <button className="btn btn-secondary" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Show less" : `Show all ${others.length} projects`}
            <FiChevronDown
              aria-hidden="true"
              style={{ transform: showAll ? "rotate(180deg)" : "none", transition: "transform .3s" }}
            />
          </button>
        </div>
      )}
    </Section>
  )
}

const calendarThemes = {
  dark: { level0: "#1a2233", level1: "#1e2f6b", level2: "#2c4bb0", level3: "#4a74f2", level4: "#9db8ff" },
  light: { level0: "#e8ebf2", level1: "#bfcffb", level2: "#86a5f5", level3: "#4a74f2", level4: "#2447b8" },
}

export function Skills() {
  const { theme } = useTheme()
  return (
    <Section id="skills" eyebrow="04" title="Skills & tools">
      <div className="card skills-panel">
        {skills.map((s) => (
          <Reveal key={s.group} className="skill-row">
            <h3 className="skill-group">{s.group}</h3>
            <ul className="tech-grid">
              {s.items.map((item) => {
                const entry = techIcons[item]
                const Icon = entry && entry[0]
                return (
                  <li
                    key={item}
                    className={`tech-tile ${Icon ? "" : "text-only"}`}
                    style={entry ? { "--brand": entry[1] } : undefined}
                  >
                    {Icon && <Icon aria-hidden="true" className="tech-icon" />}
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        ))}
        <Reveal className="skill-row">
          <h3 className="skill-group">Practices</h3>
          <p className="practices">{practices.join("  ·  ")}</p>
        </Reveal>
      </div>

      <Reveal className="card github-card">
        <h3 className="card-label">
          <FiGithub aria-hidden="true" /> GitHub contributions
        </h3>
        <div className="github-calendar">
          <GitHubCalendar
            username="Nkugavarathan"
            blockSize={12}
            blockMargin={4}
            fontSize={13}
            theme={calendarThemes[theme]}
          />
        </div>
      </Reveal>
    </Section>
  )
}

export function Highlights() {
  return (
    <Section id="highlights" eyebrow="05" title="Leadership & achievements">
      <div className="highlights-grid">
        <Reveal className="card list-card">
          <h3 className="card-label">
            <FiAward aria-hidden="true" /> Achievements
          </h3>
          <ul>
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="card list-card" delay={0.06}>
          <h3 className="card-label">
            <FiUsers aria-hidden="true" /> Volunteering & leadership
          </h3>
          <ul>
            {leadership.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="card list-card wide" delay={0.12}>
          <h3 className="card-label">
            <FiCheckCircle aria-hidden="true" /> Certifications
          </h3>
          <ul className="cert-grid">
            {certifications.map((c) => (
              <li key={c.name}>
                <a
                  className="cert-link"
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="cert-text">
                    <span className="cert-name">{c.name}</span>
                    <span className="cert-issuer">{c.issuer}</span>
                  </span>
                  <FiArrowUpRight aria-hidden="true" className="cert-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
