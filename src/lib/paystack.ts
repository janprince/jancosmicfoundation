export const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;

export interface PaystackConfig {
  email: string;
  amount: number; // in pesewas (smallest currency unit)
  currency?: string;
  reference?: string;
  metadata?: Record<string, unknown>;
}

export function generateReference(): string {
  return `JCF-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
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

export const MIN_DONATION = 1;
export const MAX_DONATION = 50000;
