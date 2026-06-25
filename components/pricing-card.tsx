// components/PricingCard.tsx
import type { BillingCycle, PricingTier } from "@/types/pricing";
import Link from "next/link";

interface PricingCardProps {
  tier: PricingTier;
  cycle: BillingCycle;
}

function CheckIcon({ highlighted }: { highlighted: boolean }) {
  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
        highlighted ? "bg-white/20" : "bg-primary/10"
      }`}
    >
      <svg
        className={`h-3.5 w-3.5 ${highlighted ? "text-white" : "text-primary"}`}
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2.5 7L5.5 10L11.5 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CrossIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100">
      <svg
        className="h-3.5 w-3.5 text-gray-400"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 4L10 10M10 4L4 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function PricingCard({ tier, cycle }: PricingCardProps) {
  const { highlighted } = tier;

  // Derive display price
  const isYearly = cycle === "yearly";
  const monthlyEquivalent =
    isYearly && tier.price.yearly > 0
      ? Math.round(tier.price.yearly / 12)
      : tier.price.monthly;

  const displayAmount = tier.price.monthly === 0 ? 0 : monthlyEquivalent;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 ${
        highlighted
          ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-[1.02] z-10"
          : "bg-white text-gray-900 border border-gray-100 shadow-sm"
      }`}
    >
      {/* Header */}
      <div className="mb-6">
        <h3
          className={`text-xl font-bold mb-2 ${
            highlighted ? "text-white" : "text-gray-900"
          }`}
        >
          {tier.name}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            highlighted ? "text-white/75" : "text-gray-500"
          }`}
        >
          {tier.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6 flex items-end gap-1">
        <span
          className={`text-5xl font-extrabold tracking-tight ${
            highlighted ? "text-white" : "text-gray-900"
          }`}
        >
          ${displayAmount}
        </span>
        <span
          className={`mb-1.5 text-sm ${
            highlighted ? "text-white/70" : "text-gray-400"
          }`}
        >
          {isYearly && tier.price.yearly > 0
            ? "/ mo, billed yearly"
            : "/ Month"}
        </span>
      </div>

      {/* CTA */}
      <Link
        href={tier.cta.href}
        className={`mb-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
          highlighted
            ? "bg-white text-primary hover:bg-white/90 focus-visible:outline-white"
            : "border border-primary text-primary hover:bg-primary hover:text-white focus-visible:outline-primary"
        }`}
      >
        {tier.cta.label}
      </Link>

      {/* Divider */}
      <div
        className={`mb-6 h-px w-full ${
          highlighted ? "bg-white/20" : "bg-gray-100"
        }`}
      />

      {/* Features */}
      <ul className="flex flex-col gap-3.5">
        {tier.features.map((feature) => (
          <li key={feature.label} className="flex items-center gap-3">
            {feature.included ? (
              <CheckIcon highlighted={highlighted} />
            ) : (
              <CrossIcon />
            )}
            <span
              className={`text-sm ${
                feature.included
                  ? highlighted
                    ? "text-white"
                    : "text-gray-800"
                  : highlighted
                    ? "text-white/50"
                    : "text-gray-400"
              }`}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
