import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

import { Experience } from './components/sections/experience.tsx';
import { navLinks } from './utils.ts';
import { Intro } from './components/sections/intro.tsx';
import { About } from './components/sections/about.tsx';
import { ContactFooter } from './components/contact-footer.tsx';
import { Skills } from './components/sections/skills.tsx';
import { Projects } from './components/sections/projects.tsx';
import { Header } from './components/header.tsx';

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
      <Header
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        activeSection={activeSection}
        onMobileMenuOpen={setMobileMenuOpen}
      />
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
        <Intro />
        <Projects />
        <About />
        <Skills />
        <Experience />
      </main>
      <ContactFooter />
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
