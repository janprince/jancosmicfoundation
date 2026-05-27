import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const firstSteps = [
  {
    step: 'Watch',
    title: 'Watch a teaching',
    description:
      'Start with a public talk. Let the words meet you before deciding anything.',
    href: '/teachings',
  },
  {
    step: 'Attend',
    title: 'Join a gathering',
    description:
      'Sit with others at a retreat, sitting, or live session — in Accra or online.',
    href: '/events',
  },
  {
    step: 'Study',
    title: 'Explore InnerSpace',
    description:
      'When you are ready for rhythm and guidance, go deeper through structured study.',
    href: 'https://www.drbaffourjan.com/inner-space',
    external: true,
  },
];

export default function Pathways() {
  return (
    <section id="begin" className="scroll-mt-20 bg-[#F2EFE9] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal animation="fade-up" className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4 text-[#8a6c1a]">New to the Foundation?</p>
          <h2 className="display text-[2rem] leading-[1.12] text-[#000B58] sm:text-4xl lg:text-[2.7rem]">
            You don&rsquo;t need to know where this leads to begin
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#1c1a26]/75 sm:text-lg">
            Jan Cosmic Foundation carries the teachings of Dr. Baffour Jan, a
            Ghanaian mystic and teacher. There is no membership to join and
            nothing to believe in advance. Begin with the doorway that feels
            honest.
          </p>
        </ScrollReveal>

        <ScrollReveal
          staggerChildren={0.12}
          className="grid gap-5 sm:grid-cols-3"
        >
          {firstSteps.map((item) => {
            const inner = (
              <>
                <span className="eyebrow text-[#8a6c1a]">{item.step}</span>
                <h3 className="display mt-3 text-2xl text-[#000B58] transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                  {item.external && (
                    <span aria-hidden="true" className="ml-1.5 text-[#8a6c1a]/60 text-base align-middle">↗</span>
                  )}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1c1a26]/70">
                  {item.description}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-8 origin-left bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-[2.5]"
                />
              </>
            );
            const className =
              'group flex flex-col rounded-xl border border-black/[0.08] bg-white p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-[#000B58]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';
            return item.external ? (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                {inner}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
