"use client";

import { useState, useRef } from "react";
import { usePaystackPayment } from "react-paystack";
import { PAYSTACK_PUBLIC_KEY, PRESET_AMOUNTS, MIN_DONATION, MAX_DONATION, generateReference, formatAmount } from "@/lib/paystack";
import { verifyDonation } from "@/lib/api";
import Button from "@/components/ui/Button";

interface DonationCheckoutProps {
  causeTitle: string;
  causeId: string;
}

function PaystackButton({ amount, email, causeId, causeTitle, reference, onSuccess, onClose }: {
  amount: number;
  email: string;
  causeId: string;
  causeTitle: string;
  reference: string;
  onSuccess: (ref: string) => void;
  onClose: () => void;
}) {
  const config = {
    reference,
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
          onSuccess: () => onSuccess(reference),
          onClose,
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
  const [state, setState] = useState<"idle" | "verifying" | "success" | "pending" | "error">("idle");
  const referenceRef = useRef(generateReference());

  const finalAmount = isCustom ? Number(customAmount) : selectedAmount;

  async function handlePaymentSuccess(reference: string) {
    setState("verifying");
    try {
      const result = await verifyDonation({ reference, cause_id: causeId });
      if (result.ok) {
        setState("success");
      } else {
        // Payment went through Paystack but backend verification failed.
        // Show a pending state — the webhook will catch it as a safety net.
        setState("pending");
      }
    } catch {
      // Network/server error — payment already went through Paystack,
      // so treat as pending rather than error to avoid alarming the donor.
      setState("pending");
    }
  }

  function handlePaymentClose() {
    // User closed the Paystack modal without completing — generate a fresh reference
    // so the next attempt doesn't reuse a potentially abandoned one.
    referenceRef.current = generateReference();
  }

  if (state === "success") {
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
          onClick={() => {
            setState("idle");
            referenceRef.current = generateReference();
          }}
          className="mt-6 text-primary font-medium hover:underline"
        >
          Make another donation
        </button>
      </div>
    );
  }

  if (state === "pending") {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-[#D4A843]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl text-[#D4A843]">&#10003;</span>
        </div>
        <h3 className="text-2xl font-semibold text-[#000B58]">Payment Received</h3>
        <p className="mt-2 text-gray-600">
          Your donation of {formatAmount(finalAmount)} to {causeTitle} is being confirmed.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          You&apos;ll receive a confirmation email shortly. If you have any concerns, please contact us.
        </p>
        <button
          onClick={() => {
            setState("idle");
            referenceRef.current = generateReference();
          }}
          className="mt-6 text-primary font-medium hover:underline"
        >
          Make another donation
        </button>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl text-red-500">!</span>
        </div>
        <h3 className="text-xl font-semibold text-[#000B58]">Something went wrong</h3>
        <p className="mt-2 text-sm text-gray-600">We couldn&apos;t process your donation. Please try again or contact us for help.</p>
        <button
          onClick={() => {
            setState("idle");
            referenceRef.current = generateReference();
          }}
          className="mt-6 text-primary font-medium hover:underline"
        >
          Try again
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
            min={MIN_DONATION}
            max={MAX_DONATION}
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder={`GH₵${MIN_DONATION} – GH₵${MAX_DONATION.toLocaleString()}`}
          />
          {customAmount && (Number(customAmount) < MIN_DONATION || Number(customAmount) > MAX_DONATION) && (
            <p className="mt-1 text-sm text-red-500">
              Amount must be between GH₵{MIN_DONATION} and GH₵{MAX_DONATION.toLocaleString()}
            </p>
          )}
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

      {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && finalAmount >= MIN_DONATION && finalAmount <= MAX_DONATION ? (
        state === "verifying" ? (
          <Button variant="primary" size="lg" className="w-full opacity-75" disabled>
            Verifying payment...
          </Button>
        ) : (
          <PaystackButton
            amount={finalAmount}
            email={email}
            causeId={causeId}
            causeTitle={causeTitle}
            reference={referenceRef.current}
            onSuccess={handlePaymentSuccess}
            onClose={handlePaymentClose}
          />
        )
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
