'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ButtonPrimary } from './button-primary'

export function HeroSection() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="hero-grid flex h-auto scroll-mt-20 flex-col items-center justify-end py-20 lg:h-146 lg:py-0"
    >
      <div className="container flex justify-center">
        <div className="relative flex h-auto flex-col items-center justify-center sm:h-100 lg:h-130.75 lg:max-w-230.75">
          <svg
            className="absolute inset-0 top-1/2 -translate-y-1/2"
            viewBox="0 0 923 523"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="461.5"
              cy="261.5"
              rx="461.5"
              ry="261.5"
              fill="#FFFFFF"
              fillOpacity="0.62"
            />
          </svg>

          <div className="relative z-1 flex flex-col items-center">
            <h1 className="text-center text-3xl leading-[130%] font-bold tracking-normal text-black md:text-4xl xl:text-5xl">
              Airbnb Assistants For
            </h1>
            <h1 className="text-center text-xl leading-[130%] font-medium tracking-normal text-black md:text-3xl xl:text-[38px]">
              Property Management
            </h1>
            <p className="mt-7.75 mb-9.75 px-8 text-center text-base sm:px-16 xl:px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <ButtonPrimary />

            <Link
              href={'/#pricing'}
              className="mt-6.75 text-sm leading-[130%] font-medium tracking-normal underline"
            >
              See Pricing
            </Link>
          </div>

          {isAnimating ? (
            <div className="absolute bottom-4 z-20 hidden items-center justify-center gap-8 lg:flex">
              <div className="relative size-10">
                <motion.div
                  className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white"
                  layoutId="brand-1"
                  initial={{ rotate: 29.74 }}
                  animate={{ rotate: 29.74 }}
                >
                  <Image
                    className="scale-150"
                    src={'./images/brands/brand-top-left.svg'}
                    width={106.24}
                    height={106.24}
                    alt="airbnb"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white"
                  layoutId="brand-2"
                  initial={{ rotate: -27.61 }}
                  animate={{ rotate: -27.61 }}
                >
                  <Image
                    className="scale-150"
                    src={'./images/brands/brand-top-right.svg'}
                    width={65.69}
                    height={65.69}
                    alt="top-right"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white"
                  layoutId="brand-3"
                  initial={{ rotate: 23.23 }}
                  animate={{ rotate: 23.23 }}
                >
                  <Image
                    className="scale-150"
                    src={'./images/brands/brand-bottom-left.svg'}
                    width={75.89}
                    height={75.89}
                    alt="bottom-left"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white"
                  layoutId="brand-4"
                  initial={{ rotate: -33.8 }}
                  animate={{ rotate: -33.8 }}
                >
                  <Image
                    className="scale-160"
                    src={'./images/brands/brand-bottom-right.svg'}
                    width={89.11}
                    height={89.11}
                    alt="bottom-right"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          ) : (
            <>
              <motion.div
                layoutId="brand-1"
                className="absolute top-9.25 left-2.75 hidden lg:block"
                initial={{ rotate: 29.74 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1.2, type: 'spring', bounce: 0.15 }}
              >
                <Image
                  src={'./images/brands/brand-top-left.svg'}
                  width={106.24}
                  height={106.24}
                  alt="airbnb"
                />
              </motion.div>

              <motion.div
                layoutId="brand-2"
                className="absolute top-14.5 right-2.75 hidden lg:block"
                initial={{ rotate: -27.61 }}
                animate={{ rotate: 0 }}
                transition={{
                  duration: 1.2,
                  type: 'spring',
                  bounce: 0.15,
                  delay: 0.05,
                }}
              >
                <Image
                  src={'./images/brands/brand-top-right.svg'}
                  width={65.69}
                  height={65.69}
                  alt="top-right"
                />
              </motion.div>

              <motion.div
                layoutId="brand-3"
                className="absolute bottom-22 left-14 hidden lg:block"
                initial={{ rotate: 23.23 }}
                animate={{ rotate: 0 }}
                transition={{
                  duration: 1.2,
                  type: 'spring',
                  bounce: 0.15,
                  delay: 0.1,
                }}
              >
                <Image
                  src={'./images/brands/brand-bottom-left.svg'}
                  width={75.89}
                  height={75.89}
                  alt="bottom-left"
                />
              </motion.div>

              <motion.div
                layoutId="brand-4"
                className="absolute right-2.75 bottom-14.25 hidden lg:block"
                initial={{ rotate: -33.8 }}
                animate={{ rotate: 0 }}
                transition={{
                  duration: 1.2,
                  type: 'spring',
                  bounce: 0.15,
                  delay: 0.15,
                }}
              >
                <Image
                  src={'./images/brands/brand-bottom-right.svg'}
                  width={89.11}
                  height={89.11}
                  alt="bottom-right"
                />
              </motion.div>
            </>
          )}

          <Dot
            delay={1.4}
            className="top-10.75 left-[50%] size-3.75 translate-x-[-50%] bg-[#34E0A1] lg:block"
          />
          <Dot
            delay={1.5}
            className="top-20.25 -left-37.25 size-3.25 bg-[#635BFF]"
          />
          <Dot
            delay={1.6}
            className="bottom-53.5 -left-8 size-3.25 bg-[#FF5A5F]"
          />
          <Dot
            delay={1.7}
            className="top-39 -right-14 size-3.25 bg-[#FFEC5A]"
          />
          <Dot
            delay={1.8}
            className="bottom-8.25 left-[51%] size-3.25 translate-x-[-49%] bg-[#5AF9FF] lg:block"
          />
          <Dot
            delay={1.9}
            className="-right-37.5 bottom-25.25 size-1.75 bg-[#0C3B7C]"
          />
          <Dot
            delay={2.0}
            className="bottom-8.25 -left-34.25 size-1.75 bg-[#FFEC5A]"
          />
        </div>
      </div>
    </section>
  )
}

function Dot({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay, type: 'spring' }}
      className={cn(
        'absolute hidden rounded-full opacity-100 shadow-[0px_-2px_6.3px_0px_#00000040_inset] xl:block',
        className,
      )}
    />
  )
}
