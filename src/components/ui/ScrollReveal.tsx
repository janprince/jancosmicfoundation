'use client';

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

type Animation =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'scale-up';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  staggerChildren?: number;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.7,
  threshold = 0.15,
  className = '',
  staggerChildren,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (staggerChildren) {
            const items = el.children;
            for (let i = 0; i < items.length; i++) {
              const child = items[i] as HTMLElement;
              child.style.transitionDelay = `${delay + i * staggerChildren}s`;
              child.classList.add('sr-child-visible');
            }
          }

          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, staggerChildren]);

  const style: CSSProperties = staggerChildren
    ? {}
    : { transitionDelay: `${delay}s`, transitionDuration: `${duration}s` };

  const baseClass = staggerChildren
    ? 'sr-stagger-parent'
    : `sr sr-${animation}`;

  const visibleClass = visible && !staggerChildren ? 'sr-visible' : '';

  return (
    <div
      ref={ref}
      className={`${baseClass} ${visibleClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
