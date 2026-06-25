export interface FooterLink {
  label: string
  href: string
}

export interface FooterLinkGroup {
  heading: string
  links: FooterLink[]
}

export interface FooterSocial {
  label: string
  icon: string
  href: string
  size: { w: number; h: number }
}

export interface FooterBrand {
  logo: {
    src: string
    alt: string
  }
  description: string
}

export interface FooterData {
  brand: FooterBrand
  socials: FooterSocial[]
  linkGroups: FooterLinkGroup[]
}
