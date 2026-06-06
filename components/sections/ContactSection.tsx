"use client";

import { useState } from "react";

const socialLinks = [
  {
    label: "Email",
    value: "xxchristianjarold@gmail.com",
    href: "mailto:xxchristianjarold@gmail.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Dloraj",
    href: "https://github.com/Dloraj",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/christian-jarold-david",
    href: "https://linkedin.com/in/christian-jarold-david-41473b382/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    value: "facebook.com/christian.david",
    href: "https://facebook.com/christian.david.7393/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="snap-section" aria-label="Contact">
      <div className="section-inner">
        <p className="section-label">Let&apos;s talk</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider" aria-hidden="true" />

        <div className="contact-grid">
          {/* Info */}
          <div>
            <p className="contact-info-text">
              I&apos;m always open to new opportunities, collaborations, and
              interesting conversations. Whether you have a project in mind
              or just want to say hi — my inbox is open.
            </p>
            <div className="contact-links" aria-label="Contact links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="contact-link"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  id={`contact-${link.label.toLowerCase()}`}
                >
                  {link.icon}
                  <span>{link.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div
                style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"260px", gap:"14px", textAlign:"center" }}
                role="status"
                aria-live="polite"
              >
                <div style={{ width:"52px", height:"52px", borderRadius:"50%", background:"rgba(212,168,83,0.12)", border:"1px solid rgba(212,168,83,0.4)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p style={{ fontSize:"17px", fontWeight:600, color:"#fff" }}>Message Sent!</p>
                <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.45)" }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input id="contact-name" type="text" className="form-input" placeholder="Your name" required
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input id="contact-email" type="email" className="form-input" placeholder="your@email.com" required
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea id="contact-message" className="form-textarea" placeholder="Tell me about your project..." required
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="btn-primary" id="contact-submit-btn">
                  Send Message
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
