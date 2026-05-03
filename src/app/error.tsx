'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.error(error);
    }
  }, [error]);

  return (
    <main
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-24 sm:px-8"
      style={{
        background:
          'linear-gradient(135deg, #000B58 0%, #001485 50%, var(--color-primary) 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #D4A843 30%, #D4A843 70%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-xl text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" aria-hidden="true" />
          <span className="block w-2 h-2 rounded-full bg-[#D4A843]" aria-hidden="true" />
          <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" aria-hidden="true" />
        </div>

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#D4A843]/90">
          Something went wrong
        </p>

        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          The page could not be loaded.
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/85">
          An unexpected error interrupted this page. You can try again, or return home.
        </p>

        {error.digest && (
          <p className="mt-4 font-mono text-xs text-white/50">
            Reference: {error.digest}
          </p>
        )}

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-sm bg-[#D4A843] px-7 py-3 text-sm font-medium text-[#000B58] transition-colors duration-300 hover:bg-[#c49a38]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-sm border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
