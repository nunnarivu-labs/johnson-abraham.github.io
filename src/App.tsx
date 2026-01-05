import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Code,
  Database,
  Layers,
} from "lucide-react";

import ishtarLogo from "./assets/ishtar-logo.png";
import slateLogo from "./assets/slate-logo.png";
import dailyLedgerLogo from "./assets/the-daily-ledger-logo.png";
import profilePhoto from "./assets/profile-photo.jpg";
import heroBackground from "./assets/hero-background.jpg";

function getExperience() {
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

export default function App() {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs ">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <a href="#" className="text-xl font-bold text-white">
            Johnson Abraham
          </a>
          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="#projects"
              className="hover:text-sky-400 transition-colors"
            >
              Projects
            </a>
            <a href="#about" className="hover:text-sky-400 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* --- UPDATED INTRODUCTION --- */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src={heroBackground}
              alt="A laptop in a dark room with a colorful keyboard."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          <div className="relative z-10 container mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              I build secure, scalable, and user-centric web applications.
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
              {`With ${getExperience()} years of experience as a Full-Stack Engineer, I specialize
              in the Java/Spring and TypeScript/React ecosystems. I architect
              and deploy scalable, cloud-native applications, from robust
              serverless backends to dynamic, responsive frontends.`}
            </p>
            <div className="mt-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-sky-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-sky-600 transition-transform hover:scale-105"
              >
                View My Work <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
        <section id="projects" className="py-20 md:py-32 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Featured Projects
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                A selection of my personal projects that showcase my skills in
                building full-stack applications from concept to deployment.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 justify-center">
              <div className="bg-slate-800/50 rounded-lg overflow-hidden flex flex-col group">
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={ishtarLogo}
                      alt="Ishtar Logo"
                      className="h-12 w-12 rounded-md"
                    />
                    <h3 className="text-2xl font-bold text-white">
                      Ishtar: AI Chat Application
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-6">
                    A full-stack, multimodal AI chat application that analyzes
                    images, queries PDFs, and generates images using Google
                    Gemini, featuring a secure serverless backend with a
                    production-grade rate-limiting system.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">
                      Tanstack (Router, Query, Virtual)
                    </span>
                    <span className="tech-tag">Google Gemini</span>
                    <span className="tech-tag">MUI</span>
                    <span className="tech-tag">CI/CD</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-6 flex items-center justify-between">
                  <a
                    href="https://ishtar.nunnarivulabs.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/nunnarivu-labs/ishtar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View on GitHub <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg overflow-hidden flex flex-col group">
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={slateLogo}
                      alt="Slate Logo"
                      className="h-12 w-12 rounded-md"
                    />
                    <h3 className="text-2xl font-bold text-white">
                      Slate: Note-Taking App
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-6">
                    A modern note-taking app inspired by Google Keep, built with
                    a real-time database for seamless syncing, rich Markdown
                    support, and a flexible tag-based organization system.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Convex</span>
                    <span className="tech-tag">Clerk</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">Google Gemini</span>
                    <span className="tech-tag">Netlify</span>
                    <span className="tech-tag">Tanstack (Start, Router)</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-6 flex items-center justify-between">
                  <a
                    href="https://slate.nunnarivulabs.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/nunnarivu-labs/slate-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View on GitHub <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg overflow-hidden flex flex-col group">
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={dailyLedgerLogo}
                      alt="The Daily Ledger Logo"
                      className="h-12 w-12 rounded-md"
                    />
                    <h3 className="text-2xl font-bold text-white">
                      The Daily Ledger: High-Performance Analytics Dashboard
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-6">
                    A high-performance, full-stack business intelligence
                    dashboard for an e-commerce store, built to handle massive
                    datasets with a real-time interface and advanced data
                    visualization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Shadcn/ui</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">Drizzle ORM</span>
                    <span className="tech-tag">Netlify</span>
                    <span className="tech-tag">
                      Tanstack (Query, Table, Virtual)
                    </span>
                  </div>
                </div>
                <div className="bg-slate-800 p-6 flex items-center justify-between">
                  <a
                    href="https://thedailyledger.nunnarivulabs.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/nunnarivu-labs/the-daily-ledger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View on GitHub <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1">
                <img
                  src={profilePhoto}
                  alt="Johnson Abraham"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  About Me
                </h2>
                <p className="mb-4 text-slate-400">
                  I build software that is fast, scalable, and enjoyable to use.
                  As a Staff Software Engineer, my career has explored two
                  areas: the reliable, enterprise-level backends of the Java
                  ecosystem and the dynamic, user-focused frontends of modern
                  TypeScript and React.
                </p>
                <p className="mb-4 text-slate-400">
                  What truly excites me is solving puzzles with a big impact. I
                  enjoy the challenge of taking a complex, slow, or inefficient
                  system and, through architectural vision and practical coding,
                  turning it into something simple, fast, and reliable. My
                  proudest moments are when a solution not only resolves a
                  customer’s problem but also makes life easier for my entire
                  engineering team.
                </p>
                <p className="text-slate-400">
                  I believe that the best leaders are also mentors. A
                  significant part of my role is to share my knowledge, foster a
                  culture of technical excellence, and introduce innovations
                  that enable the team to grow.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-20 md:py-32 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                My Technical Skills
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                I have a broad range of experience across the stack. Here are
                some of the key technologies I work with.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="skill-card">
                <Layers className="h-8 w-8 text-sky-400 mb-4" />
                <h3 className="text-xl font-bold text-white">
                  Frontend Development
                </h3>
                <p className="text-slate-400 mt-2">
                  JavaScript (TypeScript), React, Next.js, Redux, Recoil, Jotai,
                  TanStack Libraries, React Router, MUI, Tailwind CSS, Shadcn,
                  Jest, Testing Library
                </p>
              </div>
              <div className="skill-card">
                <Code className="h-8 w-8 text-sky-400 mb-4" />
                <h3 className="text-xl font-bold text-white">
                  Backend Development
                </h3>
                <p className="text-slate-400 mt-2">
                  Java, Spring, Spring Boot, Node.js, Serverless Architecture,
                  API Development, Drizzle ORM
                </p>
              </div>
              <div className="skill-card">
                <Database className="h-8 w-8 text-sky-400 mb-4" />
                <h3 className="text-xl font-bold text-white">
                  Cloud, Databases & Tools
                </h3>
                <p className="text-slate-400 mt-2">
                  GCP, Firebase, Google Cloud Functions, GitHub Actions (CI/CD),
                  Docker, PostgreSQL, Convex, Git, Clerk, Netlify
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="py-20 md:py-32">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Professional Experience
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                I've had the privilege of contributing to great teams and
                building enterprise-level software.
              </p>
            </div>
            <div className="space-y-12">
              <div className="experience-item">
                <div className="experience-dot"></div>
                <div className="experience-content">
                  <p className="text-sm text-sky-400">AUGUST 2021 - PRESENT</p>
                  <h3 className="text-xl font-bold text-white">
                    Staff Software Engineer
                  </h3>
                  <p className="text-slate-400 mb-4">
                    Anthology, Chennai, India
                  </p>
                  <p className="text-slate-400 mb-4">
                    As a Staff Engineer and Tech Lead, my role was to tackle the
                    company's most complex technical challenges, lead project
                    delivery, and elevate the engineering standards of the
                    India-based teams. I focused on architecting for
                    performance, driving technical strategy, and mentoring the
                    next generation of engineers.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                    <li>
                      <strong>
                        Architected a novel sparse-loading data strategy
                      </strong>{" "}
                      that solved a critical customer issue by cutting load time
                      from over 10 minutes to under 2 seconds, a pattern that
                      was later adopted across the application.
                    </li>
                    <li>
                      <strong>Led the strategic adoption of AI</strong>,
                      designing and prototyping an automated translation
                      pipeline to replace a costly third-party vendor and
                      significantly reduce engineering overhead.
                    </li>
                    <li>
                      <strong>
                        Served as a key technical advisor and top code reviewer
                      </strong>
                      for the India engineering organization, mentoring teams on
                      performance, UX, and architectural best practices.
                    </li>
                    <li>
                      <strong>
                        Consistently shipped high-priority features on schedule
                      </strong>
                      , taking full ownership of the project lifecycle from
                      technical planning and estimation to final delivery.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="experience-item">
                <div className="experience-dot"></div>
                <div className="experience-content">
                  <p className="text-sm text-sky-400">JUNE 2017 - JULY 2021</p>
                  <h3 className="text-xl font-bold text-white">
                    Software Engineer
                  </h3>
                  <p className="text-slate-400 mb-4">
                    FULL Creative, Chennai, India
                  </p>
                  <p className="text-slate-400 mb-4">
                    Joining as a Software Engineer, I quickly grew to take on
                    significant architectural challenges. My focus was on
                    modernizing the backend, improving team processes, and
                    driving the adoption of new technologies to increase
                    efficiency and code quality. This role is where I built the
                    foundation for my career as a technical leader.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                    <li>
                      <strong>
                        Reduced time-to-market for new brands by over 95%
                      </strong>{" "}
                      (from 2 weeks to less than a day) by re-architecting the
                      backend with a scalable, configuration-driven design.
                    </li>
                    <li>
                      <strong>
                        Built a zero-boilerplate caching layer with Spring AOP
                      </strong>
                      that automated caching for all GET APIs, saving countless
                      hours of redundant work for the development team.
                    </li>
                    <li>
                      <strong>
                        Led the company-wide push for better unit testing
                      </strong>
                      , establishing new standards and running workshops that
                      created a culture of quality and significantly reduced
                      bugs in production.
                    </li>
                    <li>
                      <strong>
                        Pioneered the adoption of modern Java 8 features
                      </strong>{" "}
                      and championed the team's transition to React, quickly
                      mastering the new stack to deliver a production-ready
                      feature in under two weeks.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-slate-950 py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's build something great together.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Have a project in mind or just want to connect?
          </p>
          <div className="mt-8">
            <a
              href="mailto:johnsonabraham@nunnarivulabs.in"
              className="inline-flex items-center gap-2 bg-sky-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-sky-600 transition-transform hover:scale-105"
            >
              <Mail className="h-5 w-5" /> Send me an email
            </a>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com/johnson-abraham"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/johnson-abraham/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin />
            </a>
          </div>
          <div className="mt-16 text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Johnson Abraham. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
