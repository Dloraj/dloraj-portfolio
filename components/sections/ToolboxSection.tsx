"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ── Skill Data ── */
interface Skill {
  name: string;
  icon: string; /* emoji or unicode icon */
  level: number; /* 1-5 proficiency */
}

interface SkillCategory {
  id: string;
  label: string;
  color: string; /* accent hue for the category */
  icon: React.ReactNode;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    id: "web",
    label: "Web Development",
    color: "210, 80%, 62%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: "React / Next.js", icon: "⚛️", level: 5 },
      { name: "TypeScript", icon: "🔷", level: 5 },
      { name: "JavaScript", icon: "🟨", level: 5 },
      { name: "HTML / CSS", icon: "🎨", level: 5 },
      { name: "Tailwind CSS", icon: "🌊", level: 4 },
      { name: "Node.js", icon: "🟩", level: 4 },
      { name: "PHP / Laravel", icon: "🐘", level: 4 },
      { name: "REST APIs", icon: "🔗", level: 5 },
      { name: "GraphQL", icon: "◆", level: 3 },
    ],
  },
  {
    id: "data",
    label: "Data & Backend",
    color: "150, 60%, 50%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: [
      { name: "MySQL", icon: "🐬", level: 5 },
      { name: "PostgreSQL", icon: "🐘", level: 4 },
      { name: "Firebase", icon: "🔥", level: 4 },
      { name: "MongoDB", icon: "🍃", level: 3 },
      { name: "Python", icon: "🐍", level: 4 },
      { name: "C / C++", icon: "⚙️", level: 3 },
    ],
  },
  {
    id: "iot",
    label: "IoT & Hardware",
    color: "35, 85%, 58%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    skills: [
      { name: "Arduino", icon: "📟", level: 5 },
      { name: "ESP32 / ESP8266", icon: "📡", level: 5 },
      { name: "Raspberry Pi", icon: "🍓", level: 4 },
      { name: "Sensor Integration", icon: "🌡️", level: 5 },
      { name: "MQTT Protocol", icon: "📨", level: 4 },
    ],
  },
  {
    id: "devtools",
    label: "DevOps & Tools",
    color: "280, 65%, 60%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      { name: "Git & GitHub", icon: "🔀", level: 5 },
      { name: "Docker", icon: "🐳", level: 3 },
      { name: "Figma", icon: "🎯", level: 4 },
      { name: "Linux / CLI", icon: "🐧", level: 4 },
      { name: "AI Workflows", icon: "🤖", level: 4 },
      { name: "Automation", icon: "⚡", level: 4 },
    ],
  },
  {
    id: "network",
    label: "Networking & Security",
    color: "0, 70%, 60%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="7" />
        <path d="M12 18h.01" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M12 2v4" />
      </svg>
    ),
    skills: [
      { name: "Cisco Networking", icon: "🌐", level: 4 },
      { name: "Network Config", icon: "🔧", level: 4 },
      { name: "Cybersecurity", icon: "🛡️", level: 3 },
      { name: "Packet Tracer", icon: "📊", level: 4 },
    ],
  },
];

/* ── Floating Particles Canvas ── */
function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number;
      vx: number; vy: number;
      r: number; opacity: number;
    }> = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    resize();

    const count = 30;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.8 + 0.5,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 83, ${p.opacity})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 168, 83, ${0.05 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="signature-wall-canvas"
      aria-hidden="true"
    />
  );
}

/* ── Proficiency Dots ── */
function ProficiencyDots({ level, color }: { level: number; color: string }) {
  return (
    <div className="toolbox-proficiency" aria-label={`Proficiency: ${level} out of 5`}>
      {[1, 2, 3, 4, 5].map((dot) => (
        <span
          key={dot}
          className={`toolbox-dot ${dot <= level ? "active" : ""}`}
          style={dot <= level ? { background: `hsl(${color})` } : undefined}
        />
      ))}
    </div>
  );
}

