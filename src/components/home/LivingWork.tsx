import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Doorway {
  index: string;
  title: string;
  line: string;
  href: string;
  image: string;
  alt: string;
  external?: boolean;
}

const doorways: Doorway[] = [
  {
    index: '01',
    title: 'Teachings',
    line: 'Public talks on consciousness, the Self, God, mind, and inner freedom.',
    href: '/teachings',
    image: '/images/doc-holding-mic.jpg',
    alt: 'Dr. Baffour Jan teaching',
  },
  {
    index: '02',
    title: 'Retreats & Gatherings',
    line: 'Silence, sittings, and time away from the world — alone and together.',
    href: '/events',
    image: '/images/students-sitting-down-on-grass.jpg',
    alt: 'Seekers gathered outdoors',
  },
  {
    index: '03',
    title: 'InnerSpace',
    line: 'A structured path for those ready to study and practise with rhythm.',
    href: '/innerspace',
    image: '/images/studentinmeditation.jpg',
    alt: 'A student in meditation',
  },
  {
    index: '04',
    title: 'Centres & Community',
    line: 'Places to sit, ask sincere questions, and walk the path alongside others.',
    href: '/centres',
    image: '/images/group-of-students.jpg',
    alt: 'A community of seekers',
  },
  {
    index: '05',
    title: 'Service',
    line: 'Inner work made visible — youth mentorship, the land, and care for others.',
    href: '/programs',
    image: '/images/group-of-students2.jpg',
    alt: 'Community service',
  },
  {
    index: '06',
    title: 'Media & Writings',
    line: 'Recorded talks and reflections, so the teachings reach you wherever you are.',
    href: '/blog',
    image: '/images/teaching.jpg',
    alt: 'A teaching session',
  },
];

function DoorwayCard({ door }: { door: Doorway }) {
  const inner = (
    <>
      <Image
        src={door.image}
        alt={door.alt}
        fill
        className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Indigo veil for legibility, deeper at the foot */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,11,88,0.10) 0%, rgba(0,11,88,0.30) 45%, rgba(0,11,88,0.88) 100%)',
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="mb-2 text-xs font-medium tracking-[0.25em] text-[#D4A843]/90">
          {door.index}
          {door.external && <span aria-hidden="true" className="ml-2 text-white/50">↗</span>}
        </span>
        <h3 className="display text-2xl text-white">{door.title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">
          {door.line}
        </p>
        {/* Threshold line that opens on hover */}
        <span
          aria-hidden="true"
          className="mt-4 block h-px w-10 origin-left bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-[2.6]"
        />
      </div>
    </>
  );

  const className =
    'group relative block aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843]';

  return door.external ? (
    <a href={door.href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={door.href} className={className}>
      {inner}
    </Link>
  );
}

export default function LivingWork() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal animation="fade-up" className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4 text-[#8a6c1a]">The living work</p>
          <h2 className="display text-[2rem] leading-[1.12] text-[#000B58] sm:text-4xl lg:text-[2.7rem]">
            Six doorways into the same path
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#1c1a26]/75 sm:text-lg">
            The Foundation is teachings, practice, service, and community — not
            separate programmes, but one inward movement seen from different
            sides. Enter through whichever feels honest today.
          </p>
        </ScrollReveal>

        <ScrollReveal
          staggerChildren={0.1}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {doorways.map((door) => (
            <DoorwayCard key={door.index} door={door} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
