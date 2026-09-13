import { EnvelopeSimple, Eye, LockSimple } from '@phosphor-icons/react/dist/ssr';

interface TrustSignalsProps {
  /** Render on a dark background. */
  dark?: boolean;
  className?: string;
}

const signals = [
  {
    Icon: LockSimple,
    title: 'Secured by Paystack',
    body: 'Card and mobile-money payments are handled securely. We never see or store your card details.',
  },
  {
    Icon: Eye,
    title: 'You can see where it goes',
    body: 'Support is directed to real work: media, Guide the Children, organic farms, the JCF Village vision, retreats, and centres.',
  },
  {
    Icon: EnvelopeSimple,
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
  const titleColor = dark ? 'text-white' : 'text-navy';
  const bodyColor = dark ? 'text-white/70' : 'text-muted';
  const iconColor = dark ? 'text-gold' : 'text-gold-ink';
  const linkColor = dark ? '!text-gold' : '';
  const divide = dark ? 'sm:divide-white/10' : 'sm:divide-line';

  return (
    <div className={['grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x', divide, className].join(' ')}>
      {signals.map(({ Icon, title, body, href, hrefLabel }) => (
        <div key={title} className="sm:px-7 first:sm:pl-0 last:sm:pr-0">
          <Icon size={28} weight="light" className={`mb-4 block ${iconColor}`} aria-hidden="true" />
          <h3 className={`font-serif text-xl ${titleColor}`}>{title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${bodyColor}`}>{body}</p>
          {href && (
            <a href={href} className={`text-link mt-3 text-sm ${linkColor}`}>
              {hrefLabel}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
