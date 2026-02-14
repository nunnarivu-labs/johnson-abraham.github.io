import { ReactNode } from 'react';

export const ExperienceWrapper = ({
  duration,
  designation,
  company,
  children,
}: {
  duration: string;
  designation: string;
  company: string;
  children: ReactNode;
}) => (
  <div className="experience-item-enhanced animate-on-scroll">
    <div className="experience-dot-enhanced"></div>
    <div className="experience-content">
      <p className="text-sm text-sky-400">{duration}</p>
      <h3 className="text-xl font-bold text-white">{designation}</h3>
      <p className="text-slate-400 mb-4">{company}</p>
      {children}
    </div>
  </div>
);
