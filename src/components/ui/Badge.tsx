import { ReactNode } from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'accent';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary:
    'bg-primary/15 text-primary ring-1 ring-primary/30',
  secondary:
    'bg-[#D4A843]/15 text-[#a07d1f] ring-1 ring-[#D4A843]/40',
  accent:
    'bg-[#C05021]/15 text-[#C05021] ring-1 ring-[#C05021]/30',
};

export default function Badge({
  children,
  variant = 'primary',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5',
        'text-xs font-semibold tracking-wide uppercase',
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
