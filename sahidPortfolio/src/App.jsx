import { useState, useEffect } from "react";
import sahidImg from "./assets/sahid.png";
import "./App.css";

const NAV = [
  { id: "home", label: "home" },
  { id: "works", label: "works" },
  { id: "skills", label: "skills" },
  { id: "about", label: "about-me" },
  { id: "contacts", label: "contacts" },
];

const PROJECTS = [
  {
    name: "RGA Nexus",
    tag: "Client: Reinsurance Group of America (RGA)",
    desc: "Enterprise reinsurance platform built with modern React — scalable reusable UI components, complex RESTful API integration, and optimized state management.",
    tech: ["React", "REST", "AWS Lambda", "MongoDB", "PostgreSQL"],
  },
  {
    name: "Blaze",
    tag: "AI Code Writing Assistance",
    desc: "AI-powered tool that generates components from natural-language prompts using Figma. Automated boilerplate creation to boost developer productivity and speed up delivery.",
    tech: ["AI", "React", "Figma", "Automation"],
  },
];

const SKILLS = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "HTML5", "CSS3", "Java", "OOP"],
  },
  {
    title: "Frameworks",
    items: ["React", "React Router", "Hooks", "Suspense", "Error Boundaries"],
  },
  {
    title: "AI Tools",
    items: [
      "Prompt Engineering",
      "Claude",
      "ChatGPT",
      "Copilot",
      "Copilot CLI",
    ],
  },
  {
    title: "Dev Tools",
    items: ["Git & GitHub", "Postman", "Swagger", "VS Code"],
  },
  { title: "Methodologies", items: ["Agile (Scrum)", "TDD"] },
  {
    title: "Core",
    items: [
      "State Management",
      "API Integration",
      "UI Debugging",
      "Performance",
      "Responsive Design",
    ],
  },
];

const ACHIEVEMENTS = [
  "STAR Award",
  "WOW Team Excellence Award",
  "1st Place – Internal Hackathon",
];

const SOFT_SKILLS = [
  "Analytical",
  "Adaptable",
  "Collaborative",
  "Problem-Solving",
  "Communication",
];
const LANGUAGES = ["English", "Bengali", "Hindi"];

function SectionHeading({ id, title }) {
  return (
    <h2 className="section-heading" id={id}>
      <span className="hash">#</span>
      {title}
      <span className="heading-line" />
    </h2>
  );
}

function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
        >
          <span className="brand-mark" />
          Sahid
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {NAV.map((n) => (
            <button
              key={n.id}
              type="button"
              className={active === n.id ? "nav-link active" : "nav-link"}
              onClick={() => go(n.id)}
            >
              <span className="hash">#</span>
              {n.label}
            </button>
          ))}
          <button type="button" className="theme-btn" onClick={toggleTheme}>
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>

        <button
          type="button"
          className="burger"
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          ☰
        </button>
      </header>

      <main className="container">
        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-text">
            <h1 className="hero-title">
              Md Abdus Sahid is a{" "}
              <span className="accent">React Developer</span>
            </h1>
            <p className="hero-desc">
              He crafts scalable, responsive, and user-centric web applications
              with modern React — specialized in UI optimization, API
              integration, and Agile development.
            </p>
            <div className="hero-actions">
              <button
                type="button"
                className="btn"
                onClick={() => go("contacts")}
              >
                Contact me <span className="accent">!</span>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait">
              <img
                className="portrait-img"
                src={sahidImg}
                alt="Md Abdus Sahid"
              />
              <span className="dots dots-tl" />
              <span className="dots dots-br" />
            </div>
            <div className="status-box">
              <span className="status-dot" />
              Currently working on{" "}
              <span className="status-strong">RGA Nexus</span>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="quote-block">
          <div className="quote-mark">“</div>
          <blockquote>
            Code is like humor. When you have to explain it, it's bad.
          </blockquote>
          <div className="quote-author">
            <span />5 Years of Experience
          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <SectionHeading id="works" title="projects" />
          <div className="projects-grid">
            {PROJECTS.map((proj) => (
              <article className="project-card" key={proj.name}>
                <div className="project-thumb">
                  <span className="project-thumb-name">{proj.name}</span>
                </div>
                <div className="project-tech">{proj.tech.join("  ")}</div>
                <div className="project-body">
                  <h3>{proj.name}</h3>
                  <p className="project-tag">{proj.tag}</p>
                  <p className="project-desc">{proj.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <SectionHeading id="skills" title="skills" />
          <div className="skills-layout">
            <div className="skills-deco">
              <span className="deco-square" />
              <span className="deco-dots" />
              <span className="deco-square small" />
            </div>
            <div className="skills-grid">
              {SKILLS.map((group) => (
                <div className="skill-box" key={group.title}>
                  <div className="skill-box-title">{group.title}</div>
                  <div className="skill-box-body">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section">
          <SectionHeading id="about" title="about-me" />
          <div className="about-layout">
            <div className="about-text">
              <p>
                Hello, I'm Md Abdus Sahid — a React Developer with 5 years of
                hands-on experience building scalable, responsive, and
                user-centric web applications.
              </p>
              <p>
                I specialize in modern React (Hooks, Functional Components,
                State Management) with strong expertise in UI optimization, API
                integration, and Agile development. At Capgemini India I work
                for Reinsurance Group of America (RGA) on the RGA Nexus
                platform.
              </p>
              <p>
                B.Tech in Computer Science &amp; Engineering (2020). I speak{" "}
                {LANGUAGES.join(", ")}.
              </p>

              <div className="about-sub">
                <h4>{"// achievements"}</h4>
                <ul className="about-list">
                  {ACHIEVEMENTS.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>

              <div className="about-sub">
                <h4>{"// soft-skills"}</h4>
                <div className="tag-row">
                  {SOFT_SKILLS.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-visual">
              <div className="portrait alt">
                <img
                  className="portrait-img"
                  src={sahidImg}
                  alt="Md Abdus Sahid"
                />
                <span className="dots dots-br" />
              </div>
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section className="section">
          <SectionHeading id="contacts" title="contacts" />
          <div className="contacts-layout">
            <p className="contacts-lead">
              I'm interested in new opportunities and collaborations. If you
              have a request or a question, don't hesitate to reach out.
            </p>
            <div className="contact-card">
              <div className="contact-card-title">Message me here</div>
              <a href="mailto:officialsahid1997@gmail.com">
                <span className="c-icon">✉</span> officialsahid1997@gmail.com
              </a>
              <a href="tel:+917585044149">
                <span className="c-icon">☎</span> +91 75850 44149
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="c-icon">in</span> LinkedIn
              </a>
              <span className="contact-loc">
                <span className="c-icon">◍</span> Kolkata, India
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              className="brand"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                go("home");
              }}
            >
              <span className="brand-mark" />
              Md Abdus Sahid
            </a>
            <p>React Developer · 5 Years Experience</p>
            <a
              className="footer-mail"
              href="mailto:officialsahid1997@gmail.com"
            >
              officialsahid1997@gmail.com
            </a>
          </div>
          <div className="footer-links">
            <h4>Media</h4>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:officialsahid1997@gmail.com">Email</a>
            <a href="tel:+917585044149">Phone</a>
          </div>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Md Abdus Sahid — Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
