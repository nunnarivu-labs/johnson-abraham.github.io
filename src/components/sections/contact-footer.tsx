import { Mail } from 'lucide-react';
import { Github } from '../../icons/github.tsx';
import { LinkedIn } from '../../icons/linkedIn.tsx';

export const ContactFooter = () => (
  <footer
    id="contact"
    className="bg-slate-950 py-20 text-center section-pattern"
  >
    <div className="container mx-auto px-6">
      <div className="animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Thanks for visiting my portfolio.
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          I'm always happy to connect and talk about technology.
        </p>
        <div className="mt-8">
          <a
            href="mailto:johnsonabraham@nunnarivulabs.in"
            className="inline-flex items-center gap-2 bg-sky-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-sky-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
          >
            <Mail className="h-5 w-5" /> Send me an email
          </a>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://github.com/johnson-abraham"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-enhanced"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/johnson-abraham/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-enhanced"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
      <div className="mt-16 text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Johnson Abraham. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);
