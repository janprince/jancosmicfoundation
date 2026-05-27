import { HiOutlineLockClosed, HiOutlineSquares2X2, HiOutlineEnvelope } from 'react-icons/hi2';

interface TrustSignalsProps {
  /** Render on a dark background. */
  dark?: boolean;
  className?: string;
}

const signals = [
  {
    Icon: HiOutlineLockClosed,
    title: 'Secured by Paystack',
    body: 'Card and mobile-money payments are handled securely. We never see or store your card details.',
  },
  {
    Icon: HiOutlineSquares2X2,
    title: 'You can see where it goes',
    body: 'Support is directed to real work — media, the children’s initiative, organic farming and Kwahu land, retreats, and centres.',
  },
  {
    Icon: HiOutlineEnvelope,
    title: 'For larger gifts',
    body: 'Planning a significant or recurring contribution? Write to us and a person will respond.',
    href: '/contact',
    hrefLabel: 'Contact the Foundation',
  },
];

/**
 * A quiet reassurance strip placed at the moment of giving — not buried
 * in the footer. Honest, specific, calm.
 */
export default function TrustSignals({ dark = false, className = '' }: TrustSignalsProps) {
  const titleColor = dark ? 'text-white' : 'text-[#000B58]';
  const bodyColor = dark ? 'text-white/70' : 'text-[#1c1a26]/70';
  const iconWrap = dark ? 'bg-white/10 text-[#D4A843]' : 'bg-[#D4A843]/12 text-[#8a6c1a]';
  const linkColor = dark ? 'text-[#D4A843]' : 'text-primary';
  const divide = dark ? 'sm:divide-white/10' : 'sm:divide-black/8';

  return (
    <div
      className={[
        'grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x',
        divide,
        className,
      ].join(' ')}
    >
      {signals.map(({ Icon, title, body, href, hrefLabel }) => (
        <div key={title} className="sm:px-7 first:sm:pl-0 last:sm:pr-0">
          <span
            className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full ${iconWrap}`}
            aria-hidden="true"
          >
            <Icon className="h-5 w-5" />
          </span>
          <h3 className={`text-sm font-semibold tracking-wide ${titleColor}`}>{title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${bodyColor}`}>{body}</p>
          {href && (
            <a
              href={href}
              className={`mt-2 inline-block text-sm font-medium underline underline-offset-4 decoration-current/30 transition-opacity hover:opacity-70 ${linkColor}`}
            >
              {hrefLabel}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
