"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  links: readonly ProjectLink[];
};

type ProjectGroup = {
  organization: string;
  logo: string;
  projects: readonly Project[];
};

type Skill = {
  name: string;
  details: string;
};

type Experience = {
  organization: string;
  logo: string;
  role: string;
  location: string;
  employmentType?: string;
  period: string;
};

type Certification = {
  name: string;
  proofUrl: string;
};

const projectGroups: readonly ProjectGroup[] = [
  {
    organization: "GMA New Media, Inc.",
    logo: "/projects/favicons/gma.ico",
    projects: [
      {
        title: "GMA News Online",
        image: "/projects/gma-news.jpg",
        imageAlt: "GMA News Online preview",
        description:
          "Contributed to the development and enhancement of GMA News Online, including reusable website widgets and newsletter subscription components that support digital content delivery and audience engagement.",
        links: [{ label: "Visit project", href: "https://www.gmanetwork.com/news/" }],
      },
      {
        title: "BARMM 2026 Election Results",
        image: "/projects/gma-news.jpg",
        imageAlt: "GMA News Online election coverage preview",
        description:
          "Contributed to GMA News Online's Eleksyon 2026 BARMM election results platform, with dedicated embedded and TV-oriented views for regional election information and larger-screen presentation.",
        links: [
          {
            label: "Embedded view",
            href: "https://www.gmanetwork.com/news/eleksyon/2026/barmm/?mode=embedded",
          },
          {
            label: "TV view",
            href: "https://www.gmanetwork.com/news/eleksyon/2026/barmm/?mode=tv",
          },
        ],
      },
      {
        title: "Eleksyon 2025 Results",
        image: "/projects/eleksyon-2025.png",
        imageAlt: "Eleksyon 2025 results preview",
        description:
          "Contributed to the Eleksyon 2025 results platform, which organizes partial and unofficial Philippine election results for audiences following electoral developments.",
        links: [
          {
            label: "Visit project",
            href: "https://www.gmanetwork.com/news/eleksyon/2025/results/",
          },
        ],
      },
      {
        title: "GMA News Online Lotto Results",
        image: "/projects/lotto.png",
        imageAlt: "GMA News Online lotto results preview",
        description:
          "Contributed to the lotto results platform, providing a dedicated and accessible destination for viewing Philippine lottery results within the GMA News Online ecosystem.",
        links: [
          { label: "Visit project", href: "https://www.gmanetwork.com/news/lotto/" },
        ],
      },
      {
        title: "Eleksyon 2022",
        image: "/projects/eleksyon-2022.png",
        imageAlt: "Eleksyon 2022 results preview",
        description:
          "Contributed to GMA News Online's Eleksyon 2022 digital coverage platform, supporting the presentation of Philippine election results and related electoral information.",
        links: [
          {
            label: "Visit project",
            href: "https://www.gmanetwork.com/news/eleksyon2022/",
          },
        ],
      },
      {
        title: "Balitambayan",
        image: "/projects/balitambayan.jpg",
        imageAlt: "Balitambayan preview",
        description:
          "Contributed to the development and maintenance of GMA News Online's Filipino-language news destination, helping make news and current affairs accessible to Filipino-speaking audiences.",
        links: [
          {
            label: "Visit project",
            href: "https://www.gmanetwork.com/news/balitambayan/",
          },
        ],
      },
    ],
  },
  {
    organization: "Psychological Association of the Philippines",
    logo: "/projects/favicons/pap-logo-64.webp",
    projects: [
      {
        title: "Association Website",
        image: "/projects/pap-logo.png",
        imageAlt: "Psychological Association of the Philippines logo",
        description:
          "Maintained and enhanced the PAP website, supporting accurate content, announcements, programs, and professional activities for members and visitors.",
        links: [{ label: "Visit project", href: "https://pap.ph/" }],
      },
      {
        title: "Member Registration Portal",
        image: "/projects/pap-logo.png",
        imageAlt: "Psychological Association of the Philippines logo",
        description:
          "Developed an online member registration portal that streamlines the collection and submission of membership information.",
        links: [{ label: "Visit project", href: "https://portal.pap.ph/" }],
      },
      {
        title: "PAP Journal Website",
        image: "/projects/pap-logo.png",
        imageAlt: "Psychological Association of the Philippines logo",
        description:
          "Maintained the journal website and updated its content to support the online presentation of academic publications and journal information.",
        links: [{ label: "Visit project", href: "https://papja.pap.ph/" }],
      },
      {
        title: "PAP Convention Website",
        image: "/projects/pap-logo.png",
        imageAlt: "Psychological Association of the Philippines logo",
        description:
          "Maintained the convention website and updated event content, announcements, and relevant details for participants.",
        links: [{ label: "Visit project", href: "https://papcon.pap.ph/" }],
      },
    ],
  },
  {
    organization: "JECAMS Inc.",
    logo: "/projects/favicons/jecams.png",
    projects: [
      {
        title: "Customized ERP System",
        image: "/projects/jecams-furniture.webp",
        imageAlt: "JECAMS office furniture preview",
        description:
          "Developed a customized Enterprise Resource Planning system tailored to JECAMS business requirements, centralizing workflows and operational information.",
        links: [{ label: "Visit system", href: "https://jamsys-erp3.info/login" }],
      },
      {
        title: "JECAMS Corporate Website",
        image: "/projects/jecams-furniture.webp",
        imageAlt: "JECAMS office furniture preview",
        description:
          "Developed and revamped the corporate website to strengthen the company's digital presence and improve how customers discover its office furniture products and services.",
        links: [{ label: "Visit project", href: "https://www.jecams.com.ph/" }],
      },
      {
        title: "FurnitureHai Microsite",
        image: "/projects/jecams-furniture.webp",
        imageAlt: "JECAMS office furniture preview",
        description:
          "Developed a focused microsite that organizes product and business information for visitors exploring office furniture offerings.",
        links: [{ label: "Visit project", href: "https://www.furniturehai.com/" }],
      },
      {
        title: "Construction Supplies POS System",
        image: "/projects/jecams-furniture.webp",
        imageAlt: "JECAMS office furniture preview",
        description:
          "Developed a Point-of-Sale system for a construction supplies business to support sales transactions and day-to-day retail operations.",
        links: [
          { label: "Visit system", href: "https://constructionsuppliesph.com/login" },
        ],
      },
    ],
  },
];

