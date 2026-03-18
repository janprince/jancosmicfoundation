"use client";

import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { PAYSTACK_PUBLIC_KEY, PRESET_AMOUNTS, generateReference, formatAmount } from "@/lib/paystack";
import Button from "@/components/ui/Button";

interface DonationCheckoutProps {
  causeTitle: string;
  causeId: string;
}

function PaystackButton({ amount, email, causeId, causeTitle, onSuccess }: {
  amount: number;
  email: string;
  causeId: string;
  causeTitle: string;
  onSuccess: () => void;
}) {
  const config = {
    reference: generateReference(),
    email,
    amount: amount * 100, // Convert to pesewas
    publicKey: PAYSTACK_PUBLIC_KEY,
    currency: "GHS",
    metadata: {
      custom_fields: [
        { display_name: "Cause", variable_name: "cause", value: causeTitle },
        { display_name: "Cause ID", variable_name: "cause_id", value: causeId },
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <Button
      type="button"
      variant="primary"
      size="lg"
      className="w-full"
      onClick={() => {
        initializePayment({
          onSuccess: () => onSuccess(),
          onClose: () => {},
        });
      }}
    >
      Donate {formatAmount(amount)}
    </Button>
  );
}

export default function DonationCheckout({ causeTitle, causeId }: DonationCheckoutProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [donated, setDonated] = useState(false);

  const finalAmount = isCustom ? Number(customAmount) : selectedAmount;

  if (donated) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl text-primary">&#10003;</span>
        </div>
        <h3 className="text-2xl font-semibold text-[#000B58]">Thank You!</h3>
        <p className="mt-2 text-gray-600">
          Your generous donation of {formatAmount(finalAmount)} to {causeTitle} has been received.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          A receipt has been sent to your email.
        </p>
        <button
          onClick={() => setDonated(false)}
          className="mt-6 text-primary font-medium hover:underline"
        >
          Make another donation
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select Amount (GHS)
        </label>
        <div className="grid grid-cols-3 gap-3">
          {PRESET_AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => {
                setSelectedAmount(amount);
                setIsCustom(false);
              }}
              className={`py-3 px-4 rounded-xl border-2 text-center font-semibold transition-all ${
                !isCustom && selectedAmount === amount
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-gray-200 text-gray-600 hover:border-primary/40"
              }`}
            >
              GH₵{amount}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setIsCustom(true)}
            className={`py-3 px-4 rounded-xl border-2 text-center font-semibold transition-all ${
              isCustom
                ? "border-primary bg-primary/5 text-primary"
                : "border-gray-200 text-gray-600 hover:border-primary/40"
            }`}
          >
            Custom
          </button>
        </div>
      </div>

      {isCustom && (
        <div>
          <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1.5">
            Enter Amount (GHS)
          </label>
          <input
            id="custom-amount"
            type="number"
            min="1"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Enter amount"
          />
        </div>
      )}

      <div>
        <label htmlFor="donor-email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address
        </label>
        <input
          id="donor-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="your@email.com (for receipt)"
        />
      </div>

      {email && finalAmount > 0 ? (
        <PaystackButton
          amount={finalAmount}
          email={email}
          causeId={causeId}
          causeTitle={causeTitle}
          onSuccess={() => setDonated(true)}
        />
      ) : (
        <Button variant="primary" size="lg" className="w-full opacity-50 cursor-not-allowed" disabled>
          Enter email to donate
        </Button>
      )}

      <p className="text-xs text-gray-400 text-center">
        Payments processed securely via Paystack. Your donation is tax-deductible.
      </p>
    </div>
  );
}
