"use client";

import { useState, useEffect } from "react";

const skills = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Python",
  "REST APIs",
  "GraphQL",
  "Docker",
  "Git & GitHub",
  "Figma",
  "AI Workflows",
  "Automation",
];

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    const pageWrapper = document.querySelector(".page-wrapper") as HTMLElement;
    if (!pageWrapper) return;
    if (isModalOpen) {
      pageWrapper.style.overflowY = "hidden";
    } else {
      pageWrapper.style.overflowY = "auto";
    }
    return () => {
      pageWrapper.style.overflowY = "auto";
    };
  }, [isModalOpen]);

  // Close modal on escape key press
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <section id="about" className="snap-section" aria-label="About">
      <div className="section-inner">
        <div className="about-grid">

          {/* Left Column — Premium Editorial Portrait */}
          <div className="about-portrait-wrapper">
            <div className="about-portrait-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/christian.jpg"
                alt="Christian Jarold David Portrait"
                className="about-portrait-img"
              />
              <div className="about-portrait-overlay" />
              <div className="about-portrait-details">
                <span className="about-portrait-name">Christian Jarold</span>
                <span className="about-portrait-tag">Full-Stack Dev & Designer</span>
              </div>
            </div>
            {/* Parallax offset gold frame */}
            <div className="about-portrait-border-offset" />
          </div>

          {/* Right Column — Editorial Bio & Details */}
          <div>
            <p className="section-label">Get to know me</p>
            <h2 className="section-title">About Me</h2>
            <div className="section-divider" aria-hidden="true" />

            <div className="about-text">
              <p>
                Hi! I&apos;m <strong style={{ color: "var(--text-primary)" }}>Jarold</strong>, someone who genuinely gets excited when an idea starts becoming something real.
              </p>
              <p>
                What draws me to technology is that it never stands still. There is always something new to learn, a better way to solve something, or an idea that didn&apos;t exist last year. That constant movement keeps me engaged in a way few things do. I&apos;m not just interested in where technology is right now. I&apos;m excited about where it&apos;s going, and I want to be someone who grows alongside it.
              </p>

              <div className={`about-text-extra ${isExpanded ? "expanded" : ""}`}>
                <p>
                  For me, building things has never really been about the technology itself. It&apos;s about the person on the other end, someone who has a problem, a dream, or a need, and wondering if I could do something about it. That question is what gets me started on most of the things I&apos;ve built.
                </p>
                <p>
                  I&apos;ve worked with different projects, competed with peers, led teams, and shipped projects I&apos;m genuinely proud of. Along the way I&apos;ve learned that the hardest part is rarely the code. It&apos;s listening well, thinking clearly, and caring enough to keep going when things get messy.
                </p>
                <p>
                  Outside of work, I&apos;m usually learning something new, going down rabbit holes I didn&apos;t plan on, or thinking about the next thing I want to build. I believe curiosity is a skill, and I try to keep it sharp.
                </p>
                <p>
                  If you&apos;re here, we probably have something in common. Let&apos;s connect.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="btn-read-more"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "Show Less" : "Read More"}</span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
                style={{ display: "inline-flex", textDecoration: "none", border: "none" }}
                id="download-resume-btn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </button>
            </div>

            {/* Modern Stats Grid */}
            <div className="about-stats-grid">
              <div className="stat-card">
                <div className="stat-number">3<span>+</span></div>
                <div className="stat-label">Years Exp.</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">20<span>+</span></div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10<span>+</span></div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">Lines of Code</div>
              </div>
            </div>

            {/* Tech Stack Skills Pills */}
            <div style={{ marginTop: "36px" }}>
              <p className="section-label" style={{ marginBottom: "14px" }}>
                Tech Stack
              </p>
              <div className="skills-flex" id="skills-grid">
                {skills.map((skill) => (
                  <div key={skill} className="skill-pill">
                    <div className="skill-dot" aria-hidden="true" />
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Resume Preview Modal */}
      {isModalOpen && (
        <div
          className="resume-modal-overlay"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="resume-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="resume-modal-header">
              <h3 className="resume-modal-title" id="modal-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-gold)" }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>JaroldDavid-Resume.pdf</span>
              </h3>
              <div className="resume-modal-actions">
                <a
                  href="/JaroldDavid-Resume.pdf"
                  download="JaroldDavid-Resume.pdf"
                  className="resume-modal-btn-download"
                  title="Download PDF"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="resume-modal-btn-close"
                  aria-label="Close preview"
                  title="Close Preview"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body (Iframe view) */}
            <div className="resume-modal-body">
              <iframe
                src="/JaroldDavid-Resume.pdf"
                title="Resume Preview"
                className="resume-iframe"
              />
            </div>

            {/* Mobile Fallback Note */}
            <div className="resume-modal-mobile-note">
              Can&apos;t see the preview?{" "}
              <a
                href="/JaroldDavid-Resume.pdf"
                download="JaroldDavid-Resume.pdf"
                style={{ color: "var(--accent-gold)", fontWeight: 600 }}
              >
                Click here to download directly.
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

