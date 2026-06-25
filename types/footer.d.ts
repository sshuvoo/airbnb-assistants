import type { LucideIcon } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

export interface FooterSocial {
  label: string;
  icon: LucideIcon;
  href: string;
}

export interface FooterBrand {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
}

export interface FooterData {
  brand: FooterBrand;
  socials: FooterSocial[];
  linkGroups: FooterLinkGroup[];
}
