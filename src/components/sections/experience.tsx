import { type ReactNode } from 'react';

interface ExperienceItem {
  duration: string;
  designation: string;
  company: string;
  content: ReactNode;
}

const AnthologyContent = () => (
  <>
    <p className="text-slate-400 mb-4">
      As a Staff Engineer and Tech Lead, my role was to tackle the company's
      most complex technical challenges, lead project delivery, and elevate the
      engineering standards of the India-based teams. I focused on architecting
      for performance, driving technical strategy, and mentoring the next
      generation of engineers.
    </p>
    <ul className="list-disc list-inside space-y-2 text-slate-400">
      <li>
        <strong>Architected a novel sparse-loading data strategy</strong> that
        solved a critical customer issue by cutting load time from over 10
        minutes to under 2 seconds, a pattern that was later adopted across the
        application.
      </li>
      <li>
        <strong>Led the strategic adoption of AI</strong>, designing and
        prototyping an automated translation pipeline to replace a costly
        third-party vendor and significantly reduce engineering overhead.
      </li>
      <li>
        <strong>Served as a key technical advisor and top code reviewer</strong>
        &nbsp;for the India engineering organization, mentoring teams on
        performance, UX, and architectural best practices.
      </li>
      <li>
        <strong>Consistently shipped high-priority features on schedule</strong>
        , taking full ownership of the project lifecycle from technical planning
        and estimation to final delivery.
      </li>
    </ul>
  </>
);

const FullCreativeContent = () => (
  <>
    <p className="text-slate-400 mb-4">
      Joining as a Software Engineer, I quickly grew to take on significant
      architectural challenges. My focus was on modernizing the backend,
      improving team processes, and driving the adoption of new technologies to
      increase efficiency and code quality. This role is where I built the
      foundation for my career as a technical leader.
    </p>
    <ul className="list-disc list-inside space-y-2 text-slate-400">
      <li>
        <strong>Reduced time-to-market for new brands by over 95%</strong> (from
        2 weeks to less than a day) by re-architecting the backend with a
        scalable, configuration-driven design.
      </li>
      <li>
        <strong>Built a zero-boilerplate caching layer with Spring AOP</strong>
        &nbsp;that automated caching for all GET APIs, saving countless hours of
        redundant work for the development team.
      </li>
      <li>
        <strong>Led the company-wide push for better unit testing</strong>,
        establishing new standards and running workshops that created a culture
        of quality and significantly reduced bugs in production.
      </li>
      <li>
        <strong>Pioneered the adoption of modern Java 8 features</strong> and
        championed the team's transition to React, quickly mastering the new
        stack to deliver a production-ready feature in under two weeks.
      </li>
    </ul>
  </>
);

const experiences: ExperienceItem[] = [
  {
    duration: 'AUGUST 2021 - FEBRUARY 2026',
    designation: 'Staff Software Engineer',
    company: 'Anthology, Chennai, India',
    content: <AnthologyContent />,
  },
  {
    duration: 'JUNE 2017 - JULY 2021',
    designation: 'Software Engineer',
    company: 'FULL Creative, Chennai, India',
    content: <FullCreativeContent />,
  },
];

const ExperienceCard = ({
  duration,
  designation,
  company,
  content,
}: ExperienceItem) => (
  <div className="experience-item-enhanced animate-on-scroll">
    <div className="experience-dot-enhanced"></div>
    <div className="experience-content">
      <p className="text-sm text-sky-400">{duration}</p>
      <h3 className="text-xl font-bold text-white">{designation}</h3>
      <p className="text-slate-400 mb-4">{company}</p>
      {content}
    </div>
  </div>
);

export const Experience = () => (
  <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-tl from-slate-900 via-slate-900 to-slate-800/50"></div>
    <div className="container mx-auto px-6 max-w-3xl relative z-10">
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Professional Experience
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          I've had the privilege of contributing to great teams and building
          enterprise-level software.
        </p>
      </div>
      <div className="space-y-12">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </div>
    </div>
  </section>
);
