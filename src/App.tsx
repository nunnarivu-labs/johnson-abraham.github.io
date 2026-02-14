import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';

import ishtarLogo from './assets/ishtar-logo.png';
import slateLogo from './assets/slate-logo.png';
import dailyLedgerLogo from './assets/the-daily-ledger-logo.png';

import { Github } from './icons/github.tsx';
import { Experience } from './components/sections/experience/experience.tsx';
import { navLinks } from './utils.ts';
import { Header } from './components/sections/header.tsx';
import { About } from './components/sections/about.tsx';
import { ContactFooter } from './components/sections/contact-footer.tsx';
import { Skills } from './components/sections/skills.tsx';

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
        <Header />
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
                <div className="p-8 grow">
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
                <div className="p-8 grow">
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
                <div className="p-8 grow">
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
        <About />
        <Skills />
        <Experience />
      </main>
      <ContactFooter />
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
