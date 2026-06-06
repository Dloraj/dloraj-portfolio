export default function HeroSection() {
  return (
    <section
      id="home"
      className="snap-section hero-section"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="hero-bg" aria-hidden="true" />

      {/* Gold spinning circle */}
      <div className="hero-circle" aria-hidden="true" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-name-block">
          <p className="hero-iam animate-fadeUp delay-1">I AM</p>

          <h1 className="hero-name animate-fadeUp delay-2">
            Christian Jarold
          </h1>

          <div className="hero-role-tags animate-fadeUp delay-3">
            <span className="hero-role-tag">Full-Stack Developer</span>
            <span className="hero-role-tag">Software Engineer</span>
            <span className="hero-role-tag">AI Engineer</span>
          </div>
        </div>

        <p className="hero-description animate-fadeUp delay-4">
          Christian Jarold David builds high-performance web and mobile applications,
          intelligent AI-driven solutions, and secure networking architectures.
        </p>

        <nav className="hero-links animate-fadeUp delay-5" aria-label="Sections">
          <a href="#experiences" className="hero-link">Experiences</a>
          <a href="#projects" className="hero-link">Projects & Certs</a>
          <a href="#about" className="hero-link">About Me</a>
        </nav>

        <div className="hero-socials animate-fadeUp delay-6" aria-label="Social links">
          <a href="https://facebook.com/christian.david.7393/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://github.com/Dloraj" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/christian-jarold-david-41473b382/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="mailto:xxchristianjarold@gmail.com" className="hero-social-icon" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 7l10 7 10-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
