"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { submitVolunteerApplication } from "@/lib/api";

import type { Centre, VolunteerOpportunity } from "@/types";

export default function VolunteerForm({ centres, opportunities, initialRole = "" }: { centres: Centre[]; opportunities: VolunteerOpportunity[]; initialRole?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    centrePreference: "",
    skills: "",
    availability: "",
    message: "",
    opportunity: initialRole,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const sending = useRef(false);
  const confirmation = useRef<HTMLDivElement>(null);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => { if (status === 'sent') confirmation.current?.focus(); }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setErrorMessage('');
    setStatus("sending");
    const result = await submitVolunteerApplication({ ...formData, message: [formData.opportunity ? `Role: ${formData.opportunity}` : "", formData.message].filter(Boolean).join("\n\n") });
    sending.current = false;
    if (result.ok) {
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", centrePreference: "", skills: "", availability: "", message: "", opportunity: "" });
    } else {
      setErrorMessage(result.error || "We could not send this message. Please try again, or contact the Foundation by phone or email.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div ref={confirmation} tabIndex={-1} role="status" className="text-center py-12">
        <CheckCircle size={64} weight="light" className="mx-auto mb-4 block text-gold-ink" aria-hidden="true" />
        <h3 className="font-serif text-3xl text-navy">Thank you</h3>
        <p className="mt-2 text-gray-600">
          We have received your volunteer message and will be in touch soon.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-primary font-medium hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form aria-busy={status === "sending"} onSubmit={handleSubmit} className="space-y-5">
      {opportunities.length > 0 && <div><label htmlFor="vol-role" className="field-label">Area of interest (optional)</label><select id="vol-role" className="field" value={formData.opportunity} onChange={e => setFormData({ ...formData, opportunity: e.target.value })}><option value="">General expression of interest</option>{opportunities.map(role => <option key={role.id} value={role.title}>{role.title}</option>)}</select></div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vol-name" className="field-label">
            Full name
          </label>
          <input
            id="vol-name"
            type="text"
            autoComplete="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="field"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="vol-email" className="field-label">
            Email address
          </label>
          <input
            id="vol-email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="field"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vol-phone" className="field-label">
            Phone number (optional)
          </label>
          <input
            id="vol-phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="field"
            placeholder="+233 XXX XXX XXX"
          />
        </div>
        <div>
          <label htmlFor="vol-centre" className="field-label">
            Preferred centre (optional)
          </label>
          <select
            id="vol-centre"
            value={formData.centrePreference}
            onChange={(e) => setFormData({ ...formData, centrePreference: e.target.value })}
            className="field"
          >
            <option value="">Select a centre</option>
            <option value="remote">Remote / no centre preference</option>
            {centres.map(centre => <option key={centre.id} value={centre.slug}>{centre.name}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="vol-skills" className="field-label">
          Skills and experience (optional)
        </label>
        <input
          id="vol-skills"
          type="text"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          className="field"
          placeholder="e.g., teaching, events, IT, writing, care..."
        />
      </div>
      <div>
        <label htmlFor="vol-availability" className="field-label">
          Availability (optional)
        </label>
        <select
          id="vol-availability"
          value={formData.availability}
          onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
          className="field"
        >
          <option value="">Select availability</option>
          <option value="weekdays">Weekdays</option>
          <option value="weekends">Weekends</option>
          <option value="both">Both Weekdays & Weekends</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>
      <div>
        <label htmlFor="vol-message" className="field-label">
          What draws you to volunteer? (Optional)
        </label>
        <textarea
          id="vol-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="field"
          placeholder="Tell us what you feel called to offer..."
        />
      </div>
      {status === "error" && (
        <p role="alert" className="form-feedback error">{errorMessage}</p>
      )}
      <p className="form-note">Your details are used to respond to this enquiry. <Link href="/privacy-policy">Privacy information</Link></p>
      <Button disabled={status === "sending"} type="submit" variant="primary" size="lg" className="w-full md:w-auto">
        {status === "sending" ? "Submitting..." : "Send volunteer message"}
      </Button>
    </form>
  );
}
