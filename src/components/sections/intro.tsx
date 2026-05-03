import heroBackground from '../../assets/hero-background.jpg';
import { getExperience, PROJECTS_HREF } from '../../utils.ts';
import { ArrowRight, Mail } from 'lucide-react';

export const Intro = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <img
        src={heroBackground}
        alt="A laptop in a dark room with a colorful keyboard."
        className="h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(20,184,166,0.22),transparent_32%),linear-gradient(90deg,rgba(7,9,18,0.96)_0%,rgba(7,9,18,0.78)_46%,rgba(7,9,18,0.48)_100%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#070912] to-transparent"></div>
    </div>
    <div className="relative z-10 container mx-auto px-6">
      <div className="max-w-4xl">
        <h1 className="hero-fade-in max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
          I build secure, scalable, and user-centric web applications.
        </h1>
        <p className="hero-fade-in hero-delay-1 mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
          {`With ${getExperience()} years of experience as a Full-Stack Engineer, I specialize
                in the Java/Spring and TypeScript/React ecosystems. I architect
                and deploy scalable, cloud-native applications, from robust
                serverless backends to dynamic, responsive frontends.`}
        </p>
        <div className="hero-fade-in hero-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
          <a className="primary-button group" href={PROJECTS_HREF}>
            View My Work
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a className="secondary-button" href="#contact">
            <Mail className="h-5 w-5" />
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
);
