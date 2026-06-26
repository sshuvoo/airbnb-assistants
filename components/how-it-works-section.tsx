import { howItWorksData } from '@/data/how-it-works-data'
import Image from 'next/image'
import { SectionHeader } from './section-header'
import { ButtonPrimary } from './button-primary'

const reasonList = [
  'Brilliant Client Service',
  'Flexibility & Adaptibility',
  'We make it Personal',
  'We have expart in our team',
]

export function HowItWorksSection() {
  return (
    <section>
      <SectionHeader
        className="mt-16.75"
        title={{ plain: 'Getting Started is', accent: 'Easy' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_auto_auto] justify-center gap-x-9.5">
        {howItWorksData.map((item) => (
          <div className="w-71.25" key={item.step}>
            <div className="relative flex h-48 items-center justify-center rounded-[9px] border-2 border-[#FDEBF0]">
              <Image
                src={item.icon}
                alt={item.label}
                width={item.iconSize.w}
                height={item.iconSize.h}
              />
              <div className="border-primary bg-background absolute -top-5.25 -left-4.25 flex size-19 items-center justify-center rounded-full border-[5px] text-[29.23px] leading-[130%] font-medium">
                {item.step}
              </div>
            </div>
            <h3 className="mx-auto mt-8.25 max-w-63.75 text-center text-[20px] leading-[130%] font-semibold">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
      <div className="container mt-21">
        <div className="grid grid-cols-[1fr_auto] rounded-[33px] border border-[#F8BECD] bg-[#FDEBF0] p-9.5">
          <div className="pt-9.25 pb-11.25 pl-12.5">
            <h2 className="text-[36px] leading-[130%] font-bold">
              Few Reasons Why you Choose us?
            </h2>
            <p className="font-primary mt-6.5 text-sm leading-[130%] font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <ul className="space-y-3.5 py-7.5">
              {reasonList.map((reason) => (
                <li key={reason} className="flex items-center gap-x-2">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#FAC4D2]">
                    <Image
                      src="/images/icons/check.svg"
                      alt="arrow right"
                      width={12}
                      height={8.67}
                    />
                  </div>
                  <span className="text-text text-[16px] leading-[130%] font-bold">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>

            <ButtonPrimary className="mt-3.75" label="Schedule A Meeting" />
          </div>
          <div className="flex justify-end">
            <Image
              className="aspect-642/465 object-contain"
              src="/images/get-started/get-started-cover.png"
              width={642}
              height={465}
              alt="get started cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
