import { Code, Database, Layers, type LucideIcon } from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: Layers,
    title: 'Frontend Engineering',
    description:
      'JavaScript, TypeScript, React, Next.js, TanStack Libraries, React Router, Redux, Recoil, Jotai, MUI, Tailwind CSS, Shadcn, Jest, Testing Library',
  },
  {
    icon: Code,
    title: 'API & Backend Depth',
    description:
      'Node.js, Serverless Architecture, API Development, Drizzle ORM, Java, Spring, Spring Boot',
  },
  {
    icon: Database,
    title: 'Cloud, Databases & Tools',
    description:
      'GCP, Firebase, Google Cloud Functions, GitHub Actions (CI/CD), Docker, PostgreSQL, Convex, Git, Clerk, Netlify',
  },
];

const SkillCard = ({ icon: Icon, title, description }: Skill) => (
  <div className="skill-card-enhanced animate-on-scroll">
    <div className="skill-icon-wrapper">
      <Icon className="h-8 w-8 text-sky-400" />
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-slate-400 mt-2">{description}</p>
  </div>
);

export const Skills = () => (
  <section id="skills" className="section-shell bg-[#070912] py-20 md:py-32">
    <div className="container mx-auto px-6">
      <div className="mb-16 max-w-3xl animate-on-scroll">
        <p className="section-kicker">Capabilities</p>
        <h2 className="section-title">My Technical Skills</h2>
        <p className="section-copy">
          My work is strongest on the JavaScript, TypeScript, and React side,
          with enough backend and cloud depth to ship complete product
          experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  </section>
);
