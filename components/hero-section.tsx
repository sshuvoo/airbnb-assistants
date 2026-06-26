import Link from 'next/link'
import { ButtonPrimary } from './button-primary'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-grid flex h-100 flex-col items-center justify-end sm:h-120 lg:h-146"
    >
      <div className="relative flex h-90 flex-col items-center justify-center sm:h-100 lg:h-130.75 lg:max-w-230.75">
        <svg
          className="absolute inset-0"
          viewBox="0 0 923 523"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="461.5"
            cy="261.5"
            rx="461.5"
            ry="261.5"
            fill="white"
            fillOpacity="0.62"
          />
        </svg>

        <div className="relative z-1 flex flex-col items-center">
          <h1 className="text-center text-2xl leading-[130%] font-bold tracking-normal text-black sm:text-3xl md:text-4xl xl:text-5xl">
            Airbnb Assistants For
          </h1>
          <h1 className="text-center text-xl leading-[130%] font-medium tracking-normal text-black md:text-3xl xl:text-[38px]">
            Property Management
          </h1>
          <p className="mt-7.75 mb-9.75 px-8 text-center text-xs sm:px-16 sm:text-sm xl:px-20 xl:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <ButtonPrimary />

          <Link
            href={'/#pricing'}
            className="mt-6.75 text-sm leading-[130%] font-medium tracking-normal underline"
          >
            See Pricing
          </Link>
        </div>

        <Image
          className="absolute top-9.25 left-2.75 hidden lg:block"
          src={'./images/brands/brand-top-left.svg'}
          width={106.24}
          height={106.24}
          alt="airbnb"
        />

        <Image
          className="absolute top-14.5 right-2.75 hidden lg:block"
          src={'./images/brands/brand-top-right.svg'}
          width={65.69}
          height={65.69}
          alt="top-right"
        />

        <Image
          className="absolute bottom-22 left-14 hidden lg:block"
          src={'./images/brands/brand-bottom-left.svg'}
          width={75.89}
          height={75.89}
          alt="bottom-left"
        />

        <Image
          className="absolute right-2.75 bottom-14.25 hidden lg:block"
          src={'./images/brands/brand-bottom-right.svg'}
          width={89.11}
          height={89.11}
          alt="bottom-right"
        />

        <Dot className="top-10.75 left-[50%] size-3.75 translate-x-[-50%] bg-[#34E0A1] lg:block" />
        <Dot className="top-20.25 -left-37.25 size-3.25 bg-[#635BFF]" />
        <Dot className="bottom-53.5 -left-8 size-3.25 bg-[#FF5A5F]" />
        <Dot className="top-39 -right-14 size-3.25 bg-[#FFEC5A]" />
        <Dot className="bottom-8.25 left-[51%] size-3.25 translate-x-[-49%] bg-[#5AF9FF] lg:block" />
        <Dot className="-right-37.5 bottom-25.25 size-1.75 bg-[#0C3B7C]" />
        <Dot className="bottom-8.25 -left-34.25 size-1.75 bg-[#FFEC5A]" />
      </div>
    </section>
  )
}

function Dot({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute hidden rounded-full opacity-100 shadow-[0px_-2px_6.3px_0px_#00000040_inset] xl:block',
        className,
      )}
    />
  )
}
