import { Code, Database, Layers, type LucideIcon } from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: Layers,
    title: 'Frontend Development',
    description:
      'JavaScript (TypeScript), React, Next.js, Redux, Recoil, Jotai, TanStack Libraries, React Router, MUI, Tailwind CSS, Shadcn, Jest, Testing Library',
  },
  {
    icon: Code,
    title: 'Backend Development',
    description:
      'Java, Spring, Spring Boot, Node.js, Serverless Architecture, API Development, Drizzle ORM',
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
  <section
    id="skills"
    className="py-20 md:py-32 bg-slate-950 section-pattern"
  >
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          My Technical Skills
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          I have a broad range of experience across the stack. Here are
          some of the key technologies I work with.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  </section>
);
