import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Header } from '../header.tsx';
import { MobileMenu } from '../mobile-menu.tsx';
import { ScrollToTop } from '../scroll-to-top.tsx';
import { ContactFooter } from '../contact-footer.tsx';

describe('Header', () => {
  it('highlights the active section and toggles the mobile menu', () => {
    const onMobileMenuOpen = vi.fn();

    render(
      <Header
        scrolled={true}
        mobileMenuOpen={false}
        activeSection="projects"
        onMobileMenuOpen={onMobileMenuOpen}
      />,
    );

    expect(screen.getByRole('banner')).toHaveClass('bg-slate-900/95');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveClass(
      'text-sky-400',
    );

    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu' }));

    expect(onMobileMenuOpen).toHaveBeenCalledWith(true);
  });
});

describe('MobileMenu', () => {
  it('shows its active state and closes when a link is clicked', () => {
    const onClose = vi.fn();

    render(
      <MobileMenu open={true} activeSection="skills" onClose={onClose} />,
    );

    expect(screen.getByRole('navigation').parentElement).toHaveClass(
      'opacity-100',
    );
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveClass(
      'text-sky-400',
    );

    fireEvent.click(screen.getByRole('link', { name: 'About' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('ScrollToTop', () => {
  it('calls smooth scroll when clicked', () => {
    render(<ScrollToTop visible={true} />);

    const button = screen.getByRole('button', { name: 'Scroll to top' });
    fireEvent.click(button);

    expect(button).toHaveClass('visible');
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});

describe('ContactFooter', () => {
  it('renders contact links and the current year', () => {
    render(<ContactFooter />);

    expect(
      screen.getByRole('link', { name: /send me an email/i }),
    ).toHaveAttribute('href', 'mailto:johnsonabraham@nunnarivulabs.in');
    const links = screen.getAllByRole('link');

    expect(links).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          href: 'https://github.com/johnson-abraham',
        }),
        expect.objectContaining({
          href: 'https://www.linkedin.com/in/johnson-abraham/',
        }),
      ]),
    );
    expect(
      screen.getByText(new RegExp(`©\\s*${new Date().getFullYear()}`)),
    ).toBeInTheDocument();
  });
});
