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
import { Section, Reveal, Chip } from "./ui"
import {
  profile,
  education,
  experience,
  projects,
  skills,
  achievements,
  leadership,
  certifications,
} from "../data/portfolio"

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Backend-first, full-stack capable.">
      <div className="about-grid">
        <Reveal className="about-text">
          {profile.summary.map((p) => (
            <p key={p}>{p}</p>
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
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <div className="timeline">
        {experience.map((job) => (
          <Reveal key={job.role + job.company} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
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
                  <li key={p}>{p}</li>
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
      eyebrow="Projects"
      title="Things I've built."
      intro="Production-style systems built around real problems: concurrency, payments, permissions, audit trails and live tracking."
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
            <p>{p.description}</p>
            {p.highlight && (
              <p className="project-highlight">
                <FiCheckCircle aria-hidden="true" />
                <span>{p.highlight}</span>
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
            <p>{p.description}</p>
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

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My toolkit.">
      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 3) * 0.06} className="card skill-card">
            <h3 className="card-label">{s.group}</h3>
            <div className="chip-row">
              {s.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </Reveal>
        ))}
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
            theme={{
              level0: "#1a2233",
              level1: "#0e4f63",
              level2: "#0b7a94",
              level3: "#14a8c9",
              level4: "#5ee1ff",
            }}
          />
        </div>
      </Reveal>
    </Section>
  )
}

export function Highlights() {
  return (
    <Section id="highlights" eyebrow="Beyond code" title="Leadership & learning.">
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
          <div className="chip-row">
            {certifications.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
