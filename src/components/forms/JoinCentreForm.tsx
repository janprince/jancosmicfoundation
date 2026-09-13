"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { submitJoinCentreRequest } from "@/lib/api";

interface JoinCentreFormProps {
  centreName: string;
  centreId: string;
}

export default function JoinCentreForm({ centreName, centreId }: JoinCentreFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const result = await submitJoinCentreRequest({ ...formData, centreId });
    if (result.ok) {
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="text-center py-8">
        <CheckCircle size={64} weight="light" className="mx-auto mb-4 block text-gold-ink" aria-hidden="true" />
        <h3 className="font-serif text-3xl text-navy">Request received</h3>
        <p className="mt-2 text-gray-600">
          Your message about {centreName} has been received. Someone from the centre will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="join-name" className="field-label">
          Full name
        </label>
        <input
          id="join-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="field"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="join-email" className="field-label">
          Email
        </label>
        <input
          id="join-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="field"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="join-phone" className="field-label">
          Phone
        </label>
        <input
          id="join-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="field"
          placeholder="+233 XXX XXX XXX"
        />
      </div>
      <div>
        <label htmlFor="join-message" className="field-label">
          Message (optional)
        </label>
        <textarea
          id="join-message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="field"
          placeholder="Tell us what draws you to this centre..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" variant="primary" size="md" className="w-full">
        {status === "sending" ? "Submitting..." : `Join ${centreName}`}
      </Button>
    </form>
  );
}
