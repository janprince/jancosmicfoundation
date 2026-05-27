import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const initiatives = [
  {
    title: 'Guide the Children',
    line: 'Mentorship and simple awareness practices that help young people grow with presence and responsibility.',
    href: '/programs',
  },
  {
    title: 'Organic farms & JCF Village',
    line: 'Natural food, herbal gardens, and a peaceful village where seekers can recharge.',
    href: '/donate',
  },
  {
    title: 'Media & digital outreach',
    line: 'Recording, interviewing, editing, and sharing the teachings wherever seekers are.',
    href: '/programs',
  },
  {
    title: 'Outreach teachers & organisers',
    line: 'Carrying basic knowledge outward, supporting centres, and helping seekers become awake and aware.',
    href: '/volunteer',
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-[#F2EFE9] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* Left — framing */}
        <ScrollReveal animation="fade-right">
          <p className="eyebrow mb-4 text-[#8a6c1a]">Service as practice</p>
          <h2 className="display text-[2rem] leading-[1.12] text-[#000B58] sm:text-4xl lg:text-[2.7rem]">
            Inner work becomes real in how we serve
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#1c1a26]/80 sm:text-lg">
            Dr. Jan presents service as part of evolution, not an extra activity
            added to spiritual life. Some serve directly as outreach teachers,
            healers, counsellors, organisers, farm workers, or media workers;
            others serve indirectly by supporting the work.
          </p>

          <div className="relative mt-8 h-64 w-full overflow-hidden rounded-xl sm:h-80">
            <Image
              src="/images/exercise.jpg"
              alt="Community gathered in service and practice"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </ScrollReveal>

        {/* Right — initiatives list */}
        <ScrollReveal animation="fade-left" delay={0.15}>
          <ul className="divide-y divide-black/8 border-y border-black/8">
            {initiatives.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="group flex items-start gap-4 py-6 transition-colors"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A843] transition-transform duration-300 group-hover:scale-150" aria-hidden="true" />
                  <span className="flex-1">
                    <span className="display block text-xl text-[#000B58] transition-colors group-hover:text-primary">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-[#1c1a26]/70">
                      {item.line}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/programs"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
          >
            See all the Foundation’s initiatives
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
