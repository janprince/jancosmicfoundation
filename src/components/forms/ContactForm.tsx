"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { submitContactForm } from "@/lib/api";

export default function ContactForm({ initialSubject = "" }: { initialSubject?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: initialSubject,
    message: "",
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
    const result = await submitContactForm(formData);
    sending.current = false;
    if (result.ok) {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setErrorMessage(result.error || "We could not send this message. Please try again, or contact the Foundation by phone or email.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div ref={confirmation} tabIndex={-1} role="status" className="text-center py-12">
        <CheckCircle size={64} weight="light" className="mx-auto mb-4 block text-gold-ink" aria-hidden="true" />
        <h3 className="font-serif text-3xl text-navy">Message sent</h3>
        <p className="mt-2 text-gray-600">
          Thank you for writing to the Foundation. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-primary font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form aria-busy={status === "sending"} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="field-label">
            Full name
          </label>
          <input
            id="name"
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
          <label htmlFor="email" className="field-label">
            Email address
          </label>
          <input
            id="email"
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
      <div>
        <label htmlFor="subject" className="field-label">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="field"
          placeholder="Teachings, centres, volunteering, events..."
        />
      </div>
      <div>
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="field"
          placeholder="Write your message..."
        />
      </div>
      {status === "error" && (
        <p role="alert" className="form-feedback error">{errorMessage}</p>
      )}
      <p className="form-note">Your details are used to respond to this enquiry. <Link href="/privacy-policy">Privacy information</Link></p>
      <Button disabled={status === "sending"} type="submit" variant="primary" size="lg" className="w-full md:w-auto">
        {status === "sending" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
