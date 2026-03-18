"use client";

import { useState } from "react";
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
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl text-primary">&#10003;</span>
        </div>
        <h3 className="text-xl font-semibold text-[#000B58]">Application Submitted!</h3>
        <p className="mt-2 text-gray-600">
          Thank you for your interest in volunteering. We&apos;ll be in touch soon.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-primary font-medium hover:underline">
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vol-name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name
          </label>
          <input
            id="vol-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="vol-email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address
          </label>
          <input
            id="vol-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vol-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="vol-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="+233 XXX XXX XXX"
          />
        </div>
        <div>
          <label htmlFor="vol-centre" className="block text-sm font-medium text-gray-700 mb-1.5">
            Preferred Centre
          </label>
          <select
            id="vol-centre"
            value={formData.centrePreference}
            onChange={(e) => setFormData({ ...formData, centrePreference: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
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
        <label htmlFor="vol-skills" className="block text-sm font-medium text-gray-700 mb-1.5">
          Skills & Expertise
        </label>
        <input
          id="vol-skills"
          type="text"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="e.g., Teaching, Event Planning, IT, Medical..."
        />
      </div>
      <div>
        <label htmlFor="vol-availability" className="block text-sm font-medium text-gray-700 mb-1.5">
          Availability
        </label>
        <select
          id="vol-availability"
          value={formData.availability}
          onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
        >
          <option value="">Select availability</option>
          <option value="weekdays">Weekdays</option>
          <option value="weekends">Weekends</option>
          <option value="both">Both Weekdays & Weekends</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>
      <div>
        <label htmlFor="vol-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Why would you like to volunteer? (Optional)
        </label>
        <textarea
          id="vol-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
          placeholder="Tell us about your motivation..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
        {status === "sending" ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
