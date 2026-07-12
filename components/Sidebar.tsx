"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    id: "experiences",
    label: "Experiences",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: "toolbox",
    label: "Toolbox",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Watch which snap section is visible
    const sections = document.querySelectorAll(".snap-section[id]");
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 1024;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: isMobile ? null : document.querySelector(".page-wrapper"),
        threshold: isMobile ? 0.1 : 0.2, /* Highly robust section active highlight trigger */
      }
    );
    sections.forEach((s) => observer.observe(s));

    // Handle initial theme settings on mount
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }

    return () => observer.disconnect();
  }, []);

  // Lock background scroll when mobile sidebar menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  };

  function scrollTo(id: string) {
    setActiveId(id); // Highlight active item instantly on click!
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      {/* Desktop navigation side bar bar */}
      <nav className="sidebar" aria-label="Main navigation">
        {/* Logo — minimalist circle inside ring */}
        <button
          onClick={() => scrollTo("home")}
          className="sidebar-logo"
          aria-label="Go to top"
        >
          <span className="sidebar-logo-dot" />
        </button>

        {/* Nav items */}
        <div className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className={`sidebar-nav-item ${activeId === item.id ? "active" : ""}`}
              aria-label={item.label}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Bottom icon — Light/Dark mode toggle */}
        <div className="sidebar-bottom">
          <button
            onClick={toggleTheme}
            className="sidebar-bottom-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              // Sun icon (in dark mode, click to go light)
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              // Moon icon (in light mode, click to go dark)
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Modern, floating glassmorphic hamburger menu button on mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mobile-floating-menu-btn"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span className={`hamburger-line line-1 ${isMenuOpen ? "open" : ""}`} />
        <span className={`hamburger-line line-2 ${isMenuOpen ? "open" : ""}`} />
      </button>

      {/* Hamburger full-screen Overlay Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-drawer-top">
              <nav className="mobile-menu-nav">
                {navItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollTo(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`mobile-nav-item ${activeId === item.id ? "active" : ""}`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <span className="mobile-nav-num">0{idx + 1}.</span>
                    <span className="mobile-nav-label">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="mobile-menu-bottom">
              <div className="mobile-theme-toggle-row">
                <span className="mobile-theme-label">Appearance</span>
                <div className="mobile-theme-switch-pill">
                  <button
                    onClick={() => theme !== "light" && toggleTheme()}
                    className={`mobile-theme-switch-btn ${theme === "light" ? "active" : ""}`}
                    aria-label="Switch to Light mode"
                    title="Light Mode"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.82" x2="5.64" y2="18.4" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  </button>
                  <button
                    onClick={() => theme !== "dark" && toggleTheme()}
                    className={`mobile-theme-switch-btn ${theme === "dark" ? "active" : ""}`}
                    aria-label="Switch to Dark mode"
                    title="Dark Mode"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
