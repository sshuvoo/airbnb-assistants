import { services } from '@/data/service-data'
import Image from 'next/image'
import { SectionHeader } from './section-header'

export function ServiceSection() {
  return (
    <section>
      <SectionHeader
        className="py-13.75"
        title={{ plain: 'Our', accent: 'Service' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-6.25 px-5 sm:grid-cols-[auto_auto] sm:justify-center xl:grid-cols-[auto_auto_auto]">
          {services.map((service) => (
            <div
              key={service.id}
              className="max-w-99.25 rounded-[13px] border border-[#FAC4D2] px-8.25 py-7.5 transition-all duration-300 hover:border-transparent hover:shadow-[0px_4px_90.3px_0px_#D7CDCF78]"
            >
              <div className="mt-3.5 mb-8.75 flex h-25 items-end">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={service.imageSize.w}
                  height={service.imageSize.h}
                />
              </div>
              <h2 className="text-text max-w-64 text-[24px] leading-[125%] font-bold tracking-normal">
                {service.title}
              </h2>
              <p className="mt-3.5 max-w-76.5 text-sm leading-[130%] font-medium tracking-normal">
                {service.description}
              </p>
              <button className="border-primary text-primary mt-8.75 h-9.5 w-29.75 rounded-[44px] border text-sm leading-[130%] font-medium tracking-normal">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
