'use client'

import { pricingTiers } from '@/data/pricing-data'
import type { BillingCycle } from '@/types/pricing'
import { useState } from 'react'
import { SectionHeader } from './section-header'
import { PricingCard } from './pricing-card'
import Image from 'next/image'

export function PricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>('monthly')

  return (
    <section>
      <div className="container">
        <SectionHeader
          className="pb-9.5"
          headigClassName="text-[40px]"
          title={{ plain: 'Airbnb Assistent', accent: 'pricing' }}
          descriptionClassName="mt-4 text-[#191D23] font-normal text-[20px]"
          description="Choose a plan that’s right for you"
        />

        <div className="mb-22.5 flex justify-center">
          <div className="relative flex items-center gap-x-6">
            <Image
              src={'/images/pricing/discount-25.svg'}
              alt="discount-25"
              width={185}
              height={87.32}
              className="absolute -top-5 -right-51"
            />
            <span
              className={`text-sm font-medium ${
                cycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              Pay Monthly
            </span>

            <button
              role="switch"
              aria-checked={cycle === 'yearly'}
              onClick={() =>
                setCycle((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'))
              }
              className={`focus-visible:outline-primary relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                cycle === 'yearly' ? 'bg-primary' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">Toggle billing cycle</span>
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  cycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>

            <span
              className={`flex items-center gap-2 text-sm font-medium ${
                cycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              Pay Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[auto] justify-center gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-[auto_auto] xl:grid-cols-[auto_auto_auto]">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} cycle={cycle} />
          ))}
        </div>
      </div>
    </section>
  )
}
