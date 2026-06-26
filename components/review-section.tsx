'use client'

import { Review, reviewsData } from '@/data/review-data'
import { SectionHeader } from './section-header'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { useState } from 'react'

export function ReviewSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="pb-25.75">
      <SectionHeader
        title={{
          plain: 'Check Our Clients',
          accent: 'Review',
        }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div>
        <Swiper
          style={{ overflowY: 'visible', overflowX: 'clip' }}
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={'auto'}
          centeredSlides={true}
          centerInsufficientSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide key={review.id} className="w-[320px]! sm:w-132.5!">
              <ReviewCard {...review} isActive={activeIndex === index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function ReviewCard({
  name,
  avatar,
  feedback,
  rating,
  isActive,
}: Review & { isActive: boolean }) {
  return (
    <div
      className={`mx-auto grid min-h-50 w-full grid-cols-[100px_1fr] rounded-[11px] border sm:w-132.5 sm:grid-cols-[167px_1fr] ${isActive ? 'bg-background border-transparent' : 'bg-foreground border-foreground'}`}
    >
      <div className="flex items-center justify-center pl-2 sm:pl-1.75">
        <Image
          className="size-15 rounded-full sm:size-25"
          src={avatar}
          alt={name}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col justify-center py-4 pr-4 sm:py-0 sm:pr-10.5">
        <h2 className="text-[18px] leading-[100%] font-bold sm:text-[20px]">
          {name}
        </h2>
        <p className="mt-1.25 text-[13px] leading-[120%] font-medium sm:text-sm sm:leading-[100%]">
          {feedback}
        </p>
        <div className="mt-3 flex items-center gap-x-1">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <Image
                key={i}
                src="/images/icons/star.svg"
                alt="star"
                className="h-3 w-3 sm:h-3.25 sm:w-3.25"
                width={13}
                height={13}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
