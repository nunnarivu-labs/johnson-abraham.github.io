import { navLinks } from '../utils.ts';

interface MobileMenuProps {
  open: boolean;
  activeSection: string;
  onClose: () => void;
}

export function MobileMenu({ open, activeSection, onClose }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden fixed inset-0 top-20 z-40 bg-[#070912]/95 backdrop-blur-xl transition-all duration-300 ${
        open
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="flex h-full flex-col items-center justify-center space-y-5 px-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`w-full max-w-xs rounded-xl border px-6 py-4 text-center text-xl font-semibold transition-colors ${
              activeSection === link.href.slice(1)
                ? 'border-white bg-white text-[#070912]'
                : 'border-white/10 bg-white/[0.04] text-white hover:border-white/30'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
