'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * A quiet route-transition indicator for the App Router's client-side
 * navigation, plus accessibility housekeeping on every page change:
 *
 *  - A thin indigo→violet→gold bar starts when an internal link is clicked
 *    and completes once the new route's pathname is in place.
 *  - On a real route change (not an in-page #hash jump) we reset scroll to
 *    the top and move focus to <main>, so keyboard and screen-reader users
 *    land at the start of the new page.
 *
 * No dependencies; soft navigation (prefetch, no full reload) is preserved.
 */
export default function RouteProgress() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  const activeRef = useRef(false);
  const firstRender = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  // Begin the bar (held near the end until navigation resolves).
  const start = () => {
    clearTimers();
    activeRef.current = true;
    setVisible(true);
    setWidth(8);
    timers.current.push(setTimeout(() => setWidth(85), 60));
    // Safety net: never let the bar hang if something stalls.
    timers.current.push(setTimeout(() => complete(), 8000));
  };

  // Finish and fade out.
  const complete = () => {
    if (!activeRef.current) return;
    activeRef.current = false;
    clearTimers();
    setWidth(100);
    timers.current.push(setTimeout(() => setVisible(false), 220));
    timers.current.push(setTimeout(() => setWidth(0), 460));
  };

  // Detect intent: a left-click on an internal link to a different path.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      const anchor = (e.target as HTMLElement | null)?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      // External, or same-page (incl. #hash) — no route transition to show.
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      start();
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Route change resolved: finish the bar, then reset scroll + focus for a11y.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    complete();

    // Leave in-page #hash jumps alone; otherwise start the new page at the top.
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      const main = document.getElementById('main-content');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Tidy up timers on unmount.
  useEffect(() => clearTimers, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: visible ? 1 : 0,
        transition: 'opacity 200ms ease',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${width}%`,
          background:
            'linear-gradient(90deg, var(--color-primary) 0%, var(--color-violet, #5B4B9E) 50%, #D4A843 100%)',
          boxShadow: '0 0 8px rgba(212,168,67,0.45)',
          transition: 'width 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
}
