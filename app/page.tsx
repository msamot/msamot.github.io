const capabilities = [
  "Senior web development",
  "JavaScript & TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "MongoDB",
  "SQL & document data modeling",
];

const certifications = [
  "MongoDB Aggregation Fundamentals",
  "From Relational Model (SQL) to MongoDB's Document Model",
  "MongoDB Schema Design Patterns and Anti-patterns Skill Badge",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16">
      <path d="M3.5 12.5 12 4m-6.5 0H12v6.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="hero" aria-labelledby="page-title">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="wordmark" href="#page-title" aria-label="Marlon Samot, home">
            MS
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#credentials">Credentials</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Metro Manila, Philippines</p>
            <h1 id="page-title">Marlon Samot</h1>
            <p className="role">Senior Web Developer</p>
          </div>
          <div className="hero-summary">
            <p>
              I build modern web experiences with a practical approach to
              frontend, backend, and data-focused engineering.
            </p>
            <a className="text-link" href="#contact">
              Let&apos;s connect <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </header>

      <div className="content">
        <section className="section-grid" aria-labelledby="profile-heading">
          <div className="section-label">
            <span>01</span>
            <h2 id="profile-heading">Profile</h2>
          </div>
          <div className="section-body lead-copy">
            <p>
              A Senior Web Developer focused on creating clear, reliable, and
              maintainable web solutions. My work spans the layers of a modern
              application—from interface implementation to data modeling.
            </p>
          </div>
        </section>

        <section className="section-grid" aria-labelledby="skills-heading">
          <div className="section-label">
            <span>02</span>
            <h2 id="skills-heading">Capabilities</h2>
          </div>
          <ul className="skills-list section-body" aria-label="Professional capabilities">
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </section>

        <section
          className="section-grid"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="section-label">
            <span>03</span>
            <h2 id="experience-heading">Experience</h2>
          </div>
          <article className="section-body experience-card">
            <div>
              <p className="item-kicker">Current organization</p>
              <h3>GMA New Media, Inc.</h3>
            </div>
            <p className="item-role">Senior Web Developer</p>
          </article>
        </section>

        <section
          className="section-grid"
          id="credentials"
          aria-labelledby="credentials-heading"
        >
          <div className="section-label">
            <span>04</span>
            <h2 id="credentials-heading">Credentials</h2>
          </div>
          <div className="section-body credentials-grid">
            <article>
              <p className="item-kicker">Education</p>
              <h3>Bestlink College of the Philippines</h3>
              <p className="muted">2011–2014</p>
            </article>
            <article>
              <p className="item-kicker">Recent certifications</p>
              <ul className="certification-list">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </div>

      <footer id="contact" aria-labelledby="contact-heading">
        <div className="footer-inner">
          <p className="eyebrow">Open to conversation</p>
          <h2 id="contact-heading">Connect with me.</h2>
          <p className="footer-copy">
            Explore my professional background or follow what I&apos;m building.
          </p>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/marlon-samot/"
              target="_blank"
              rel="noreferrer"
              aria-label="Marlon Samot on LinkedIn (opens in a new tab)"
            >
              LinkedIn <ArrowIcon />
            </a>
            <a
              href="https://github.com/msamot"
              target="_blank"
              rel="noreferrer"
              aria-label="Marlon Samot on GitHub (opens in a new tab)"
            >
              GitHub <ArrowIcon />
            </a>
          </div>
          <p className="copyright">© 2026 Marlon Samot</p>
        </div>
      </footer>
    </main>
  );
}
