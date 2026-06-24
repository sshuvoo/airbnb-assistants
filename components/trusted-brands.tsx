"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const brandList = [
  {
    name: "Agoda",
    imageUrl: "./images/trusted-brands/agoda.svg",
  },
  {
    name: "Airbnb",
    imageUrl: "./images/trusted-brands/airbnb.svg",
  },
  {
    name: "Booking.com",
    imageUrl: "./images/trusted-brands/booking.svg",
  },
  {
    name: "Expedia",
    imageUrl: "./images/trusted-brands/expedia.svg",
  },
  {
    name: "Home-To-Go",
    imageUrl: "./images/trusted-brands/home-to-go.svg",
  },
  {
    name: "TripAdvisor",
    imageUrl: "./images/trusted-brands/tripadvisor.svg",
  },
  {
    name: "Vrbo",
    imageUrl: "./images/trusted-brands/vrbo.svg",
  },
];

export function TrustedBrands() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 pt-12.5">
        <h2 className="font-semibold text-xl leading-[100%] text-center">
          Trusted by leaders in 50+ industries
        </h2>
      </div>
      <div className="mt-9 bg-foreground h-19.25 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-5">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={6000}
            loop={true}
            slidesPerView="auto"
            spaceBetween={48}
            allowTouchMove={false}
          >
            {[...brandList, ...brandList, ...brandList].map((brand, i) => (
              <SwiperSlide
                key={i}
                className="w-auto! flex items-center justify-center"
              >
                <Image
                  src={brand.imageUrl}
                  alt={brand.name}
                  width={0}
                  height={0}
                  className="h-9 w-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
