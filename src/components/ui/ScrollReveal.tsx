import type { ReactNode } from 'react';

// Retain the layout wrapper while keeping reading and practical content immediately visible.
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  staggerChildren?: number;
}
export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  return <div className={className}>{children}</div>;
}
