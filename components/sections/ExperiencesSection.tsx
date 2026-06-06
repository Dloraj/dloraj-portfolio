"use client";

const experiences = [
  {
    duration: "2026",
    role: "ICT Infrastructure & Networking Intern",
    company: "Department of Science & Technology (DOST) — Region III",
    description:
      "Led one of the groups of the ICT Infrastructure & Networking Team. Created and deployed a building-wide Captive Portal via secure access point routing. Managed maintenance on 500+ ICT assets (PCs, servers, laptops), debugged the ICT Inventory System, and developed automation solutions for various organizational systems to improve efficiency and support daily IT operations.",
  },
  {
    duration: "2025",
    role: "Startup Co-Founder",
    company: "Philippine Startup Challenge X (DICT) — Region III",
    description:
      "Drove technical ideation, UX prototyping in Figma, and investor panel pitching of an aquaculture technology startup. Placed in the TOP 15 of 74 national entries, collaborating on hardware-software integrations to maximize real-world usability and community farming impact.",
  },
  {
    duration: "2024-2025",
    role: "Lead Document Specialist / IoT Engineer / DevOps",
    company: "Fishtastic Capstone — OLFU",
    description:
      "Engineered a solar-powered IoT aquaculture system monitoring 5 water parameters, reducing manual checks by 80% via 24/7 telemetry tracking. Developed an AI-analytics web & mobile application that cut event response times by 70%, achieving an ISO 25010 'Excellent' software quality rating of 96.18%.",
  },

];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="snap-section" aria-label="Experiences">
      <div className="section-inner">
        <p className="section-label">Professional Journey</p>
        <h2 className="section-title">Experiences</h2>
        <div className="section-divider" aria-hidden="true" />

        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item animate-fadeUp" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-date">{exp.duration}</div>
              <h3 className="timeline-title">{exp.role}</h3>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
