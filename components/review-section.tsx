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
            <SwiperSlide
              key={review.id}
              style={{
                width: '530px',
              }}
            >
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
      className={`mx-auto grid min-h-50 w-132.5 grid-cols-[167px_1fr] rounded-[11px] border ${isActive ? 'bg-background border-transparent' : 'bg-foreground border-foreground'}`}
    >
      <div className="flex items-center justify-center pl-1.75">
        <Image
          className="size-15 rounded-full sm:size-25"
          src={avatar}
          alt={name}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col justify-center pr-10.5">
        <h2 className="text-[20px] leading-[100%] font-bold">{name}</h2>
        <p className="mt-1.25 text-sm leading-[100%] font-medium">{feedback}</p>
        <div className="mt-3 flex items-center gap-x-1">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <Image
                key={i}
                src="/images/icons/star.svg"
                alt="star"
                width={13}
                height={13}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
