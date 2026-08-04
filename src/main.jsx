import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const makeIcon = (symbol) => function Icon({ size = 18 }) {
  return <span className="svg-icon" style={{ fontSize: size }} aria-hidden="true">{symbol}</span>;
};

const ArrowUpRight = makeIcon('↗');
const Github = makeIcon('GH');
const Linkedin = makeIcon('in');
const Mail = makeIcon('✉');
const Phone = makeIcon('☎');
const MapPin = makeIcon('⌖');
const GraduationCap = makeIcon('◈');
const Code2 = makeIcon('</>');
const Server = makeIcon('▤');
const Database = makeIcon('◉');
const ShieldCheck = makeIcon('✓');
const GitBranch = makeIcon('⑂');
const Layers3 = makeIcon('◇');
const Menu = makeIcon('☰');
const X = makeIcon('×');
const Sparkles = makeIcon('✦');
const ExternalLink = makeIcon('↗');
const Terminal = makeIcon('>_');
const Braces = makeIcon('{}');
const Cpu = makeIcon('⌘');
const ChevronDown = makeIcon('⌄');
import './styles.css';

const projects = [
  {
    number: '01',
    title: 'JobBoard REST API',
    type: 'Newest Project',
    status: 'Completed',
    description: 'A structured backend for job listings and recruitment workflows, built with Spring Boot and RESTful API design principles.',
    tech: ['Java', 'Spring Boot', 'REST API', 'JPA'],
    link: 'https://github.com/KeertanGir/SpringBoot-Learning/tree/main/Projects%2FJobBoard%2Fsrc%2Fmain%2Fjava%2Forg%2Flearnspringframework'
  },
  {
    number: '02',
    title: 'Student & Certificate Management System',
    type: 'Management System',
    status: 'Completed',
    description: 'Backend system for managing students and certificate records with clean entity design and database operations.',
    tech: ['Spring Boot', 'MySQL', 'Spring Data JPA'],
    link: 'https://github.com/KeertanGir/SpringBoot-Learning/tree/main/Projects%2FStudent%20and%20Certificate%20Management%20System%2Fsrc'
  },
  {
    number: '03',
    title: 'Spring Boot Learning Repository',
    type: 'Backend Engineering',
    status: 'Active',
    description: 'A progressive Spring Boot codebase covering fundamentals, REST APIs, persistence and application security.',
    tech: ['Spring Security', 'REST', 'MySQL', 'Git'],
    link: 'https://github.com/KeertanGir/SpringBoot-Learning'
  },
  {
    number: '04',
    title: 'React Learning',
    type: 'Frontend Development',
    status: 'In Progress',
    description: 'A growing collection of React exercises and interface projects focused on components, state and modern frontend patterns.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/KeertanGir/React-Full'
  },
  {
    number: '05',
    title: 'Coffee Shop Backend',
    type: 'Spring Boot API',
    status: 'In Progress',
    description: 'A backend application for coffee shop operations, currently under active development with modular API architecture.',
    tech: ['Java', 'Spring Boot', 'SQL'],
    link: 'https://github.com/KeertanGir/coffee-shop--backend'
  }
];

