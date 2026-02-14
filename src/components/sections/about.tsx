import profilePhoto from '../../assets/profile-photo.jpg';

export const About = () => (
  <section id="about" className="py-20 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-900 to-slate-800/50"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 animate-on-scroll">
          <img
            src={profilePhoto}
            alt="Johnson Abraham"
            className="rounded-lg shadow-2xl w-full ring-4 ring-sky-500/20 hover:ring-sky-500/40 transition-all duration-300"
          />
        </div>
        <div className="md:col-span-2 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="mb-4 text-slate-400">
            I build software that is fast, scalable, and enjoyable to use. As a
            Staff Software Engineer, my career has explored two areas: the
            reliable, enterprise-level backends of the Java ecosystem and the
            dynamic, user-focused frontends of modern TypeScript and React.
          </p>
          <p className="mb-4 text-slate-400">
            What truly excites me is solving puzzles with a big impact. I enjoy
            the challenge of taking a complex, slow, or inefficient system and,
            through architectural vision and practical coding, turning it into
            something simple, fast, and reliable. My proudest moments are when a
            solution not only resolves a customer’s problem but also makes life
            easier for my entire engineering team.
          </p>
          <p className="text-slate-400">
            I believe that the best leaders are also mentors. A significant part
            of my role is to share my knowledge, foster a culture of technical
            excellence, and introduce innovations that enable the team to grow.
          </p>
        </div>
      </div>
    </div>
  </section>
);
