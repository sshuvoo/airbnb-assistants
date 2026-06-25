import type { FooterData } from "@/types/footer";

export const footerData: FooterData = {
  brand: {
    logo: {
      src: "/logo.svg",
      alt: "Google",
      width: 100,
      height: 34,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.",
  },
  socials: [
    { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { label: "GitHub", icon: Github, href: "https://github.com" },
  ],
  linkGroups: [
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Features", href: "/features" },
        { label: "Works", href: "/works" },
        { label: "Career", href: "/career" },
      ],
    },
    {
      heading: "Help",
      links: [
        { label: "Customer Support", href: "/support" },
        { label: "Delivery Details", href: "/delivery" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Free eBooks", href: "/ebooks" },
        { label: "Development Tutorial", href: "/tutorials" },
        { label: "How to – Blog", href: "/blog" },
        { label: "Youtube Playlist", href: "/youtube" },
      ],
    },
  ],
};
