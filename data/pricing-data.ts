import type { PricingTier } from "@/types/pricing";

export const pricingTiers: PricingTier[] = [
  {
    id: "freebie",
    name: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    highlighted: false,
    price: {
      monthly: 0,
      yearly: 0,
    },
    cta: {
      label: "Get Started Now",
      href: "/#pricing",
    },
    features: [
      { label: "20,000+ of PNG & SVG graphics", included: true },
      { label: "Access to 100 million stock images", included: true },
      { label: "Upload custom icons and fonts", included: false },
      { label: "Unlimited Sharing", included: false },
      { label: "Upload graphics & video in up to 4k", included: false },
      { label: "Unlimited Projects", included: false },
      { label: "Instant Access to our design system", included: false },
      { label: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
    highlighted: true,
    price: {
      monthly: 25,
      yearly: 240, // $240/yr billed yearly
    },
    cta: {
      label: "Get Started Now",
      href: "/#pricing",
    },
    features: [
      { label: "20,000+ of PNG & SVG graphics", included: true },
      { label: "Access to 100 million stock images", included: true },
      { label: "Upload custom icons and fonts", included: true },
      { label: "Unlimited Sharing", included: true },
      { label: "Upload graphics & video in up to 4k", included: true },
      { label: "Unlimited Projects", included: true },
      { label: "Instant Access to our design system", included: false },
      { label: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    highlighted: false,
    price: {
      monthly: 100,
      yearly: 960, // $960/yr billed yearly
    },
    cta: {
      label: "Get Started Now",
      href: "/#pricing",
    },
    features: [
      { label: "20,000+ of PNG & SVG graphics", included: true },
      { label: "Access to 100 million stock images", included: true },
      { label: "Upload custom icons and fonts", included: true },
      { label: "Unlimited Sharing", included: true },
      { label: "Upload graphics & video in up to 4k", included: true },
      { label: "Unlimited Projects", included: true },
      { label: "Instant Access to our design system", included: true },
      { label: "Create teams to collaborate on designs", included: true },
    ],
  },
];
