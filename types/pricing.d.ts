export type BillingCycle = "monthly" | "yearly";

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  highlighted: boolean;
  price: {
    monthly: number;
    yearly: number;
  };
  cta: {
    label: string;
    href: string;
  };
  features: PricingFeature[];
}
