import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you were looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="night stars relative flex min-h-[88vh] items-center justify-center overflow-hidden px-5 pb-24 pt-36 sm:px-8">

      <div className="relative z-10 mx-auto max-w-xl text-center">

        <p className="eyebrow mb-4 !text-gold">404</p>

        <h1 className="text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          This path does not lead anywhere.
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/85">
          The page you were looking for has moved, or never existed. You can find your way back below.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="button gold"
          >
            Return home
          </Link>
          <Link
            href="/contact"
            className="button ghost"
          >
            Contact the Foundation
          </Link>
        </div>
      </div>
    </div>
  );
}
