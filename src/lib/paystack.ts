export const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

export interface PaystackConfig {
  email: string;
  amount: number; // in pesewas (smallest currency unit)
  currency?: string;
  reference?: string;
  metadata?: Record<string, unknown>;
}

export function generateReference(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `JCF-${timestamp}-${random}`;
}

export function formatAmount(amount: number, currency: string = "GHS"): string {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export const PRESET_AMOUNTS = [50, 100, 200, 500, 1000];
