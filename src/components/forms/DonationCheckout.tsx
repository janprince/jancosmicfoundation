'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePaystackPayment } from 'react-paystack';
import { PAYSTACK_PUBLIC_KEY, PRESET_AMOUNTS, MIN_DONATION, MAX_DONATION, generateReference, formatAmount } from '@/lib/paystack';
import { verifyDonation } from '@/lib/api';
import { siteConfig } from '@/lib/site-config';

interface Transaction { amount: number; email: string; reference: string; }
type State = 'idle' | 'paying' | 'verifying' | 'success' | 'pending' | 'error';

function PaymentButton({ transaction, causeId, causeTitle, onStart, onSuccess, onClose, onError }: {
  transaction: Transaction; causeId: string; causeTitle: string;
  onStart: () => void; onSuccess: () => void; onClose: () => void; onError: () => void;
}) {
  const started = useRef(false);
  const initialize = usePaystackPayment({
    reference: transaction.reference, email: transaction.email, amount: Math.round(transaction.amount * 100),
    publicKey: PAYSTACK_PUBLIC_KEY, currency: 'GHS',
    metadata: { custom_fields: [{ display_name: 'Cause', variable_name: 'cause', value: causeTitle }, { display_name: 'Cause ID', variable_name: 'cause_id', value: causeId }] },
  });
  return <button type="button" className="button w-full" onClick={() => {
    if (started.current) return;
    started.current = true;
    onStart();
    try { initialize({ onSuccess, onClose }); } catch { started.current = false; onError(); }
  }}>Donate {formatAmount(transaction.amount)}</button>;
}

export default function DonationCheckout({ causeTitle, causeId }: { causeTitle: string; causeId: string }) {
  const [amount, setAmount] = useState(100);
  const [custom, setCustom] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');
  const [reference, setReference] = useState(generateReference);
  const [submitted, setSubmitted] = useState<Transaction | null>(null);
  const confirmation = useRef<HTMLDivElement>(null);
  const inProgress = useRef(false);
  const finalAmount = custom === null ? amount : Number(custom);
  const amountValid = Number.isFinite(finalAmount) && finalAmount >= MIN_DONATION && finalAmount <= MAX_DONATION && Math.abs(finalAmount * 100 - Math.round(finalAmount * 100)) < .00001;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const busy = state === 'paying' || state === 'verifying';
  const transaction = { amount: finalAmount, email: email.trim(), reference };
  useEffect(() => { if (state === 'success' || state === 'pending') confirmation.current?.focus(); }, [state]);

  async function confirm(paid: Transaction) {
    setSubmitted(paid);
    setState('verifying');
    const result = await verifyDonation({ reference: paid.reference, cause_id: causeId });
    inProgress.current = false;
    setState(result.ok ? 'success' : 'pending');
  }
  function close() {
    inProgress.current = false;
    setState('idle');
    setReference(generateReference());
  }

  if (!PAYSTACK_PUBLIC_KEY) return <div className="space-y-4"><h3 className="text-2xl">Giving enquiries</h3><p className="text-muted">Online giving is currently unavailable. Contact the Foundation for help supporting this work.</p><Link href={`/contact?subject=${encodeURIComponent(`Giving to ${causeTitle}`)}#enquiry`} className="button outline">Contact about giving</Link></div>;

  if ((state === 'success' || state === 'pending') && submitted) return <div ref={confirmation} tabIndex={-1} role="status" className="space-y-4">
    <h3 className="text-3xl">{state === 'success' ? 'Thank you for your gift' : 'Your payment is being confirmed'}</h3>
    <p>{formatAmount(submitted.amount)} for {causeTitle}.</p>
    <p className="form-note">{state === 'success' ? 'Your donation has been confirmed. Please check your email for payment information.' : 'Please keep this reference. You do not need to make another payment while confirmation is pending.'}</p>
    <p className="text-sm break-all"><strong>Reference:</strong> {submitted.reference}</p>
    <a className="text-link" href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Donation enquiry: ${submitted.reference}`)}`}>Get help with this donation</a>
    {state === 'success' && <button className="button outline mt-4" onClick={close}>Make another donation</button>}
  </div>;

  const guidance = !amountValid ? 'Enter a valid amount to continue' : !emailValid ? 'Enter your email to continue' : '';
  return <div className="space-y-5" aria-busy={busy}>
    <fieldset disabled={busy} className="space-y-5">
      <legend className="field-label mb-3">Donation amount (GHS)</legend>
      <div className="grid grid-cols-3 gap-2" role="group" aria-label="Choose a donation amount">
        {PRESET_AMOUNTS.map(value => <button type="button" key={value} aria-pressed={custom === null && value === amount} onClick={() => { setAmount(value); setCustom(null); }} className={`min-h-11 rounded-full border px-1 text-sm font-medium ${custom === null && value === amount ? 'bg-navy text-white border-navy' : 'border-[#8b8793] text-navy'}`}>GH₵{value.toLocaleString('en-GH')}</button>)}
        <button type="button" aria-pressed={custom !== null} onClick={() => setCustom('')} className={`min-h-11 rounded-full border px-1 text-sm ${custom !== null ? 'bg-navy text-white border-navy' : 'border-[#8b8793] text-navy'}`}>Custom</button>
      </div>
      {custom !== null && <div><label htmlFor="custom-amount" className="field-label">Your amount (GHS)</label><input id="custom-amount" className="field" type="number" inputMode="decimal" min={MIN_DONATION} max={MAX_DONATION} step="0.01" value={custom} onChange={event => setCustom(event.target.value)} aria-describedby="amount-help" aria-invalid={custom !== '' && !amountValid} /><p id="amount-help" className={`mt-2 text-sm ${custom !== '' && !amountValid ? 'text-[#922f15]' : 'text-muted'}`}>GH₵{MIN_DONATION} to GH₵{MAX_DONATION.toLocaleString()}, with up to two decimal places.</p></div>}
      <div><label htmlFor="donor-email" className="field-label">Email address</label><input id="donor-email" type="email" autoComplete="email" className="field" required value={email} onChange={event => setEmail(event.target.value)} aria-describedby="donor-email-help" /><p id="donor-email-help" className="form-note mt-2">For your payment confirmation.</p></div>
    </fieldset>
    {busy ? <p role="status" className="form-feedback">{state === 'verifying' ? 'Confirming your payment…' : 'Complete your payment in the Paystack window.'}</p> : guidance ? <><button disabled className="button w-full">Continue to payment</button><p role="status" className="form-note">{guidance}.</p></> : <PaymentButton transaction={transaction} causeId={causeId} causeTitle={causeTitle} onStart={() => { if (!inProgress.current) { inProgress.current = true; setState('paying'); } }} onSuccess={() => confirm(transaction)} onClose={close} onError={() => { inProgress.current = false; setState('error'); }} />}
    {state === 'error' && <p role="alert" className="form-feedback error">The payment window could not open. Try again, or contact the Foundation for help.</p>}
    <p className="form-note">Payments are handled by Paystack in Ghana cedis. <Link className="underline" href="/privacy-policy">Privacy information</Link></p>
  </div>;
}