const skills: readonly Skill[] = [
  {
    name: "Full-Stack Web Development",
    details: "PHP, TypeScript, CodeIgniter, Next.js",
  },
  {
    name: "Database Design & Architecture",
    details: "Database structures, schema design, database architecture",
  },
  { name: "Frontend Development", details: "SCSS, SASS" },
  { name: "Data Analysis", details: "Data analysis and interpretation" },
  { name: "AI & Automation", details: "AI automation, workflow automation" },
  {
    name: "Media & Digital Technology",
    details: "Media technology, digital media platforms",
  },
  {
    name: "Agile Project Management",
    details: "Scrum, Agile development methodologies",
  },
  {
    name: "Knowledge Management",
    details: "Technical documentation, knowledge organization, knowledge sharing",
  },
  {
    name: "Software Engineering",
    details: "Application development, troubleshooting, system optimization",
  },
];

const experiences: readonly Experience[] = [
  {
    organization: "GMA New Media, Inc.",
    logo: "/projects/favicons/gma.ico",
    role: "Senior Analyst Developer",
    location: "Quezon City, National Capital Region, Philippines",
    period: "August 2021 — Present",
  },
  {
    organization: "Psychological Association of the Philippines",
    logo: "/projects/favicons/pap-logo-64.webp",
    role: "Senior Web Developer / Consultant",
    location: "Quezon City, National Capital Region, Philippines",
    employmentType: "Part-time",
    period: "August 2021 — Present",
  },
  {
    organization: "JECAMS Inc.",
    logo: "/projects/favicons/jecams.png",
    role: "Senior Web Developer / Consultant",
    location: "Quezon City, National Capital Region, Philippines",
    employmentType: "Part-time",
    period: "June 2014 — Present",
  },
];

const certifications: readonly Certification[] = [
  {
    name: "MongoDB Aggregation Fundamentals",
    proofUrl: "https://learn.mongodb.com/courses/fundamentals-of-data-transformation",
  },
  {
    name: "From Relational Model (SQL) to MongoDB's Document Model",
    proofUrl: "https://learn.mongodb.com/courses/relational-to-document-model",
  },
  {
    name: "MongoDB Schema Design Patterns and Anti-patterns Skill Badge",
    proofUrl: "https://learn.mongodb.com/courses/schema-design-patterns-and-antipatterns",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16">
      <path d="M3.5 12.5 12 4m-6.5 0H12v6.5" />
    </svg>
  );
}

