"use client";

import dynamic from "next/dynamic";

const DonationCheckout = dynamic(
  () => import("@/components/forms/DonationCheckout"),
  { ssr: false }
);

interface Props {
  causeTitle: string;
  causeId: string;
}

export default function DonationCheckoutWrapper({ causeTitle, causeId }: Props) {
  return <DonationCheckout causeTitle={causeTitle} causeId={causeId} />;
}
