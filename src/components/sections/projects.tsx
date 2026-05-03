import ishtarLogo from '../../assets/ishtar-logo.webp';
import slateLogo from '../../assets/slate-logo.webp';
import dailyLedgerLogo from '../../assets/the-daily-ledger-logo.webp';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  logo: string;
  logoAlt: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    logo: ishtarLogo,
    logoAlt: 'Ishtar Logo',
    title: 'Ishtar: AI Chat Application',
    description:
      'A full-stack, multimodal AI chat application that analyzes images, queries PDFs, and generates images using Google Gemini, featuring a secure serverless backend with a production-grade rate-limiting system.',
    tags: [
      'React',
      'Firebase',
      'Tanstack (Router, Query, Virtual)',
      'Google Gemini',
      'MUI',
      'CI/CD',
    ],
    githubUrl: 'https://github.com/nunnarivu-labs/ishtar',
  },
  {
    logo: slateLogo,
    logoAlt: 'Slate Logo',
    title: 'Slate: Note-Taking App',
    description:
      'A modern note-taking app inspired by Google Keep, built with a real-time database for seamless syncing, rich Markdown support, and a flexible tag-based organization system.',
    tags: [
      'React',
      'Convex',
      'Clerk',
      'Tailwind CSS',
      'Google Gemini',
      'Netlify',
      'Tanstack (Start, Router)',
    ],
    githubUrl: 'https://github.com/nunnarivu-labs/slate-web',
  },
  {
    logo: dailyLedgerLogo,
    logoAlt: 'The Daily Ledger Logo',
    title: 'The Daily Ledger: High-Performance Analytics Dashboard',
    description:
      'A high-performance, full-stack business intelligence dashboard for an e-commerce store, built to handle massive datasets with a real-time interface and advanced data visualization.',
    tags: [
      'Next.js',
      'React',
      'Shadcn/ui',
      'PostgreSQL',
      'Tailwind CSS',
      'Drizzle ORM',
      'Netlify',
      'Tanstack (Query, Table, Virtual)',
    ],
    githubUrl: 'https://github.com/nunnarivu-labs/the-daily-ledger',
  },
];

const ProjectCard = ({
  logo,
  logoAlt,
  title,
  description,
  tags,
  githubUrl,
}: Project) => {
  const [name, subtitle] = title.split(': ');

  return (
    <div className="project-card animate-on-scroll">
      <div className="project-card-shine"></div>
      <div className="grow p-7">
        <div className="mb-6 flex items-start justify-between gap-4">
          <img
            src={logo}
            alt={logoAlt}
            className="h-14 w-14 rounded-xl"
            loading="lazy"
          />
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} on GitHub`}
            className="rounded-md p-2 text-cyan-200/70 transition-colors hover:bg-cyan-200/10 hover:text-cyan-100"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200/80">
          {name}
        </p>
        <h3 className="mb-4 text-2xl font-bold leading-tight text-white">
          {subtitle ?? title}
        </h3>
        <p className="mb-6 text-slate-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => (
  <section id="projects" className="section-shell bg-[#070912] py-20 md:py-32">
    <div className="container mx-auto px-6">
      <div className="mb-16 max-w-3xl animate-on-scroll">
        <p className="section-kicker">Selected builds</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-copy">
          A selection of my personal projects that showcase my skills in
          building full-stack applications from concept to deployment.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);
