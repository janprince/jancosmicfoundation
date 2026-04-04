import Link from 'next/link';
import { HiOutlineBookOpen, HiOutlineCalendarDays, HiOutlineHeart, HiOutlineMapPin } from 'react-icons/hi2';

const pathways = [
  {
    icon: HiOutlineBookOpen,
    title: 'Explore the Teachings',
    description:
      'Discover wisdom on consciousness, meditation, and the path to self-realization.',
    href: '/teachings',
  },
  {
    icon: HiOutlineCalendarDays,
    title: 'Attend an Event',
    description:
      'Retreats, workshops, and gatherings for seekers at every stage of the path.',
    href: '/events',
  },
  {
    icon: HiOutlineHeart,
    title: 'Support a Cause',
    description:
      'Fund programmes that awaken consciousness and uplift communities across Ghana.',
    href: '/donate',
  },
  {
    icon: HiOutlineMapPin,
    title: 'Find a Centre',
    description:
      'Join a local community of seekers united in the pursuit of truth and conscious living.',
    href: '/centres',
  },
];

export default function Pathways() {
  return (
    <section className="bg-[#F2EFE9] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#8a6c1a]">
            Your Path
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#000B58] sm:text-4xl">
            What Brings You Here?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
            Whether you are seeking wisdom, community, or purpose — there is a
            place for you here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </div>
    </section>
  );
}
