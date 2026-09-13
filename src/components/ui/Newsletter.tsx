'use client';

import { FormEvent, useState } from 'react';
import { CheckCircle, CircleNotch, EnvelopeSimple, WarningCircle } from '@phosphor-icons/react';

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
  heading = 'Letters for sincere seekers',
  description = 'Occasional teachings, retreat dates, service updates, and Foundation notes. Sent only when there is something useful to share.',
  placeholder = 'Your email',
  buttonLabel = 'Subscribe',
  className = '',
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const headingColor = dark ? 'text-white' : 'text-navy';
  const descColor = dark ? 'text-white/85' : 'text-[#1c1a26]/75';
  const inputBg = dark
    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#D4A843] focus:bg-white/15'
    : 'bg-white border-line text-[#1c1a26] placeholder:text-[#1c1a26]/60 focus:border-primary';

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
          'w-full rounded-card p-6 text-center sm:p-8',
          dark ? 'bg-white/10' : 'bg-sand',
          className,
        ].join(' ')}
        role="status"
        aria-live="polite"
      >
        {/* Checkmark icon */}
        <CheckCircle size={56} weight="light" className={['mx-auto mb-4 block', dark ? 'text-gold' : 'text-gold-ink'].join(' ')} aria-hidden="true" />
        <h3 className={['display text-2xl', headingColor].join(' ')}>
          You&rsquo;re on the list.
        </h3>
        <p className={['mt-2 text-sm', descColor].join(' ')}>
          Thank you. We&rsquo;ll write when there is something useful to share.
        </p>
        <button
          onClick={handleReset}
          className={[
            'mt-4 text-sm font-medium underline underline-offset-2 transition-opacity hover:opacity-70',
            dark ? 'text-[#D4A843]' : 'text-primary',
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
        <h3 className={['display mb-2 text-2xl sm:text-[1.7rem]', headingColor].join(' ')}>
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
            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
              <EnvelopeSimple size={18} className={dark ? 'text-white/60' : 'text-navy/50'} aria-hidden="true" />
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
                'w-full rounded-full border py-3 pl-11 pr-5 text-sm outline-none',
                'transition-all duration-200 focus:ring-2 focus:ring-primary/20',
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
              'shrink-0 rounded-full px-6 py-3 text-sm font-semibold',
              'transition-all duration-300 ',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843] focus-visible:ring-offset-2',
              'disabled:opacity-60 disabled:pointer-events-none',
              dark
                ? 'bg-[#D4A843] text-navy hover:bg-[#c49a38]  '
                : 'bg-primary text-white hover:bg-[#1f1f57]  ',
            ].join(' ')}
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <CircleNotch size={16} className="animate-spin" aria-hidden="true" />
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
            <WarningCircle size={14} className="shrink-0" aria-hidden="true" />
            {errorMsg}
          </p>
        )}

        {/* Privacy note */}
        <p className={['mt-3 text-xs', descColor].join(' ')}>
          We write rarely, and only when there is something worth your attention.
        </p>
      </form>
    </div>
  );
}
