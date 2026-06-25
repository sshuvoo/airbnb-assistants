import type { FooterData } from '@/types/footer'

export const footerData: FooterData = {
  brand: {
    logo: {
      src: '/images/logo/google.svg',
      alt: 'Google',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.',
  },
  socials: [
    {
      label: 'Twitter',
      icon: '/images/icons/social/twitter.svg',
      href: 'https://twitter.com',
      size: { w: 16, h: 12.87 },
    },
    {
      label: 'Facebook',
      icon: '/images/icons/social/facebook.svg',
      href: 'https://facebook.com',
      size: { w: 9.05, h: 17.35 },
    },
    {
      label: 'Instagram',
      icon: '/images/icons/social/instagram.svg',
      href: 'https://instagram.com',
      size: { w: 19.4, h: 19.31 },
    },
    {
      label: 'GitHub',
      icon: '/images/icons/social/github.svg',
      href: 'https://github.com',
      size: { w: 18.56, h: 18.02 },
    },
  ],
  linkGroups: [
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Features', href: '/features' },
        { label: 'Works', href: '/works' },
        { label: 'Career', href: '/career' },
      ],
    },
    {
      heading: 'Help',
      links: [
        { label: 'Customer Support', href: '/support' },
        { label: 'Delivery Details', href: '/delivery' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Free eBooks', href: '/ebooks' },
        { label: 'Development Tutorial', href: '/tutorials' },
        { label: 'How to - Blog', href: '/blog' },
        { label: 'Youtube Playlist', href: '/youtube' },
      ],
    },
  ],
}
