import type { FaqSection } from "@/types/faq";

export const faqData: FaqSection = {
  heading: {
    plain: "Frequently asked",
    accent: "questions",
  },
  subheading: "Everything you need to know about the product and billing.",
  items: [
    {
      id: "free-trial",
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: "change-plan",
      question: "Can I change my plan later?",
      answer:
        "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately and we'll prorate the difference on your next invoice.",
    },
    {
      id: "cancellation-policy",
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time with no penalties. Once cancelled, you'll retain access to your plan until the end of the current billing period, after which your account reverts to the free tier.",
    },
    {
      id: "invoice-info",
      question: "Can other info be added to an invoice?",
      answer:
        "Yes. You can add a company name, VAT number, billing address, and a custom PO number to every invoice. Head to Settings → Billing → Invoice details to update these fields.",
    },
    {
      id: "billing-works",
      question: "How does billing work?",
      answer:
        "We bill in advance on a monthly or yearly cycle depending on the plan you choose. All payments are processed securely via Stripe. You'll receive an email receipt after every successful charge.",
    },
    {
      id: "change-email",
      question: "How do I change my account email?",
      answer:
        "Go to Settings → Account → Email address and enter your new email. We'll send a confirmation link to the new address. Your email won't change until you click that link.",
    },
  ],
};
