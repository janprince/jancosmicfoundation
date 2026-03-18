'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Format large numbers with commas */
  format?: boolean;
  /** Externally controlled trigger — when true, starts counting. Falls back to own IntersectionObserver if not provided. */
  startWhen?: boolean;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export default function Counter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
  format = true,
  startWhen,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const hasStartedRef = useRef(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Start the count-up animation
  const startCounting = () => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = Math.round(easedProgress * end);

      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  // External trigger via startWhen prop
  useEffect(() => {
    if (startWhen) {
      startCounting();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startWhen]);

  // Fallback: IntersectionObserver to trigger on scroll into view (when startWhen is not provided)
  useEffect(() => {
    if (startWhen !== undefined) return; // skip if externally controlled

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayValue = format ? count.toLocaleString() : String(count);

  return (
    <span ref={containerRef} className={className} aria-live="polite">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
