import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import App from '../App.tsx';

const scrollState = {
  scrolled: false,
  showScrollTop: false,
};

const activeSectionState = {
  value: 'projects',
};

const useScrollAnimationMock = vi.fn();

vi.mock('../hooks/use-scroll-state.ts', () => ({
  useScrollState: () => scrollState,
}));

vi.mock('../hooks/use-active-section.ts', () => ({
  useActiveSection: () => activeSectionState.value,
}));

vi.mock('../hooks/use-scroll-animation.ts', () => ({
  useScrollAnimation: () => useScrollAnimationMock(),
}));

vi.mock('../components/header.tsx', () => ({
  Header: ({
    scrolled,
    activeSection,
    onMobileMenuOpen,
  }: {
    scrolled: boolean;
    activeSection: string;
    onMobileMenuOpen: (isOpen: boolean) => void;
  }) => (
    <div
      data-testid="header"
      data-scrolled={String(scrolled)}
      data-active-section={activeSection}
    >
      <button onClick={() => onMobileMenuOpen(true)}>open menu</button>
    </div>
  ),
}));

vi.mock('../components/mobile-menu.tsx', () => ({
  MobileMenu: ({
    open,
    activeSection,
    onClose,
  }: {
    open: boolean;
    activeSection: string;
    onClose: () => void;
  }) => (
    <div
      data-testid="mobile-menu"
      data-open={String(open)}
      data-active-section={activeSection}
    >
      <button onClick={onClose}>close menu</button>
    </div>
  ),
}));

vi.mock('../components/scroll-to-top.tsx', () => ({
  ScrollToTop: ({ visible }: { visible: boolean }) => (
    <div data-testid="scroll-to-top" data-visible={String(visible)} />
  ),
}));

vi.mock('../components/contact-footer.tsx', () => ({
  ContactFooter: () => <div data-testid="contact-footer" />,
}));

vi.mock('../components/sections/intro.tsx', () => ({
  Intro: () => <section>Intro</section>,
}));

vi.mock('../components/sections/projects.tsx', () => ({
  Projects: () => <section>Projects</section>,
}));

vi.mock('../components/sections/about.tsx', () => ({
  About: () => <section>About</section>,
}));

vi.mock('../components/sections/skills.tsx', () => ({
  Skills: () => <section>Skills</section>,
}));

vi.mock('../components/sections/experience.tsx', () => ({
  Experience: () => <section>Experience</section>,
}));

describe('App', () => {
  beforeEach(() => {
    scrollState.scrolled = true;
    scrollState.showScrollTop = true;
    activeSectionState.value = 'skills';
    useScrollAnimationMock.mockClear();
  });

  it('wires hook state into the layout and mobile menu flow', () => {
    render(<App />);

    expect(useScrollAnimationMock).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('header')).toHaveAttribute('data-scrolled', 'true');
    expect(screen.getByTestId('header')).toHaveAttribute(
      'data-active-section',
      'skills',
    );
    expect(screen.getByTestId('scroll-to-top')).toHaveAttribute(
      'data-visible',
      'true',
    );
    expect(screen.getByTestId('mobile-menu')).toHaveAttribute('data-open', 'false');

    fireEvent.click(screen.getByRole('button', { name: 'open menu' }));
    expect(screen.getByTestId('mobile-menu')).toHaveAttribute('data-open', 'true');

    fireEvent.click(screen.getByRole('button', { name: 'close menu' }));
    expect(screen.getByTestId('mobile-menu')).toHaveAttribute('data-open', 'false');
  });
});
