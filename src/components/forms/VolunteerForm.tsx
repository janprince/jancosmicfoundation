"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { submitVolunteerApplication } from "@/lib/api";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    centrePreference: "",
    skills: "",
    availability: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const result = await submitVolunteerApplication(formData);
    if (result.ok) {
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", centrePreference: "", skills: "", availability: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="text-center py-12">
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vol-name" className="field-label">
            Full name
          </label>
          <input
            id="vol-name"
            type="text"
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
            Phone Number
          </label>
          <input
            id="vol-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="field"
            placeholder="+233 XXX XXX XXX"
          />
        </div>
        <div>
          <label htmlFor="vol-centre" className="field-label">
            Preferred Centre
          </label>
          <select
            id="vol-centre"
            value={formData.centrePreference}
            onChange={(e) => setFormData({ ...formData, centrePreference: e.target.value })}
            className="field"
          >
            <option value="">Select a centre</option>
            <option value="accra">Accra, Ghana</option>
            <option value="kumasi">Kumasi, Ghana</option>
            <option value="london">London, UK</option>
            <option value="toronto">Toronto, Canada</option>
            <option value="new-york">New York, USA</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="vol-skills" className="field-label">
          Skills and experience
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
          Availability
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
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
        {status === "sending" ? "Submitting..." : "Send volunteer message"}
      </Button>
    </form>
  );
}
