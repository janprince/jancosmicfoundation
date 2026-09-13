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
    <div className="night stars relative flex min-h-[88vh] items-center justify-center overflow-hidden px-5 pb-24 pt-36 sm:px-8">

      <div className="relative z-10 mx-auto max-w-xl text-center">

        <p className="eyebrow mb-4 !text-gold">Something went wrong</p>

        <h1 className="text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
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
            className="button gold"
          >
            Try again
          </button>
          <Link
            href="/"
            className="button ghost"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
