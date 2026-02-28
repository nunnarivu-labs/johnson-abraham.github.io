export function getExperience(): number {
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

interface NavLink {
  href: string;
  label: string;
}

export const PROJECTS_HREF = '#projects';

export const navLinks: NavLink[] = [
  { href: PROJECTS_HREF, label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];
