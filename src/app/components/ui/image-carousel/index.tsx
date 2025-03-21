"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = ["/banners/1.png", "/banners/2.png", "/banners/3.png"];

export default function ImageCarousel() {
  const dimensions = "w-[100%] h-[9rem] sm:w-[65rem] sm:h-[22rem] ";
  return (
    <div
      className={
        dimensions +
        "mx-auto overflow-hidden rounded-[50px] shadow-[-15px_20px_30px_rgba(0,0,0,0.55)]"
      }
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="custom-bullets-colors"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className={dimensions + "relative overflow-hidden rounded-[50px]"}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "fill" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
