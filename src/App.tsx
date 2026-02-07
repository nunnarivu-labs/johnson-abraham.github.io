import { useState, useEffect } from 'react';
import {
  Mail,
  ArrowRight,
  Code,
  Database,
  Layers,
  Menu,
  X,
  ChevronUp,
} from 'lucide-react';

import ishtarLogo from './assets/ishtar-logo.png';
import slateLogo from './assets/slate-logo.png';
import dailyLedgerLogo from './assets/the-daily-ledger-logo.png';
import profilePhoto from './assets/profile-photo.jpg';
import heroBackground from './assets/hero-background.jpg';

import { LinkedIn } from './icons/linkedIn.tsx';
import { Github } from './icons/github.tsx';

function getExperience() {
  const start = new Date(2017, 5, 1);
  const end = new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return parseFloat(`${years}.${months}`);
}

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = document.querySelectorAll('section[id],footer[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => animateObserver.observe(el));

    return () => animateObserver.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <a href="#" className="text-xl font-bold text-white">
            Johnson Abraham
          </a>
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-sky-400'
                    : 'text-slate-300 hover:text-sky-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 z-40 bg-slate-900/98 backdrop-blur-lg transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={`text-2xl font-semibold transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-sky-400'
                  : 'text-white hover:text-sky-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <main>
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src={heroBackground}
              alt="A laptop in a dark room with a colorful keyboard."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          <div className="relative z-10 container mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight hero-fade-in">
              I build secure, scalable, and user-centric web applications.
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-300 hero-fade-in hero-delay-1">
              {`With ${getExperience()} years of experience as a Full-Stack Engineer, I specialize
              in the Java/Spring and TypeScript/React ecosystems. I architect
              and deploy scalable, cloud-native applications, from robust
              serverless backends to dynamic, responsive frontends.`}
            </p>
            <div className="mt-10 hero-fade-in hero-delay-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-sky-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-sky-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 group"
              >
                View My Work{' '}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="py-20 md:py-32 bg-slate-950 section-pattern"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Featured Projects
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                A selection of my personal projects that showcase my skills in
                building full-stack applications from concept to deployment.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 justify-center">
              <div className="project-card animate-on-scroll">
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={ishtarLogo}
                      alt="Ishtar Logo"
                      className="h-12 w-12 rounded-md"
                    />
                    <h3 className="text-2xl font-bold text-white">
                      Ishtar: AI Chat Application
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-6">
                    A full-stack, multimodal AI chat application that analyzes
                    images, queries PDFs, and generates images using Google
                    Gemini, featuring a secure serverless backend with a
                    production-grade rate-limiting system.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">
                      Tanstack (Router, Query, Virtual)
                    </span>
                    <span className="tech-tag">Google Gemini</span>
                    <span className="tech-tag">MUI</span>
                    <span className="tech-tag">CI/CD</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-6 flex items-center justify-center">
                  <a
                    href="https://github.com/nunnarivu-labs/ishtar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View on GitHub <Github classes="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="project-card animate-on-scroll">
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={slateLogo}
                      alt="Slate Logo"
                      className="h-12 w-12 rounded-md"
                    />
                    <h3 className="text-2xl font-bold text-white">
                      Slate: Note-Taking App
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-6">
                    A modern note-taking app inspired by Google Keep, built with
                    a real-time database for seamless syncing, rich Markdown
                    support, and a flexible tag-based organization system.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Convex</span>
                    <span className="tech-tag">Clerk</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">Google Gemini</span>
                    <span className="tech-tag">Netlify</span>
                    <span className="tech-tag">Tanstack (Start, Router)</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-6 flex items-center justify-center">
                  <a
                    href="https://github.com/nunnarivu-labs/slate-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View on GitHub <Github classes="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="project-card animate-on-scroll">
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={dailyLedgerLogo}
                      alt="The Daily Ledger Logo"
                      className="h-12 w-12 rounded-md"
                    />
                    <h3 className="text-2xl font-bold text-white">
                      The Daily Ledger: High-Performance Analytics Dashboard
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-6">
                    A high-performance, full-stack business intelligence
                    dashboard for an e-commerce store, built to handle massive
                    datasets with a real-time interface and advanced data
                    visualization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Shadcn/ui</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">Drizzle ORM</span>
                    <span className="tech-tag">Netlify</span>
                    <span className="tech-tag">
                      Tanstack (Query, Table, Virtual)
                    </span>
                  </div>
                </div>
                <div className="bg-slate-800 p-6 flex items-center justify-center">
                  <a
                    href="https://github.com/nunnarivu-labs/the-daily-ledger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View on GitHub <Github classes="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1 animate-on-scroll">
                <img
                  src={profilePhoto}
                  alt="Johnson Abraham"
                  className="rounded-lg shadow-2xl w-full ring-4 ring-sky-500/20 hover:ring-sky-500/40 transition-all duration-300"
                />
              </div>
              <div className="md:col-span-2 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  About Me
                </h2>
                <p className="mb-4 text-slate-400">
                  I build software that is fast, scalable, and enjoyable to use.
                  As a Staff Software Engineer, my career has explored two
                  areas: the reliable, enterprise-level backends of the Java
                  ecosystem and the dynamic, user-focused frontends of modern
                  TypeScript and React.
                </p>
                <p className="mb-4 text-slate-400">
                  What truly excites me is solving puzzles with a big impact. I
                  enjoy the challenge of taking a complex, slow, or inefficient
                  system and, through architectural vision and practical coding,
                  turning it into something simple, fast, and reliable. My
                  proudest moments are when a solution not only resolves a
                  customer’s problem but also makes life easier for my entire
                  engineering team.
                </p>
                <p className="text-slate-400">
                  I believe that the best leaders are also mentors. A
                  significant part of my role is to share my knowledge, foster a
                  culture of technical excellence, and introduce innovations
                  that enable the team to grow.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="py-20 md:py-32 bg-slate-950 section-pattern"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                My Technical Skills
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                I have a broad range of experience across the stack. Here are
                some of the key technologies I work with.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="skill-card-enhanced animate-on-scroll">
                <div className="skill-icon-wrapper">
                  <Layers className="h-8 w-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Frontend Development
                </h3>
                <p className="text-slate-400 mt-2">
                  JavaScript (TypeScript), React, Next.js, Redux, Recoil, Jotai,
                  TanStack Libraries, React Router, MUI, Tailwind CSS, Shadcn,
                  Jest, Testing Library
                </p>
              </div>
              <div className="skill-card-enhanced animate-on-scroll">
                <div className="skill-icon-wrapper">
                  <Code className="h-8 w-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Backend Development
                </h3>
                <p className="text-slate-400 mt-2">
                  Java, Spring, Spring Boot, Node.js, Serverless Architecture,
                  API Development, Drizzle ORM
                </p>
              </div>
              <div className="skill-card-enhanced animate-on-scroll">
                <div className="skill-icon-wrapper">
                  <Database className="h-8 w-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Cloud, Databases & Tools
                </h3>
                <p className="text-slate-400 mt-2">
                  GCP, Firebase, Google Cloud Functions, GitHub Actions (CI/CD),
                  Docker, PostgreSQL, Convex, Git, Clerk, Netlify
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="py-20 md:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-slate-900 via-slate-900 to-slate-800/50"></div>
          <div className="container mx-auto px-6 max-w-3xl relative z-10">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Professional Experience
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                I've had the privilege of contributing to great teams and
                building enterprise-level software.
              </p>
            </div>
            <div className="space-y-12">
              <div className="experience-item-enhanced animate-on-scroll">
                <div className="experience-dot-enhanced"></div>
                <div className="experience-content">
                  <p className="text-sm text-sky-400">AUGUST 2021 - PRESENT</p>
                  <h3 className="text-xl font-bold text-white">
                    Staff Software Engineer
                  </h3>
                  <p className="text-slate-400 mb-4">
                    Anthology, Chennai, India
                  </p>
                  <p className="text-slate-400 mb-4">
                    As a Staff Engineer and Tech Lead, my role was to tackle the
                    company's most complex technical challenges, lead project
                    delivery, and elevate the engineering standards of the
                    India-based teams. I focused on architecting for
                    performance, driving technical strategy, and mentoring the
                    next generation of engineers.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                    <li>
                      <strong>
                        Architected a novel sparse-loading data strategy
                      </strong>{' '}
                      that solved a critical customer issue by cutting load time
                      from over 10 minutes to under 2 seconds, a pattern that
                      was later adopted across the application.
                    </li>
                    <li>
                      <strong>Led the strategic adoption of AI</strong>,
                      designing and prototyping an automated translation
                      pipeline to replace a costly third-party vendor and
                      significantly reduce engineering overhead.
                    </li>
                    <li>
                      <strong>
                        Served as a key technical advisor and top code reviewer
                      </strong>
                      &nbsp;for the India engineering organization, mentoring
                      teams on performance, UX, and architectural best
                      practices.
                    </li>
                    <li>
                      <strong>
                        Consistently shipped high-priority features on schedule
                      </strong>
                      , taking full ownership of the project lifecycle from
                      technical planning and estimation to final delivery.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="experience-item-enhanced animate-on-scroll">
                <div className="experience-dot-enhanced"></div>
                <div className="experience-content">
                  <p className="text-sm text-sky-400">JUNE 2017 - JULY 2021</p>
                  <h3 className="text-xl font-bold text-white">
                    Software Engineer
                  </h3>
                  <p className="text-slate-400 mb-4">
                    FULL Creative, Chennai, India
                  </p>
                  <p className="text-slate-400 mb-4">
                    Joining as a Software Engineer, I quickly grew to take on
                    significant architectural challenges. My focus was on
                    modernizing the backend, improving team processes, and
                    driving the adoption of new technologies to increase
                    efficiency and code quality. This role is where I built the
                    foundation for my career as a technical leader.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                    <li>
                      <strong>
                        Reduced time-to-market for new brands by over 95%
                      </strong>{' '}
                      (from 2 weeks to less than a day) by re-architecting the
                      backend with a scalable, configuration-driven design.
                    </li>
                    <li>
                      <strong>
                        Built a zero-boilerplate caching layer with Spring AOP
                      </strong>
                      &nbsp;that automated caching for all GET APIs, saving
                      countless hours of redundant work for the development
                      team.
                    </li>
                    <li>
                      <strong>
                        Led the company-wide push for better unit testing
                      </strong>
                      , establishing new standards and running workshops that
                      created a culture of quality and significantly reduced
                      bugs in production.
                    </li>
                    <li>
                      <strong>
                        Pioneered the adoption of modern Java 8 features
                      </strong>{' '}
                      and championed the team's transition to React, quickly
                      mastering the new stack to deliver a production-ready
                      feature in under two weeks.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        id="contact"
        className="bg-slate-950 py-20 text-center section-pattern"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Thanks for visiting my portfolio.
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              I'm always happy to connect and talk about technology.
            </p>
            <div className="mt-8">
              <a
                href="mailto:johnsonabraham@nunnarivulabs.in"
                className="inline-flex items-center gap-2 bg-sky-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-sky-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
              >
                <Mail className="h-5 w-5" /> Send me an email
              </a>
            </div>
            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="https://github.com/johnson-abraham"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-enhanced"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/johnson-abraham/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-enhanced"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
          <div className="mt-16 text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Johnson Abraham. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
}
