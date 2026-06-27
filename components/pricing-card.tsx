import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useMotionValue } from 'framer-motion'
import type { BillingCycle, PricingTier } from '@/types/pricing'

export function PricingCard({
  tier,
  cycle,
}: {
  tier: PricingTier
  cycle: BillingCycle
}) {
  const { highlighted } = tier
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })

  const isYearly = cycle === 'yearly'
  const targetPrice = isYearly ? tier.price.yearly : tier.price.monthly

  const motionValue = useMotionValue(0)
  const [displayPrice, setDisplayPrice] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(motionValue, targetPrice, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayPrice(Math.round(latest)),
    })

    return controls.stop
  }, [isInView, targetPrice, motionValue])

  return (
    <div
      ref={cardRef}
      className={`font-manrope w-full rounded-[10px] border px-6 py-10 lg:w-94.75 ${highlighted ? 'bg-primary border-transparent' : 'border-[#FAC4D2] bg-white'}`}
    >
      <div className="">
        <h3
          className={`font-manrope text-[22px] leading-[130%] font-bold ${highlighted ? 'text-white' : 'text-[#191D23]'}`}
        >
          {tier.name}
        </h3>
        <p
          className={`text-normal font-manrope mt-2.75 text-[16px] leading-[130%] ${highlighted ? 'text-[#F7F8F9]' : 'text-[#64748B]'}`}
        >
          {tier.description}
        </p>
      </div>

      <div className="mt-5 mb-6 flex items-center gap-x-2">
        <span
          className={`font-manrope text-[56px] leading-[130%] font-semibold ${
            highlighted ? 'text-white' : 'text-[#191D23]'
          }`}
        >
          ${displayPrice}
        </span>
        <span
          className={`font-manrope text-[16px] leading-[130%] font-light ${
            highlighted ? 'text-[#F7F8F9]' : 'text-[#4B5768]'
          }`}
        >
          {isYearly && tier.price.yearly > 0 ? '/ Year' : '/ Month'}
        </span>
      </div>

      <button
        className={`border-primary font-manrope text-primary h-11 w-full rounded-[4px] border-[1.5px] text-[16px] leading-[130%] font-semibold ${highlighted ? 'border-transparent bg-white' : ''}`}
      >
        Get Started Now
      </button>

      <ul className="mt-10 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature.label} className="grid grid-cols-[auto_1fr] gap-3">
            {feature.included ? (
              <span className="flex size-8 items-center justify-center rounded-full bg-[#FAC4D2]">
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.8162 0.207014C12.0701 0.473695 12.0597 0.895677 11.793 1.14954L4.08929 8.48287C3.95774 8.6081 3.78078 8.67424 3.59933 8.66598C3.41789 8.65772 3.24766 8.57579 3.12803 8.43912L0.165063 5.05451C-0.0774581 4.77748 -0.0494802 4.35629 0.227553 4.11377C0.504586 3.87125 0.925768 3.89923 1.16829 4.17626L3.67342 7.0379L10.8737 0.183799C11.1404 -0.070061 11.5624 -0.0596674 11.8162 0.207014Z"
                    fill="#ED3C6A"
                  />
                </svg>
              </span>
            ) : (
              <span
                className={`flex size-8 items-center justify-center rounded-full ${highlighted ? 'bg-white' : 'bg-[#F7F8F9]'}`}
              >
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.68054 8.68054C8.94089 8.42019 8.94089 7.99808 8.68054 7.73773L5.38117 4.43836L8.68145 1.13807C8.9418 0.877724 8.9418 0.455613 8.68145 0.195264C8.4211 -0.0650856 7.99899 -0.0650859 7.73864 0.195263L4.43836 3.49555L1.13807 0.195262C0.877722 -0.0650873 0.455612 -0.0650874 0.195262 0.195262C-0.0650874 0.455612 -0.0650873 0.877722 0.195262 1.13807L3.49555 4.43836L0.196167 7.73774C-0.0641821 7.99808 -0.0641817 8.4202 0.196168 8.68054C0.456517 8.94089 0.878628 8.94089 1.13898 8.68055L4.43836 5.38117L7.73773 8.68054C7.99808 8.94089 8.42019 8.94089 8.68054 8.68054Z"
                    fill="#191D23"
                  />
                </svg>
              </span>
            )}
            <span
              className={`font-manrope text-[16px] leading-[130%] font-medium ${
                feature.included
                  ? highlighted
                    ? 'text-white'
                    : 'text-[#191D23]'
                  : highlighted
                    ? 'text-white'
                    : 'text-[#A0ABBB]'
              }`}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
