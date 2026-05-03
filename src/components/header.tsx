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
      scrolled
        ? 'bg-[#070912]/85 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10'
        : 'bg-transparent'
    }`}
  >
    <div className="container mx-auto flex h-20 items-center justify-between px-6">
      <a href="#" className="group flex items-center gap-3 text-white">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-black text-[#070912] shadow-lg shadow-cyan-500/10 transition-transform group-hover:-rotate-3">
          JA
        </span>
        <span className="text-lg font-bold tracking-tight">
          Johnson Abraham
        </span>
      </a>
      <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm shadow-2xl shadow-black/20 backdrop-blur md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 transition-colors ${
              activeSection === link.href.slice(1)
                ? 'bg-white text-[#070912]'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="rounded-md border border-white/10 bg-white/[0.04] p-2 text-white md:hidden"
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
