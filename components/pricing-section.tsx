// components/PricingSection.tsx
"use client";

import { pricingTiers } from "@/data/pricing-data";
import type { BillingCycle } from "@/types/pricing";
import { useState } from "react";
import PricingCard from "./pricing-card";

export default function PricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Billing toggle */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span
            className={`text-sm font-medium ${
              cycle === "monthly" ? "text-gray-900" : "text-gray-400"
            }`}
          >
            Pay Monthly
          </span>

          <button
            role="switch"
            aria-checked={cycle === "yearly"}
            onClick={() =>
              setCycle((prev) => (prev === "monthly" ? "yearly" : "monthly"))
            }
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              cycle === "yearly" ? "bg-primary" : "bg-gray-200"
            }`}
          >
            <span className="sr-only">Toggle billing cycle</span>
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                cycle === "yearly" ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>

          <span
            className={`flex items-center gap-2 text-sm font-medium ${
              cycle === "yearly" ? "text-gray-900" : "text-gray-400"
            }`}
          >
            Pay Yearly
            {cycle === "yearly" && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                Save ~20%
              </span>
            )}
          </span>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} cycle={cycle} />
          ))}
        </div>
      </div>
    </section>
  );
}