export default function Home() {
  const [activeProjectGroup, setActiveProjectGroup] = useState(0);

  const selectProjectGroup = (nextIndex: number) => {
    setActiveProjectGroup((nextIndex + projectGroups.length) % projectGroups.length);
  };

  return (
    <main>
      <header className="hero" aria-labelledby="page-title">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="wordmark" href="#page-title" aria-label="Marlon Samot, home">
            <Image
              className="wordmark-image"
              src="/marlon-samot-logo.png"
              alt=""
              width={512}
              height={512}
              loading="eager"
            />
          </a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Portfolio · Metro Manila, Philippines</p>
            <h1 id="page-title">Marlon Samot</h1>
            <p className="role">Senior Web Developer</p>
          </div>
          <div className="hero-summary">
            <p>
              I build practical web platforms and business systems across
              frontend, backend, data, and digital media environments.
            </p>
            <p className="availability">
              Available for part-time, freelance, and project-based systems work.
            </p>
            <a className="text-link" href="#projects">
              Explore projects <span aria-hidden="true">↓</span>
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
              IT-trained Senior Web Developer combining strong academic foundations
              with hands-on experience building reliable web platforms and business
              systems across frontend, backend, data, and digital media.
            </p>
          </div>
        </section>

        <section
          className="section-grid"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <div className="section-label">
            <span>02</span>
            <h2 id="projects-heading">Selected projects</h2>
          </div>
          <div className="project-groups section-body">
            <div className="project-tabs" role="tablist" aria-label="Project organizations">
              {projectGroups.map((group, index) => (
                <button
                  className="project-tab"
                  key={group.organization}
                  id={`project-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeProjectGroup === index}
                  aria-controls={`project-panel-${index}`}
                  tabIndex={activeProjectGroup === index ? 0 : -1}
                  onClick={() => setActiveProjectGroup(index)}
                  onKeyDown={(event) => {
                    const nextIndex =
                      event.key === "ArrowRight"
                        ? index + 1
                        : event.key === "ArrowLeft"
                          ? index - 1
                          : event.key === "Home"
                            ? 0
                            : event.key === "End"
                              ? projectGroups.length - 1
                              : null;

                    if (nextIndex !== null) {
                      event.preventDefault();
                      selectProjectGroup(nextIndex);
                      requestAnimationFrame(() =>
                        document.getElementById(
                          `project-tab-${(nextIndex + projectGroups.length) % projectGroups.length}`,
                        )?.focus(),
                      );
                    }
                  }}
                >
                  <span className="project-tab-label">
                    <Image
                      src={group.logo}
                      alt=""
                      width={40}
                      height={40}
                      className="project-tab-logo"
                    />
                    <span>{group.organization}</span>
                  </span>
                </button>
              ))}
            </div>
            {projectGroups.map((group, index) => (
              <section
                className="project-group"
                key={group.organization}
                id={`project-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`project-tab-${index}`}
                hidden={activeProjectGroup !== index}
              >
                <div className="project-group-header">
                  <h3>{group.organization}</h3>
                  <p>{group.projects.length} projects</p>
                </div>
                <div className="project-grid">
                  {group.projects.map((project, projectIndex) => (
                    <article className="project-card" key={project.title}>
                      <div className="project-image-wrap">
                        <Image
                          className="project-image"
                          src={project.image}
                          alt={project.imageAlt}
                          width={1200}
                          height={675}
                          sizes="(max-width: 960px) 100vw, 40vw"
                        />
                      </div>
                      <p className="project-number" aria-hidden="true">
                        {String(projectIndex + 1).padStart(2, "0")}
                      </p>
                      <h4>{project.title}</h4>
                      <p className="project-description">{project.description}</p>
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            href={link.href}
                            key={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${link.label}: ${project.title} (opens in a new tab)`}
                          >
                            {link.label} <ArrowIcon />
                          </a>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section
          className="section-grid"
          id="skills"
          aria-labelledby="skills-heading"
        >
          <div className="section-label">
            <span>03</span>
            <h2 id="skills-heading">Skills</h2>
          </div>
          <ul className="skills-list section-body" aria-label="Professional skills">
            {skills.map((skill) => (
              <li key={skill.name}>
                <h3>{skill.name}</h3>
                <p>{skill.details}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="section-grid"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="section-label">
            <span>04</span>
            <h2 id="experience-heading">Experience</h2>
          </div>
          <div className="experience-list section-body">
            {experiences.map((experience) => (
              <article className="experience-item" key={experience.organization}>
                <p className="item-kicker">{experience.period}</p>
                <div className="experience-details">
                  <div className="experience-heading">
                    <Image
                      className="experience-logo"
                      src={experience.logo}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <h3>{experience.organization}</h3>
                  </div>
                  <p className="item-role">{experience.role}</p>
                  <p className="item-meta">
                    {experience.employmentType
                      ? `${experience.employmentType} · ${experience.location}`
                      : experience.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-grid"
          id="credentials"
          aria-labelledby="credentials-heading"
        >
          <div className="section-label">
            <span>05</span>
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
                  <li key={certification.name}>
                    <span>{certification.name}</span>
                    <a
                      className="certification-link"
                      href={certification.proofUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Official course page <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </div>

      <footer id="contact" aria-labelledby="contact-heading">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <p className="eyebrow">Open to conversation</p>
              <h2 id="contact-heading">Connect with me.</h2>
              <p className="footer-copy">
                Looking for a developer for a part-time, freelance, or
                project-based system? Let&apos;s talk.
              </p>
            </div>
            <div className="footer-aside">
              <Image
                className="footer-logo"
                src="/marlon-samot-logo.png"
                alt="Marlon Samot logo"
                width={512}
                height={512}
              />
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
            </div>
          </div>
          <p className="copyright">© 2026 Marlon Samot</p>
        </div>
      </footer>
    </main>
  );
}