const skills = [
  { name: 'Java', icon: Cpu },
  { name: 'Spring Boot', icon: Server },
  { name: 'Spring Data JPA', icon: Database },
  { name: 'Spring Security', icon: ShieldCheck },
  { name: 'REST APIs', icon: Braces },
  { name: 'MySQL / SQL', icon: Database },
  { name: 'React', icon: Layers3 },
  { name: 'JavaScript', icon: Code2 },
  { name: 'HTML / CSS', icon: Terminal },
  { name: 'Git / GitHub', icon: GitBranch }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = [
    ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']
  ];

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise" />

      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Home">
          <span className="brand-mark">KG</span>
          <span className="brand-text">KEERTAN.GIR</span>
        </a>
        <nav className="desktop-nav">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="nav-cta desktop-cta" href="mailto:gkeertangir@gmail.com">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu glass">
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="mailto:gkeertangir@gmail.com">Let’s talk</a>
        </div>
      )}

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> Available for junior developer opportunities</div>
            <h1>
              I build reliable<br />
              <span>backend systems</span><br />
              and modern interfaces.
            </h1>
            <p className="hero-lead">
              I’m <strong>Keertan Gir</strong>, a Spring Boot + React full-stack developer from Karachi, focused on REST APIs, secure backend architecture and clean web experiences.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">View projects <ArrowUpRight size={18} /></a>
              <a className="secondary-btn" href="https://github.com/KeertanGir" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            </div>
            <div className="social-row">
              <a href="mailto:gkeertangir@gmail.com"><Mail size={17} /> gkeertangir@gmail.com</a>
              <a href="tel:+923302137338"><Phone size={17} /> +92 330 2137338</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="portrait-card glass">
              <div className="portrait-frame">
                <img src="/keertan.jpg" alt="Keertan Gir" />
                <div className="portrait-overlay" />
              </div>
              <div className="portrait-meta">
                <div><span className="status-dot" /> Full-Stack Developer</div>
                <span>Karachi, Pakistan</span>
              </div>
            </div>
            <div className="floating-card code-card glass">
              <span className="tiny-label">CURRENT STACK</span>
              <code>Spring Boot + React</code>
            </div>
            <div className="floating-card degree-card glass">
              <GraduationCap size={20} />
              <div><strong>BS Computer Science</strong><span>7th Semester · CGPA 3.10</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><ChevronDown size={20} /> scroll</a>
        </section>

        <section id="about" className="section-wrap content-section">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>Developer with a backend-first mindset.</h2>
          </div>
          <div className="about-grid">
            <div className="glass about-card">
              <p>
                I design and build Java-based backend applications using Spring Boot, Spring Data JPA and MySQL. My work focuses on well-structured REST APIs, database integration, application security and maintainable project architecture.
              </p>
              <p>
                On the frontend, I use React, JavaScript, HTML and CSS to create responsive interfaces that connect cleanly with backend services.
              </p>
            </div>
            <div className="stats-grid">
              <div className="glass stat"><strong>05</strong><span>Public projects</span></div>
              <div className="glass stat"><strong>7th</strong><span>Semester</span></div>
              <div className="glass stat"><strong>3.10</strong><span>CGPA / 4.00</span></div>
              <div className="glass stat"><strong>Karachi</strong><span>Based in Pakistan</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap content-section">
          <div className="section-heading split-heading">
            <div>
              <span className="section-index">02 / TOOLKIT</span>
              <h2>Technologies I work with.</h2>
            </div>
            <p>Focused on Java backend engineering with a growing modern frontend skill set.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ name, icon: Icon }) => (
              <div className="skill glass" key={name}>
                <Icon size={21} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-wrap content-section">
          <div className="section-heading split-heading">
            <div>
              <span className="section-index">03 / SELECTED WORK</span>
              <h2>Projects built for learning and real-world practice.</h2>
            </div>
            <a className="text-link" href="https://github.com/KeertanGir" target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={17} /></a>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project glass" key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-topline">
                    <span>{project.type}</span>
                    <span className={`project-status ${project.status === 'In Progress' ? 'progress' : ''}`}>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <ExternalLink size={21} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section education-section">
          <div className="section-heading">
            <span className="section-index">04 / EDUCATION</span>
            <h2>Academic foundation.</h2>
          </div>
          <div className="education-card glass">
            <div className="education-icon"><GraduationCap size={28} /></div>
            <div>
              <span className="tiny-label">BACHELOR’S DEGREE</span>
              <h3>BS Computer Science</h3>
              <p>Sindh Madressatul Islam University · Karachi</p>
            </div>
            <div className="education-meta">
              <strong>Final-Year Student</strong>
              <span>7th Semester · CGPA 3.10 / 4.00</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section">
          <div className="contact-card glass">
            <span className="section-index">05 / CONTACT</span>
            <h2>Let’s build something useful.</h2>
            <p>I am open to internships, junior full-stack roles, backend opportunities and collaborative software projects.</p>
            <div className="contact-actions">
              <a className="primary-btn" href="mailto:gkeertangir@gmail.com"><Mail size={18} /> Email me</a>
              <a className="secondary-btn" href="https://www.linkedin.com/in/keertan-gir-5902a9244" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            </div>
            <div className="contact-details">
              <span><MapPin size={16} /> Karachi, Pakistan</span>
              <span><Phone size={16} /> +92 330 2137338</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-wrap footer">
        <span>© {new Date().getFullYear()} Keertan Gir</span>
        <span>Designed & built with React</span>
        <div><a href="https://github.com/KeertanGir" target="_blank" rel="noreferrer"><Github size={18} /></a><a href="https://www.linkedin.com/in/keertan-gir-5902a9244" target="_blank" rel="noreferrer"><Linkedin size={18} /></a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
