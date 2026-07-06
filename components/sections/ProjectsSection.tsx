"use client";

import { useState } from "react";

const projects = [
  {
    tag: "IoT + AI + Web",
    title: "Fishtastic Capstone",
    description:
      "Solar-powered IoT aquaculture system monitoring 5 parameters, reducing manual checks by 80%. Developed AI-analytics web/mobile app improving response by 70% (ISO 25010 Evaluated at 96.18% - Excellent).",
    tech: ["React Native", "Next.js", "AI Analytics", "Node.js", "IoT Sensors", "DevOps"],
  },
  {
    tag: "AI + Helpdesk + Web",
    title: "Queryous IT Autopilot",
    description:
      "Enterprise IT helpdesk autopilot powered by Google Gemini. Automatically triages tickets, classifies category urgency, balances technician workloads, and drafts customized self-resolution troubleshooting steps.",
    tech: ["Next.js", "Google Gemini", "Prisma", "PostgreSQL", "Tailwind CSS", "TypeScript"],
  },
  {
    tag: "Portal + Networks + PHP",
    title: "DOST3 Guest Wi-Fi Portal",
    description:
      "A high-performance Captive Portal and administrative dashboard integrated with FortiGate Firewall APIs. Features daily quota tracking, Trainee & Visitor role limit rules, Real User Monitoring (RUM), and MAC-address device whitelisting.",
    tech: ["Laravel", "Vue.js", "PHP", "SQLite", "FortiGate API", "Tailwind CSS"],
  },
  {
    tag: "Competition",
    title: "CODECHUM NPC 2025",
    description:
      "Placed 2nd in the Finals and 5th overall in the Grand Finals nationally among 64 competing schools in a high-stakes, timed algorithmic coding challenge.",
    tech: ["Python", "C++", "C", "Data Structures", "Algorithms"],
  },
  {
    tag: "Certification",
    title: "Google Cybersecurity",
    description:
      "Completed a rigorous 9-course professional certificate covering network security, threat analysis, incident response, SIEM tools, and Python security automation (168+ hours).",
    tech: ["SIEM Tools", "Network Security", "Python", "Incident Response"],
  },
  {
    tag: "Certification",
    title: "Google IT Support",
    description:
      "Completed a 6-course professional certificate covering IT system administration, networking routing, operating systems, and basic security best practices (170+ hours).",
    tech: ["SysAdmin", "Networking", "Operating Systems", "Active Directory"],
  },
  {
    tag: "Certification",
    title: "Google PM & AI Specialist",
    description:
      "Completed professional certificates in Project Management (agile methodologies, stakeholder execution) and AI (prompt engineering, responsible AI foundations).",
    tech: ["Agile", "Risk Management", "Prompt Engineering", "Modern AI"],
  },
  {
    tag: "Networking",
    title: "Cisco Networking Suite",
    description:
      "Earned 17 certifications covering Linux Essentials, CCNA introduction, Packet Tracer networking, Ethical Hacking, Data Science, and Cyber Threat Management.",
    tech: ["CCNA", "Ethical Hacking", "Linux Essentials", "Threat Management"],
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"projects" | "certification">("projects");
  const [certPage, setCertPage] = useState(0);
  const [projectPage, setProjectPage] = useState(0);

  const onlyProjects = projects.filter(
    (p) => p.tag !== "Certification" && p.tag !== "Networking" && p.tag !== "Competition"
  );
  const certifications = projects.filter(
    (p) => p.tag === "Certification" || p.tag === "Networking" || p.tag === "Competition"
  );

  const chunkedCertifications = [];
  for (let i = 0; i < certifications.length; i += 4) {
    chunkedCertifications.push(certifications.slice(i, i + 4));
  }

  const handleTabChange = (tab: "projects" | "certification") => {
    setActiveTab(tab);
    setCertPage(0);
    setProjectPage(0);
  };

  return (
    <section id="projects" className="snap-section" aria-label="Projects and Certifications">
      <div className="section-inner">
        <p className="section-label">
          {activeTab === "projects" ? "What I've built" : "What I've earned"}
        </p>
        <h2 className="section-title">
          {activeTab === "projects" ? "Projects" : "Certifications"}
        </h2>
        <div className="section-divider" aria-hidden="true" />

        {/* Sliding Tabs Nav */}
        <div className="projects-tabs-container">
          <div className="projects-tabs-nav">
            <button
              onClick={() => handleTabChange("projects")}
              className={`projects-tab-btn ${activeTab === "projects" ? "active" : ""}`}
            >
              Projects
            </button>
            <button
              onClick={() => handleTabChange("certification")}
              className={`projects-tab-btn ${activeTab === "certification" ? "active" : ""}`}
            >
              Certification
            </button>
            <div
              className="projects-tab-indicator"
              style={{
                transform: activeTab === "projects" ? "translateX(0)" : "translateX(100%)",
              }}
            />
          </div>
        </div>

        {/* Sliding Slides */}
        <div className="projects-slider-container">
          <div
            className="projects-slider"
            style={{
              transform: activeTab === "projects" ? "translateX(0%)" : "translateX(-50%)",
            }}
          >
            {/* Slide 1: Projects Cinematic Carousel */}
            <div className={`projects-slide slide-projects ${activeTab === "projects" ? "active" : ""}`}>
              
              {/* Top Project Selector Bar */}
              {onlyProjects.length > 1 && (
                <div
                  className="project-selector-bar"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "40px",
                    marginBottom: "32px",
                    flexWrap: "wrap"
                  }}
                >
                  {onlyProjects.map((project, idx) => {
                    const isActive = projectPage === idx;
                    return (
                      <button
                        key={project.title}
                        onClick={() => setProjectPage(idx)}
                        className={`project-selector-btn ${isActive ? "active" : ""}`}
                        style={{
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "8px 0 10px 0",
                          position: "relative",
                          color: isActive ? "var(--text-primary)" : "var(--text-muted-45)",
                          transition: "color 0.3s ease",
                          outline: "none"
                        }}
                      >
                        <span
                          className="project-selector-num"
                          style={{
                            fontFamily: "var(--font-space-grotesk), sans-serif",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "var(--accent-gold)"
                          }}
                        >
                          0{idx + 1}.
                        </span>
                        <span
                          className="project-selector-name"
                          style={{
                            fontFamily: "var(--font-sans), sans-serif",
                            fontSize: "14px",
                            fontWeight: 600,
                            letterSpacing: "-0.01em"
                          }}
                        >
                          {project.title}
                        </span>
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "2px",
                            background: "var(--accent-gold)",
                            transform: isActive ? "scaleX(1)" : "scaleX(0)",
                            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            transformOrigin: "center"
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              <div className="projects-carousel-container">
                <div
                  className="projects-carousel-slider"
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    width: `${onlyProjects.length * 100}%`,
                    transform: `translateX(-${(projectPage * 100) / onlyProjects.length}%)`
                  }}
                >
                  {onlyProjects.map((project, idx) => {
                    const isActive = projectPage === idx;
                    const projectImgSrc = project.title === "Fishtastic Capstone"
                      ? "/fishtastic.gif"
                      : project.title === "DOST3 Guest Wi-Fi Portal"
                        ? "/dost3-portal.gif"
                        : project.title === "Queryous IT Autopilot"
                          ? "/queryous.gif?v=6"
                          : "/projects-glimpse.png";

                    const projectMockupAddress = project.title === "Fishtastic Capstone"
                      ? "jarold-portfolio://fishtastic"
                      : project.title === "DOST3 Guest Wi-Fi Portal"
                        ? "jarold-portfolio://dost3-portal"
                        : project.title === "Queryous IT Autopilot"
                          ? "jarold-portfolio://queryous"
                          : "jarold-portfolio://codechum-npc";

                    return (
                      <div
                        key={project.title}
                        className={`project-slide-item ${isActive ? "active" : ""}`}
                        style={{
                          width: `${100 / onlyProjects.length}%`,
                          flexShrink: 0
                        }}
                      >
                        <div className="projects-layout">
                          {/* Left: Mockup */}
                          <div className="projects-glimpse-mockup">
                            <div className="mockup-header">
                              <div className="mockup-dots">
                                <span className="mockup-dot red" />
                                <span className="mockup-dot yellow" />
                                <span className="mockup-dot green" />
                              </div>
                              <div className="mockup-address">{projectMockupAddress}</div>

                              {/* Integrated Browser Nav Buttons */}
                              {onlyProjects.length > 1 && (
                                <div className="mockup-nav">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setProjectPage((p) => Math.max(0, p - 1));
                                    }}
                                    disabled={projectPage === 0}
                                    className="mockup-nav-btn"
                                    aria-label="Back"
                                    title="Previous Project"
                                  >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="15 18 9 12 15 6" />
                                    </svg>
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setProjectPage((p) => Math.min(onlyProjects.length - 1, p + 1));
                                    }}
                                    disabled={projectPage === onlyProjects.length - 1}
                                    className="mockup-nav-btn"
                                    aria-label="Forward"
                                    title="Next Project"
                                  >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                  </button>
                                </div>
                              )}
                            </div>
                            <div className="projects-glimpse-body">
                              <img
                                src={projectImgSrc}
                                onError={(e) => {
                                  const target = e.currentTarget;
                                  if (target.src.endsWith(".gif")) {
                                    target.src = target.src.replace(".gif", ".png");
                                  }
                                }}
                                alt={project.title}
                                className="projects-glimpse-img"
                              />
                            </div>
                          </div>

                           {/* Right: Detailed text details card */}
                          <div
                            className="project-details-card"
                            style={{
                              border: "1px solid var(--border-card)",
                              borderRadius: "12px",
                              padding: "30px",
                              background: "var(--bg-card)",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "flex-start",
                              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                              minHeight: "100%",
                              width: "100%"
                            }}
                          >
                            <span
                              className="project-tag"
                              style={{
                                display: "inline-block",
                                fontSize: "8px",
                                fontWeight: "600",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "var(--accent-gold)",
                                border: "1px solid rgba(212, 168, 83, 0.3)",
                                borderRadius: "100px",
                                padding: "4px 10px",
                                marginBottom: "14px",
                                alignSelf: "flex-start"
                              }}
                            >
                              {project.tag}
                            </span>
                            <h3
                              className="project-title"
                              style={{
                                fontSize: "24px",
                                fontWeight: "700",
                                marginBottom: "12px",
                                lineHeight: "1.25",
                                color: "var(--text-primary)"
                              }}
                            >
                              {project.title}
                            </h3>
                            <p
                              className="project-desc"
                              style={{
                                fontSize: "14px",
                                lineHeight: "1.7",
                                color: "var(--text-muted-60)",
                                marginBottom: "20px",
                                textAlign: "left",
                                maxWidth: "520px"
                              }}
                            >
                              {project.description}
                            </p>
                            <div
                              className="project-tech"
                              aria-label="Technologies used"
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "8px"
                              }}
                            >
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className="tech-chip"
                                  style={{
                                    padding: "3px 8px",
                                    fontSize: "10px",
                                    transition: "all 0.2s ease"
                                  }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Slide 2: Certifications Grid Carousel */}
            <div className={`projects-slide slide-certification ${activeTab === "certification" ? "active" : ""}`}>
              <div className="certifications-carousel">
                <div
                  className="certifications-slider"
                  style={{
                    width: `${chunkedCertifications.length * 100}%`,
                    transform: `translateX(-${(certPage * 100) / chunkedCertifications.length}%)`
                  }}
                >
                  {chunkedCertifications.map((chunk, idx) => (
                    <div
                      key={idx}
                      className="certifications-page"
                      style={{ width: `${100 / chunkedCertifications.length}%` }}
                    >
                      <div className="certifications-grid">
                        {chunk.map((cert) => (
                          <article key={cert.title} className="project-card">
                            <span className="project-tag">{cert.tag}</span>
                            <h3 className="project-title">{cert.title}</h3>
                            <p className="project-desc">{cert.description}</p>
                            <div className="project-tech" aria-label="Technologies used">
                              {cert.tech.map((t) => (
                                <span key={t} className="tech-chip">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Controls */}
              {chunkedCertifications.length > 1 && (
                <div className="carousel-controls">
                  <button
                    onClick={() => setCertPage((p) => Math.max(0, p - 1))}
                    disabled={certPage === 0}
                    className="carousel-control-btn"
                    aria-label="Previous Page"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <div className="carousel-dots">
                    {chunkedCertifications.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCertPage(idx)}
                        className={`carousel-dot ${certPage === idx ? "active" : ""}`}
                        aria-label={`Go to page ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCertPage((p) => Math.min(chunkedCertifications.length - 1, p + 1))}
                    disabled={certPage === chunkedCertifications.length - 1}
                    className="carousel-control-btn"
                    aria-label="Next Page"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
