import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { DM_Sans, Poppins, Plus_Jakarta_Sans, Manrope } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['400'],
  variable: '--font-poppins',
  subsets: ['latin'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400'],
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
})

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Airbnb Assistants - Streamline Your Hosting Experience',
    template: '%s | Airbnb Assistants',
  },
  description:
    'Airbnb Assistants provides powerful tools and services to automate your short-term rentals, boost your bookings, and manage your properties effortlessly.',
  keywords: [
    'Airbnb',
    'Hosting',
    'Property Management',
    'Short-term Rentals',
    'Automation',
    'Booking',
  ],
  authors: [{ name: 'Airbnb Assistants' }],
  creator: 'Airbnb Assistants',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://airbnb-assistants-one.vercel.app',
    title: 'Airbnb Assistants - Streamline Your Hosting Experience',
    description:
      'Powerful tools and services to automate your short-term rentals, boost your bookings, and manage your properties effortlessly.',
    siteName: 'Airbnb Assistants',
    images: [
      {
        url: 'https://airbnb-assistants-one.vercel.app/images/get-started/get-started-cover.png',
        width: 1200,
        height: 630,
        alt: 'Airbnb Assistants Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb Assistants - Streamline Your Hosting Experience',
    description:
      'Powerful tools and services to automate your short-term rentals, boost your bookings, and manage your properties effortlessly.',
    images: [
      'https://airbnb-assistants-one.vercel.app/images/get-started/get-started-cover.png',
    ],
    creator: '@airbnbassistants',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${poppins.variable} ${plusJakartaSans.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body className="font-primary text-text">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
