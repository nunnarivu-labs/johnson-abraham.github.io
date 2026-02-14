import { ExperienceWrapper } from './experience-wrapper.tsx';
import { Anthology } from './anthology.tsx';
import { FullCreative } from './full-creative.tsx';

export const ExperienceSection = () => (
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
        <ExperienceWrapper
          key="anthology"
          duration="AUGUST 2021 - FEBRUARY 2026"
          designation="Staff Software Engineer"
          company="Anthology, Chennai, India"
        >
          <Anthology />
        </ExperienceWrapper>
        <ExperienceWrapper
          key="full_creative"
          duration="JUNE 2017 - JULY 2021"
          designation="Software Engineer"
          company="FULL Creative, Chennai, India"
        >
          <FullCreative />
        </ExperienceWrapper>
      </div>
    </div>
  </section>
);
