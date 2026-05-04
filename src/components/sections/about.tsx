import profilePhoto from '../../assets/profile-photo.jpg';

export const About = () => (
  <section id="about" className="relative overflow-hidden py-16 md:py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.12),transparent_28%),linear-gradient(135deg,#0b1020_0%,#070912_55%,#10131d_100%)]"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid gap-12 md:grid-cols-5 md:items-center">
        <div className="md:col-span-1 animate-on-scroll">
          <img
            src={profilePhoto}
            alt="Johnson Abraham"
            className="aspect-square w-full rounded-2xl object-cover shadow-2xl shadow-black/40 ring-1 ring-white/15 transition-all duration-300 hover:ring-cyan-300/40 md:col-span-2"
          />
        </div>
        <div className="animate-on-scroll md:col-span-4">
          <p className="section-kicker">Profile</p>
          <h2 className="section-title mb-6">Engineering Approach</h2>
          <div className="max-w-3xl space-y-4 text-lg text-slate-400">
            <p>
              I build software that is fast, scalable, and enjoyable to use. As
              a Staff Software Engineer, my strongest focus is frontend
              engineering: shaping responsive interfaces, designing maintainable
              React architecture, and turning complex workflows into clear user
              experiences.
            </p>
            <p>
              What truly excites me is solving puzzles with a big impact. I
              enjoy the challenge of taking a complex, slow, or inefficient
              system and, through architectural vision and practical coding,
              turning it into something simple, fast, and reliable. My proudest
              moments are when a solution not only resolves a customer’s problem
              but also makes life easier for my entire engineering team.
            </p>
            <p>
              My backend experience in Java, Spring, APIs, and cloud systems
              gives me the context to work across the stack, but my day-to-day
              craft is centered on JavaScript, TypeScript, React, performance,
              and product-quality UI delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
