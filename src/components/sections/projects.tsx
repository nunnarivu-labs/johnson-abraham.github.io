import ishtarLogo from '../../assets/ishtar-logo.png';
import slateLogo from '../../assets/slate-logo.png';
import dailyLedgerLogo from '../../assets/the-daily-ledger-logo.png';
import { Github } from '../../icons/github.tsx';

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
}: Project) => (
  <div className="project-card animate-on-scroll">
    <div className="p-8 grow">
      <div className="flex items-center gap-4 mb-4">
        <img src={logo} alt={logoAlt} className="h-12 w-12 rounded-md" />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-slate-400 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="bg-slate-800 p-6 flex items-center justify-center">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-button"
      >
        View on GitHub <Github classes="h-4 w-4" />
      </a>
    </div>
  </div>
);

export const Projects = () => (
  <section
    id="projects"
    className="py-20 md:py-32 bg-slate-950 section-pattern"
  >
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Featured Projects
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          A selection of my personal projects that showcase my skills in
          building full-stack applications from concept to deployment.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);
