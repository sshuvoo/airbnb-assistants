'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeader } from './section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqData } from '@/data/faq-data'

export function FAQSection() {
  return (
    <section className="space-y-4.75 py-8 sm:py-12 lg:py-19.25">
      <div className="container">
        <div className="bg-card rounded-[16px] sm:pb-8 md:pb-12 lg:pb-18.75">
          <SectionHeader
            className="py-10 sm:py-14 lg:py-18.5"
            title={{
              plain: 'Frequently Asked',
              accent: 'Questions',
            }}
            descriptionClassName="font-normal sm:text-[20px] leading-[30px] mt-[20px]"
            description="Everything you need to know about the product and billing."
          />
          <div className="mt-1.5 flex justify-center px-4 sm:px-8 lg:px-0">
            <Accordion
              type="single"
              collapsible
              defaultValue="free-trial"
              className="max-w-3xl"
            >
              {faqData.items.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="pb-8 not-first:pt-6 not-last:border-[#BF214A47]"
                >
                  <AccordionTrigger className="gap-x-4 py-0 text-[18px] leading-7 font-bold **:data-[slot=accordion-trigger-icon]:hidden">
                    {item.question}
                    <Image
                      className="translate-y-0.5 group-aria-expanded/accordion-trigger:hidden"
                      src={'/images/icons/plus-circle.svg'}
                      width={20}
                      height={20}
                      alt="plus icon"
                    />
                    <Image
                      className="hidden translate-y-0.5 group-aria-expanded/accordion-trigger:inline"
                      src={'/images/icons/minus-circle.svg'}
                      width={20}
                      height={20}
                      alt="minus icon"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-0 text-[16px] leading-6 font-normal text-[#606060]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bg-card space-y-8 rounded-[16px] px-4 py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative mx-auto h-14 w-30"
          >
            <motion.div
              variants={{
                hidden: { scale: 0.5, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.4, type: 'spring', bounce: 0.4 },
                },
              }}
              className="absolute left-1/2 z-1 size-14 -translate-x-1/2 overflow-hidden rounded-full border-[1.5px] border-white bg-[#C7B9DA]"
            >
              <Image
                className="rounded-full object-cover"
                src="/images/supports/avater-center.png"
                alt="avatar image"
                width={56}
                height={56}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { scale: 56 / 48, x: -36, y: -4, opacity: 0 },
                visible: {
                  scale: 1,
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.25,
                    duration: 0.5,
                    type: 'spring',
                    bounce: 0.35,
                  },
                },
              }}
              className="absolute right-0 bottom-0 z-0 size-12 overflow-hidden rounded-full border-[1.5px] border-white bg-[#D9B9BB]"
            >
              <Image
                className="rounded-full object-cover"
                src="/images/supports/avatar-right.png"
                alt="avatar image"
                width={48}
                height={48}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { scale: 56 / 48, x: 36, y: -4, opacity: 0 },
                visible: {
                  scale: 1,
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.25,
                    duration: 0.5,
                    type: 'spring',
                    bounce: 0.35,
                  },
                },
              }}
              className="absolute bottom-0 left-0 z-0 size-12 overflow-hidden rounded-full border-[1.5px] border-white bg-[#ABB677]"
            >
              <Image
                className="rounded-full object-cover"
                src="/images/supports/avatar-left.png"
                alt="avatar image"
                width={48}
                height={48}
              />
            </motion.div>
          </motion.div>

          <div>
            <h3 className="text-center text-[20px] leading-7.5 font-bold text-[#101828]">
              Still have Questions?
            </h3>
            <p className="mt-2 text-center text-[18px] leading-7 font-normal text-[#9C9C9C]">
              Can&apos;t find the answer you&apos;re looking for? Please chat to
              our friendly team.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="bg-primary h-11 w-32.5 rounded-[8px] text-[16px] leading-6 font-medium text-white"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
