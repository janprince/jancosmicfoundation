import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white border-2 border-primary ' +
    'hover:bg-[#245c43] hover:border-[#245c43] hover:shadow-lg hover:shadow-primary/20 ' +
    'active:scale-[0.97]',
  secondary:
    'bg-[#D4A843] text-[#000B58] border-2 border-[#D4A843] font-semibold ' +
    'hover:bg-[#c49a38] hover:border-[#c49a38] hover:shadow-lg hover:shadow-[#D4A843]/25 ' +
    'active:scale-[0.97]',
  outline:
    'bg-transparent text-primary border-2 border-primary ' +
    'hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 ' +
    'active:scale-[0.97]',
  ghost:
    'bg-transparent text-primary border-2 border-transparent ' +
    'hover:bg-primary/10 hover:border-primary/10 ' +
    'active:scale-[0.97]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm rounded-md',
  md: 'px-6 py-2.5 text-base rounded-lg',
  lg: 'px-8 py-3.5 text-lg rounded-xl',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-medium cursor-pointer ' +
  'transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-primary focus-visible:ring-offset-2 ' +
  'disabled:opacity-50 disabled:pointer-events-none select-none';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
