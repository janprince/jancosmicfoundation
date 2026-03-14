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
  const subtitleColor = light ? 'text-white/80' : 'text-[#1a1a1a]/75';

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
            <span className="h-px w-8 shrink-0 rounded-full bg-[#D4A843]" aria-hidden="true" />
          )}
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A843]">
            {label}
          </span>
          <span className="h-px w-8 shrink-0 rounded-full bg-[#D4A843]" aria-hidden="true" />
        </div>
      )}

      <h2
        className={[
          'text-3xl font-semibold leading-tight sm:text-4xl',
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
