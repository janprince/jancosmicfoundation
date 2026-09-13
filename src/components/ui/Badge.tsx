import { ReactNode } from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'accent';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-navy/[0.06] text-navy',
  secondary: 'bg-gold/15 text-gold-ink',
  accent: 'bg-accent/10 text-accent',
};

export default function Badge({
  children,
  variant = 'primary',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
        'text-[11px] font-semibold tracking-[0.12em] uppercase',
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
