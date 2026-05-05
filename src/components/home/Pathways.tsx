import Link from 'next/link';
import { HiOutlineBookOpen, HiOutlineCalendarDays, HiOutlineHeart, HiOutlineMapPin } from 'react-icons/hi2';
import ScrollReveal from '@/components/ui/ScrollReveal';

const pathways = [
  {
    icon: HiOutlineBookOpen,
    title: 'Watch the teachings',
    description:
      'Free recordings on YouTube. Or join InnerSpace for the deeper, structured work.',
    href: '/teachings',
  },
  {
    icon: HiOutlineCalendarDays,
    title: 'Come to an event',
    description:
      'Talks, retreats, and weekly sittings — most in Accra, some online.',
    href: '/events',
  },
  {
    icon: HiOutlineMapPin,
    title: 'Visit a centre',
    description:
      'Centres across Ghana and beyond. Sit, listen, ask questions.',
    href: '/centres',
  },
  {
    icon: HiOutlineHeart,
    title: 'Help fund the work',
    description:
      'Youth education, retreats, the Spiritual Village in Kwahu, and more.',
    href: '/donate',
  },
];

export default function Pathways() {
  return (
    <section className="bg-[#F2EFE9] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#8a6c1a]">
            Where to Begin
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#000B58] sm:text-4xl">
            Four ways in.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
            Some come for the teachings. Some come for the community. Some come
            because they couldn&apos;t say why. All are welcome.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal staggerChildren={0.12} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-xl border border-[#e8e4dc] bg-white p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2EFE9] transition-colors duration-300 group-hover:bg-primary/10">
                <item.icon className="h-6 w-6 text-[#000B58] transition-colors duration-300 group-hover:text-primary" />
              </div>

              {/* Text */}
              <h3 className="mb-2 text-lg font-semibold text-[#000B58] transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#1a1a1a]/65">
                {item.description}
              </p>
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
