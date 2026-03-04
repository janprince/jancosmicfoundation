'use client';

import { useState, FormEvent } from 'react';
import { HiArrowRight } from 'react-icons/hi2';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Placeholder — wire up to your actual API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p
        className="text-sm py-3 px-4 rounded-lg font-medium"
        style={{ backgroundColor: 'rgba(45,106,79,0.25)', color: '#86efac' }}
      >
        Thank you for subscribing! We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-2">
        <div className="relative">
          <label htmlFor="footer-newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="footer-newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading'}
            className={[
              'w-full px-4 py-2.5 pr-12 rounded-lg text-sm',
              'bg-white/8 border border-white/15 text-white placeholder-white/35',
              'focus:outline-none focus:border-[#D4A843] focus:ring-1 focus:ring-[#D4A843]',
              'transition-colors duration-150',
              'disabled:opacity-60',
            ].join(' ')}
          />
          <button
            type="submit"
            disabled={status === 'loading' || !email}
            aria-label="Subscribe to newsletter"
            className={[
              'absolute right-1.5 top-1/2 -translate-y-1/2',
              'flex items-center justify-center w-8 h-8 rounded-md',
              'transition-all duration-150 disabled:opacity-40',
            ].join(' ')}
            style={{ backgroundColor: '#2D6A4F' }}
          >
            {status === 'loading' ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin block" />
            ) : (
              <HiArrowRight className="w-4 h-4 text-white" />
            )}
          </button>
        </div>

        {status === 'error' && (
          <p className="text-xs" style={{ color: '#fca5a5' }}>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