/* ── Main Component ── */
export default function ToolboxSection() {
  const [activeCategory, setActiveCategory] = useState("web");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for entrance animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const activeData = categories.find((c) => c.id === activeCategory)!;
  const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section id="toolbox" className="snap-section" aria-label="Toolbox" ref={sectionRef}>
      <ParticlesCanvas />
      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className={`toolbox-layout ${isVisible ? "toolbox-visible" : ""}`}>
          
          {/* Left Column — Title, selectors, skill cards, and legend */}
          <div className="toolbox-left-col">
            {/* Header */}
            <div className="toolbox-header">
              <p className="section-label">What I work with</p>
              <h2 className="section-title">Toolbox</h2>
              <div className="section-divider" aria-hidden="true" />
              <p className="toolbox-subtitle">
                {totalSkills} technologies across {categories.length} domains — from frontend frameworks to embedded IoT systems.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="toolbox-tabs" role="tablist" aria-label="Skill categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`toolbox-tab ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                  style={
                    activeCategory === cat.id
                      ? { borderColor: `hsl(${cat.color})`, color: `hsl(${cat.color})` }
                      : undefined
                  }
                >
                  <span className="toolbox-tab-icon">{cat.icon}</span>
                  <span className="toolbox-tab-label">{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="toolbox-grid" role="tabpanel" aria-label={activeData.label} key={activeCategory}>
              {activeData.skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="toolbox-skill-card"
                  style={{
                    animationDelay: `${i * 0.04}s`,
                    borderColor: `hsla(${activeData.color}, 0.08)`,
                  }}
                >
                  <div className="toolbox-skill-top">
                    <span className="toolbox-skill-icon">{skill.icon}</span>
                    <span className="toolbox-skill-name">{skill.name}</span>
                  </div>
                  <ProficiencyDots level={skill.level} color={activeData.color} />
                </div>
              ))}
            </div>

            {/* Category Summary Bar */}
            <div className="toolbox-summary">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`toolbox-summary-item ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span
                    className="toolbox-summary-dot"
                    style={{ background: `hsl(${cat.color})` }}
                  />
                  <span className="toolbox-summary-count">{cat.skills.length}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Stats, exploring area, and philosophy quote */}
          <div className="toolbox-right-col">
            {/* Stats Row */}
            <div className="toolbox-stats-row">
              <div className="toolbox-stat-card">
                <span className="toolbox-stat-number">{totalSkills}</span>
                <span className="toolbox-stat-label">Technologies</span>
              </div>
              <div className="toolbox-stat-card">
                <span className="toolbox-stat-number">{categories.length}</span>
                <span className="toolbox-stat-label">Domains</span>
              </div>
              <div className="toolbox-stat-card">
                <span className="toolbox-stat-number">3+</span>
                <span className="toolbox-stat-label">Years Building</span>
              </div>
              <div className="toolbox-stat-card">
                <span className="toolbox-stat-number">∞</span>
                <span className="toolbox-stat-label">Always Learning</span>
              </div>
            </div>

            {/* Currently Exploring */}
            <div className="toolbox-exploring">
              <div className="toolbox-exploring-header">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-gold)" }}>
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
                <span>Currently Exploring</span>
              </div>
              <div className="toolbox-exploring-pills">
                {[
                  { name: "Rust", icon: "🦀" },
                  { name: "Three.js", icon: "🎭" },
                  { name: "Web3 / Blockchain", icon: "⛓️" },
                  { name: "Machine Learning", icon: "🧠" },
                  { name: "Kubernetes", icon: "☸️" },
                  { name: "Go", icon: "🔵" },
                ].map((tech) => (
                  <div key={tech.name} className="toolbox-explore-pill">
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Quote Card */}
            <div className="toolbox-quote-card">
              <div className="toolbox-quote-glow" aria-hidden="true" />
              <svg className="toolbox-quote-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="toolbox-quote-text">
                The best tool isn&apos;t the newest one — it&apos;s the one you&apos;ve mastered enough to solve real problems with.
              </p>
              <span className="toolbox-quote-author">— My development philosophy</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
