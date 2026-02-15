import { navLinks } from '../utils.ts';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  activeSection: string;
  onMobileMenuOpen: (isOpen: boolean) => void;
}

export const Header = ({
  scrolled,
  mobileMenuOpen,
  activeSection,
  onMobileMenuOpen,
}: HeaderProps) => (
  <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
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
        onClick={() => onMobileMenuOpen(!mobileMenuOpen)}
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
);
