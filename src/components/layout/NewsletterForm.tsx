'use client';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { submitNewsletter } from '@/lib/api';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    try {
      const result = await submitNewsletter({ email });
      setStatus(result.ok ? 'success' : 'error');
      if (result.ok) setEmail('');
    } catch { setStatus('error'); }
  }
  return <form className="footer-newsletter" onSubmit={submit}>
    {status !== 'success' && <><label htmlFor="footer-newsletter-email">Email address</label><input id="footer-newsletter-email" type="email" name="email" autoComplete="email" required value={email} onChange={event => setEmail(event.target.value)} disabled={status === 'loading'} /><button className="button" disabled={status === 'loading'} type="submit">{status === 'loading' ? 'Subscribing…' : 'Subscribe'}</button></>}
    <p className="form-note !text-white/80">Contact the Foundation to update your subscription. <Link href="/privacy-policy" className="!inline underline">Privacy information</Link></p>
    <p role="status">{status === 'success' ? 'Thank you. You are subscribed to updates from the Foundation.' : status === 'error' ? 'We could not save your subscription. Please try again.' : ''}</p>
  </form>;
}
