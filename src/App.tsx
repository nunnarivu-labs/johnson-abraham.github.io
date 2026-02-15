import { useState } from 'react';

import { useScrollState } from './hooks/use-scroll-state.ts';
import { useActiveSection } from './hooks/use-active-section.ts';
import { useScrollAnimation } from './hooks/use-scroll-animation.ts';

import { Header } from './components/header.tsx';
import { MobileMenu } from './components/mobile-menu.tsx';
import { Intro } from './components/sections/intro.tsx';
import { Projects } from './components/sections/projects.tsx';
import { About } from './components/sections/about.tsx';
import { Skills } from './components/sections/skills.tsx';
import { Experience } from './components/sections/experience.tsx';
import { ContactFooter } from './components/contact-footer.tsx';
import { ScrollToTop } from './components/scroll-to-top.tsx';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrolled, showScrollTop } = useScrollState();

  const activeSection = useActiveSection();

  useScrollAnimation();

  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <Header
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        activeSection={activeSection}
        onMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileMenu
        open={mobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setMobileMenuOpen(false)}
      />
      <main>
        <Intro />
        <Projects />
        <About />
        <Skills />
        <Experience />
      </main>
      <ContactFooter />
      <ScrollToTop visible={showScrollTop} />
    </div>
  );
}
