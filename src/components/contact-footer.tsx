import { Mail } from 'lucide-react';
import { Github } from '../icons/github.tsx';
import { LinkedIn } from '../icons/linkedIn.tsx';

export const ContactFooter = () => (
  <footer id="contact" className="section-shell bg-[#070912] py-20 text-center">
    <div className="container mx-auto px-6">
      <div className="animate-on-scroll">
        <p className="section-kicker justify-center">Contact</p>
        <h2 className="section-title mx-auto">
          Thanks for visiting my portfolio.
        </h2>
        <p className="section-copy mx-auto max-w-xl">
          I'm always happy to connect and talk about technology.
        </p>
        <div className="mt-8">
          <a
            href="mailto:johnsonabraham@nunnarivulabs.in"
            className="primary-button"
          >
            <Mail className="h-5 w-5" /> Send me an email
          </a>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://github.com/johnson-abraham"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link-enhanced"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/johnson-abraham/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
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
