"use client";

import { useState } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { usePaystackPayment } from "react-paystack";
import { PAYSTACK_PUBLIC_KEY, PRESET_AMOUNTS, MIN_DONATION, MAX_DONATION, generateReference, formatAmount } from "@/lib/paystack";
import { verifyDonation } from "@/lib/api";
import Button from "@/components/ui/Button";

// Sized for the narrow donation sidebar: three columns must fit "GH₵1,000" without clipping.
const amountButton =
  "flex min-h-11 items-center justify-center whitespace-nowrap rounded-full border px-2 text-sm font-semibold tabular-nums transition-colors duration-200";
const amountActive = "border-navy bg-navy text-white";
const amountIdle = "border-line bg-white text-navy hover:border-navy/40";

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
  const [reference, setReference] = useState(generateReference);

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
    setReference(generateReference());
  }

  if (state === "success") {
    return (
      <div className="text-center py-8">
        <CheckCircle size={64} weight="light" className="mx-auto mb-4 block text-gold-ink" aria-hidden="true" />
        <h3 className="font-serif text-3xl text-navy">Thank you</h3>
        <p className="mt-2 text-gray-600">
          Your donation of {formatAmount(finalAmount)} to {causeTitle} has been received.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          A receipt has been sent to your email.
        </p>
        <button
          onClick={() => {
            setState("idle");
            setReference(generateReference());
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
        <CheckCircle size={64} weight="light" className="mx-auto mb-4 block text-gold-ink" aria-hidden="true" />
        <h3 className="font-serif text-3xl text-navy">Payment Received</h3>
        <p className="mt-2 text-gray-600">
          Your donation of {formatAmount(finalAmount)} to {causeTitle} is being confirmed.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          You&apos;ll receive a confirmation email shortly. If you have any concerns, please contact us.
        </p>
        <button
          onClick={() => {
            setState("idle");
            setReference(generateReference());
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
        <WarningCircle size={64} weight="light" className="mx-auto mb-4 block text-accent" aria-hidden="true" />
        <h3 className="font-serif text-3xl text-navy">Something went wrong</h3>
        <p className="mt-2 text-sm text-gray-600">We couldn&apos;t process your donation. Please try again or contact us for help.</p>
        <button
          onClick={() => {
            setState("idle");
            setReference(generateReference());
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
        <label className="field-label !mb-3">
          Select Amount (GHS)
        </label>
        <div className="grid grid-cols-3 gap-2">
          {PRESET_AMOUNTS.map((amount) => {
            const active = !isCustom && selectedAmount === amount;
            return (
              <button
                key={amount}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setSelectedAmount(amount);
                  setIsCustom(false);
                }}
                className={`${amountButton} ${active ? amountActive : amountIdle}`}
              >
                <span className={`mr-0.5 text-[11px] font-medium ${active ? "text-white/70" : "text-muted"}`}>GH₵</span>
                {amount.toLocaleString("en-GH")}
              </button>
            );
          })}
          <button
            type="button"
            aria-pressed={isCustom}
            onClick={() => setIsCustom(true)}
            className={`${amountButton} ${isCustom ? amountActive : amountIdle}`}
          >
            Custom
          </button>
        </div>
      </div>

      {isCustom && (
        <div>
          <label htmlFor="custom-amount" className="field-label">
            Enter Amount (GHS)
          </label>
          <input
            id="custom-amount"
            type="number"
            min={MIN_DONATION}
            max={MAX_DONATION}
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="field"
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
        <label htmlFor="donor-email" className="field-label">
          Email Address
        </label>
        <input
          id="donor-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="field"
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
            reference={reference}
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
        Payments are processed securely via Paystack. A receipt is sent to your email.
      </p>
    </div>
  );
}
