interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  const titleColor = light ? 'text-white' : 'text-[#000B58]';
  const subtitleColor = light ? 'text-white/85' : 'text-[#1c1a26]/75';

  return (
    <div
      className={[
        'w-full',
        isCenter ? 'text-center' : 'text-left',
        className,
      ].join(' ')}
    >
      {label && (
        <div
          className={[
            'mb-4 flex items-center gap-3',
            isCenter ? 'justify-center' : 'justify-start',
          ].join(' ')}
        >
          {isCenter && (
            <span className="h-px w-8 shrink-0 rounded-full bg-[#D4A843]/70" aria-hidden="true" />
          )}
          <span className={`eyebrow ${light ? 'text-[#D4A843]' : 'text-[#8a6c1a]'}`}>
            {label}
          </span>
          <span className="h-px w-8 shrink-0 rounded-full bg-[#D4A843]/70" aria-hidden="true" />
        </div>
      )}

      <h2
        className={[
          'display text-[1.95rem] leading-[1.12] sm:text-4xl lg:text-[2.7rem]',
          titleColor,
        ].join(' ')}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={[
            'mt-4 max-w-2xl text-base leading-relaxed sm:text-lg',
            subtitleColor,
            isCenter ? 'mx-auto' : '',
          ].join(' ')}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
