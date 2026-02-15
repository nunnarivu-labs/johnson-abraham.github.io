import { navLinks } from '../utils.ts';

interface MobileMenuProps {
  open: boolean;
  activeSection: string;
  onClose: () => void;
}

export function MobileMenu({ open, activeSection, onClose }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden fixed inset-0 top-20 z-40 bg-slate-900/98 backdrop-blur-lg transition-all duration-300 ${
        open
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="flex flex-col items-center justify-center h-full space-y-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
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
  );
}
