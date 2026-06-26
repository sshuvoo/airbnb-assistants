import { FAQSection } from '@/components/faq-section'
import { HeroSection } from '@/components/hero-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import PricingSection from '@/components/pricing-section'
import { ReviewSection } from '@/components/review-section'
import { ServiceSection } from '@/components/service-section'
import { ToolsSection } from '@/components/tools-section'
import { TrustedBrands } from '@/components/trusted-brands'

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      {/* <TrustedBrands /> */}
      {/* <PricingSection />*/}
      {/* <ServiceSection />  */}
      {/* <ToolsSection /> */}
      <HowItWorksSection />
      <ReviewSection />
      <FAQSection />
    </>
  )
}
