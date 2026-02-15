import heroBackground from '../../assets/hero-background.jpg';
import { getExperience } from '../../utils.ts';
import { ArrowRight } from 'lucide-react';

export const Intro = () => (
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
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight hero-fade-in">
        I build secure, scalable, and user-centric web applications.
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-300 hero-fade-in hero-delay-1">
        {`With ${getExperience()} years of experience as a Full-Stack Engineer, I specialize
              in the Java/Spring and TypeScript/React ecosystems. I architect
              and deploy scalable, cloud-native applications, from robust
              serverless backends to dynamic, responsive frontends.`}
      </p>
      <div className="mt-10 hero-fade-in hero-delay-2">
        <a className="inline-flex items-center gap-2 bg-sky-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-sky-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 group">
          View My Work{' '}
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);
