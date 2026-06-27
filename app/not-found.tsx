'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ButtonPrimary } from '@/components/button-primary'

export default function NotFound() {
  return (
    <section className="hero-grid flex min-h-[calc(100vh-88px)] items-center justify-center py-20 lg:py-0">
      <div className="container flex justify-center">
        <div className="relative flex flex-col items-center">
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
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
            >
              <h1 className="text-center text-7xl leading-[130%] font-bold tracking-normal text-primary sm:text-8xl md:text-9xl lg:text-[180px]">
                404
              </h1>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mt-2 text-center text-2xl leading-[130%] font-bold tracking-normal text-black sm:text-3xl md:text-4xl xl:text-[38px]">
                Page Not Found
              </h2>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <p className="mt-7.75 mb-9.75 max-w-lg px-8 text-center text-base sm:px-16 sm:text-lg xl:px-20">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved. Let&apos;s get you back on track.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/">
                <ButtonPrimary label="Back To Home" />
              </Link>
            </motion.div>
          </div>

          <Dot
            delay={0.8}
            className="-top-20 left-[50%] size-2.5 lg:size-3.75 translate-x-[-50%] bg-[#34E0A1] lg:-top-2 lg:block xl:top-2"
          />
          <Dot
            delay={0.9}
            className="top-10 left-4 size-2.5 lg:size-3.25 bg-[#635BFF] xl:top-20.25 xl:-left-37.25"
          />
          <Dot
            delay={1.0}
            className="bottom-25 left-2 size-2.5 lg:size-3.25 bg-[#FF5A5F] xl:bottom-53.5 xl:-left-8"
          />
          <Dot
            delay={1.1}
            className="top-39 right-1 size-2.5 lg:size-3.25 bg-[#FFEC5A] xl:-right-14"
          />
          <Dot
            delay={1.2}
            className="-bottom-8.75 left-[51%] size-2.5 lg:size-3.25 translate-x-[-49%] bg-[#5AF9FF] lg:bottom-10 lg:block xl:bottom-8.25"
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
        'absolute rounded-full opacity-100 shadow-[0px_-2px_6.3px_0px_#00000040_inset]',
        className,
      )}
    />
  )
}
