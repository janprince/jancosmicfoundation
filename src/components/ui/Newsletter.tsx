'use client';

import { FormEvent, useState } from 'react';

interface NewsletterProps {
  dark?: boolean;
  heading?: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Newsletter({
  dark = false,
  heading = 'Stay in the loop',
  description = 'Get updates on our programmes, events, and impact stories delivered to your inbox.',
  placeholder = 'Enter your email address',
  buttonLabel = 'Subscribe',
  className = '',
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const headingColor = dark ? 'text-white' : 'text-[#000B58]';
  const descColor = dark ? 'text-white/70' : 'text-[#1a1a1a]/60';
  const inputBg = dark
    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#D4A843] focus:bg-white/15'
    : 'bg-white border-[#2D6A4F]/25 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:border-[#2D6A4F]';

  function validateEmail(val: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg('');

    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      // Replace with your actual subscription endpoint
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  }

  function handleReset() {
    setStatus('idle');
    setErrorMsg('');
    setEmail('');
  }

  if (status === 'success') {
    return (
      <div
        className={[
          'w-full rounded-2xl p-6 text-center sm:p-8',
          dark ? 'bg-white/10' : 'bg-[#2D6A4F]/08',
          className,
        ].join(' ')}
        role="status"
        aria-live="polite"
      >
        {/* Checkmark icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2D6A4F]/15">
          <svg
            className="h-7 w-7 text-[#2D6A4F]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={['text-xl font-bold', headingColor].join(' ')}>
          You&apos;re subscribed!
        </h3>
        <p className={['mt-2 text-sm', descColor].join(' ')}>
          Thank you for joining us. We&apos;ll be in touch with inspiring stories
          and updates.
        </p>
        <button
          onClick={handleReset}
          className={[
            'mt-4 text-sm font-medium underline underline-offset-2 transition-opacity hover:opacity-70',
            dark ? 'text-[#D4A843]' : 'text-[#2D6A4F]',
          ].join(' ')}
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <div className={['w-full', className].join(' ')}>
      {/* Heading & description */}
      {heading && (
        <h3 className={['mb-1 text-xl font-bold sm:text-2xl', headingColor].join(' ')}>
          {heading}
        </h3>
      )}
      {description && (
        <p className={['mb-5 text-sm leading-relaxed sm:text-base', descColor].join(' ')}>
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Email input */}
          <div className="relative flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
              <svg
                className={['h-4 w-4', dark ? 'text-white/40' : 'text-[#2D6A4F]/40'].join(' ')}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder={placeholder}
              autoComplete="email"
              disabled={status === 'loading'}
              className={[
                'w-full rounded-xl border py-3 pl-10 pr-4 text-sm outline-none',
                'transition-all duration-200 focus:ring-2 focus:ring-[#2D6A4F]/20',
                'disabled:opacity-60',
                inputBg,
                errorMsg ? 'border-[#C05021] focus:ring-[#C05021]/20' : '',
              ].join(' ')}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className={[
              'shrink-0 rounded-xl px-6 py-3 text-sm font-semibold',
              'transition-all duration-300 active:scale-[0.97]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843] focus-visible:ring-offset-2',
              'disabled:opacity-60 disabled:pointer-events-none',
              dark
                ? 'bg-[#D4A843] text-[#000B58] hover:bg-[#c49a38] hover:shadow-lg hover:shadow-[#D4A843]/25'
                : 'bg-[#2D6A4F] text-white hover:bg-[#245c43] hover:shadow-lg hover:shadow-[#2D6A4F]/20',
            ].join(' ')}
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Subscribing…
              </span>
            ) : (
              buttonLabel
            )}
          </button>
        </div>

        {/* Inline error */}
        {errorMsg && (
          <p
            className="mt-2 flex items-center gap-1.5 text-xs text-[#C05021]"
            role="alert"
          >
            <svg
              className="h-3.5 w-3.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {errorMsg}
          </p>
        )}

        {/* Privacy note */}
        <p className={['mt-3 text-xs', descColor].join(' ')}>
          No spam, ever. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}
