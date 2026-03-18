"use client";

import { useState } from "react";
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
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl text-primary">&#10003;</span>
        </div>
        <h3 className="text-xl font-semibold text-[#000B58]">Request Submitted!</h3>
        <p className="mt-2 text-gray-600">
          Your request to join {centreName} has been submitted. The centre leader will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="join-name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name
        </label>
        <input
          id="join-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="join-email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email
        </label>
        <input
          id="join-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="join-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone
        </label>
        <input
          id="join-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="+233 XXX XXX XXX"
        />
      </div>
      <div>
        <label htmlFor="join-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message (Optional)
        </label>
        <textarea
          id="join-message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
          placeholder="Tell us about yourself..."
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
