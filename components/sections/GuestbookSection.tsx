"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface GuestEntry {
  id: number;
  name: string;
  message: string;
  date: string;
}

/* ── Floating Particles Canvas (ambient background for the signature wall) ── */
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

    // Seed particles
    const count = 35;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.35 + 0.05,
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

      // Draw faint connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 168, 83, ${0.06 * (1 - dist / 100)})`;
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

/* ── Main Component ── */
export default function GuestbookSection() {
  const [entries, setEntries] = useState<GuestEntry[]>([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [newEntryId, setNewEntryId] = useState<number | null>(null);

  // Load saved entries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("guestbook_entries");
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse guestbook entries:", e);
      }
    }
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    const newEntry: GuestEntry = {
      id: Date.now(),
      name: form.name.trim(),
      message: form.message.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("guestbook_entries", JSON.stringify(updated));
    setNewEntryId(newEntry.id);
    setForm({ name: "", message: "" });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setNewEntryId(null);
    }, 3000);
  }, [form, entries]);

  return (
    <section id="guestbook" className="snap-section" aria-label="Guestbook">
      <div
        className="section-inner"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "calc(100vh - 120px)",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <div>
          <p className="section-label">Leave a note</p>
          <h2 className="section-title">Guestbook</h2>
          <div className="section-divider" aria-hidden="true" />

          <div className="guestbook-container">
            {/* Sign form */}
            <form
              onSubmit={handleSubmit}
              id="guestbook-form"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "4px",
                  lineHeight: "1.6",
                }}
              >
                Say hello, share feedback, or just drop your name.  <br />I read every
                entry!
              </p>
              <div className="form-group">
                <label htmlFor="guest-name" className="form-label">
                  Your Name
                </label>
                <input
                  id="guest-name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="guest-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="guest-message"
                  className="form-textarea"
                  style={{ minHeight: "90px" }}
                  placeholder="Say something nice..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                id="guestbook-submit-btn"
              >
                {submitted ? "✓ Added!" : "Sign Guestbook"}
              </button>
            </form>

            {/* Signature Wall */}
            <div className="signature-wall" aria-live="polite">
              <ParticlesCanvas />

              {entries.length === 0 ? (
                /* Empty state */
                <div className="signature-wall-empty">
                  <div className="signature-wall-empty-icon" aria-hidden="true">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <p className="signature-wall-empty-title">
                    Be the first to leave your mark
                  </p>
                  <p className="signature-wall-empty-subtitle">
                    Your signature will appear here
                  </p>
                </div>
              ) : (
                /* Entries grid */
                <div className="signature-wall-grid">
                  {entries.map((entry, idx) => (
                    <div
                      key={entry.id}
                      className={`signature-card${entry.id === newEntryId ? " signature-card-new" : ""}`}
                      style={{ animationDelay: `${idx * 0.06}s` }}
                    >
                      <p className="signature-card-message">
                        &ldquo;{entry.message}&rdquo;
                      </p>
                      <div className="signature-card-footer">
                        <span className="signature-card-name">
                          {entry.name}
                        </span>
                        <span className="signature-card-date">
                          {entry.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="global-footer">
          <p className="footer-text">
            © 2026 Christian Jarold David. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
