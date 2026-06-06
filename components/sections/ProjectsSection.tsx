const projects = [
  {
    tag: "IoT + AI + Web",
    title: "Fishtastic Capstone",
    description:
      "Solar-powered IoT aquaculture system monitoring 5 parameters, reducing manual checks by 80%. Developed AI-analytics web/mobile app improving response by 70% (ISO 25010 Evaluated at 96.18% - Excellent).",
    tech: ["React Native", "Next.js", "AI Analytics", "Node.js", "IoT Sensors", "DevOps"],
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
  return (
    <section id="projects" className="snap-section" aria-label="Projects">
      <div className="section-inner">
        <p className="section-label">What I&apos;ve built</p>
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" aria-hidden="true" />

        <div className="projects-grid" id="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
