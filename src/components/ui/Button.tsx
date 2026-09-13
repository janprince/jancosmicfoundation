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

// Pill buttons defined once in foundation.css (.button), shared with the homepage.
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'button',
  secondary: 'button gold',
  outline: 'button outline',
  ghost: 'button quiet',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'button-sm',
  md: '',
  lg: 'button-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const classes = [variantClasses[variant], sizeClasses[size], className].filter(Boolean).join(' ');

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
