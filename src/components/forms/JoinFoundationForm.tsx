'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { TelegramLogo, CheckCircle } from '@phosphor-icons/react';
import { submitJoinFoundation } from '@/lib/api';
import { siteConfig } from '@/lib/site-config';
import type { JoinFoundationFormData } from '@/types';

const emptyForm: JoinFoundationFormData = { name: '', email: '', phone: '', country: '', region: '' };

export default function JoinFoundationForm() {
  const [details, setDetails] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const sending = useRef(false);
  const confirmation = useRef<HTMLDivElement>(null);
  const errorNotice = useRef<HTMLParagraphElement>(null);
  const busy = status === 'sending';

  useEffect(() => {
    if (status === 'success') confirmation.current?.focus();
    if (status === 'error') errorNotice.current?.focus();
  }, [status]);

  function update(field: keyof JoinFoundationFormData, value: string) {
    setDetails(current => ({ ...current, [field]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const data: JoinFoundationFormData = {
      name: details.name.trim(), email: details.email.trim(), phone: details.phone.trim(),
      country: details.country.trim(), region: details.region.trim(),
    };
    if (!data.name || !data.country) {
      setError('Please enter your name and country.');
      setStatus('error');
      return;
    }
    sending.current = true;
    setError('');
    setStatus('sending');
    try {
      const result = await submitJoinFoundation(data);
      if (!result.ok) {
        setError(result.error || 'We couldn’t save your details. Please try again.');
        setStatus('error');
        return;
      }
      setDetails(emptyForm);
      setStatus('success');
    } catch {
      setError('We couldn’t confirm your registration. Please try again or contact the Foundation.');
      setStatus('error');
    } finally {
      sending.current = false;
    }
  }

  if (status === 'success') return <div ref={confirmation} tabIndex={-1} role="status" className="space-y-5">
    <CheckCircle size={42} weight="light" className="text-gold-ink" aria-hidden="true" />
    <p className="form-note">Your details have been received</p>
    <h2 id="join-form-title" className="text-3xl sm:text-4xl">Welcome to the community</h2>
    <p className="text-muted">Your next step is to join our Telegram group. Connect with fellow seekers and receive teachings, gathering announcements, and news from the Foundation.</p>
    <a href={siteConfig.social.telegramGroup} target="_blank" rel="noopener noreferrer" className="button w-full"><TelegramLogo size={22} weight="light" aria-hidden="true" />Join the Telegram group</a>
    <p className="form-note">Opens Telegram in a new tab. You’ll need a Telegram account to join. This invitation will stay here while you open the app.</p>
    <p className="form-note">Already in the group? <Link href="/teachings">Explore the teachings</Link> or <Link href="/events">see upcoming gatherings</Link>.</p>
    <Link href="/contact?subject=Joining+the+Foundation#enquiry" className="text-link">Get help joining</Link>
  </div>;

  return <form onSubmit={submit} aria-labelledby="join-form-title" aria-busy={busy} className="space-y-5">
    <div><h2 id="join-form-title" className="text-3xl">A little about you</h2><p className="form-note mt-2">Share your details to join the community. Optional fields are marked.</p></div>
    <fieldset disabled={busy} className="space-y-5">
      <legend className="sr-only">Your contact details and location</legend>
      <div><label htmlFor="member-name" className="field-label">Full name</label><input id="member-name" name="name" autoComplete="name" required maxLength={150} className="field" value={details.name} onChange={e => update('name', e.target.value)} /></div>
      <div><label htmlFor="member-email" className="field-label">Email address</label><input id="member-email" name="email" type="email" autoComplete="email" required maxLength={254} className="field" value={details.email} onChange={e => update('email', e.target.value)} /></div>
      <div><label htmlFor="member-phone" className="field-label">Phone number <span className="text-muted font-normal">(optional)</span></label><input id="member-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className="field" aria-describedby="member-phone-help" value={details.phone} onChange={e => update('phone', e.target.value)} /><p id="member-phone-help" className="form-note mt-2">Include your country code, for example +233.</p></div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="member-country" className="field-label">Country</label><input id="member-country" name="country" autoComplete="country-name" required maxLength={100} className="field" value={details.country} onChange={e => update('country', e.target.value)} /></div>
        <div><label htmlFor="member-region" className="field-label">Region / state <span className="text-muted font-normal">(optional)</span></label><input id="member-region" name="region" autoComplete="address-level1" maxLength={100} className="field" value={details.region} onChange={e => update('region', e.target.value)} /></div>
      </div>
    </fieldset>
    <p className="form-note">We use these details to register your interest in the Foundation and connect with you about its community and activities. <Link href="/privacy-policy">Privacy information</Link></p>
    {status === 'error' && <p ref={errorNotice} tabIndex={-1} role="alert" className="form-feedback error">{error} <Link href="/contact?subject=Joining+the+Foundation#enquiry" className="underline">Get help joining</Link>.</p>}
    <button type="submit" disabled={busy} className="button w-full">{busy ? 'Sending your details…' : 'Continue to Telegram'}</button>
    <p className="form-note text-center" role="status">{busy ? 'Please wait while we save your details.' : 'After submitting, your invitation appears here.'}</p>
  </form>;
}
