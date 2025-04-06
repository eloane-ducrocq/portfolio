"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

interface LogoCarouselProps {
  logos: string[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  return (
    <div className="w-full py-8">
      <div className="flex items-center gap-4">
        <div
          ref={prevRef}
          className="w-10 h-10 flex items-center justify-center bg-white shadow rounded-full cursor-pointer text-black"
        >
          ←
        </div>

        <div className="flex-1 overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={10}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            onSwiper={() => setSwiperInitialized(true)}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="mx-auto max-w-[50px]"
                  style={{ filter: 'invert(1) grayscale(100%)' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          ref={nextRef}
          className="w-10 h-10 flex items-center justify-center bg-white shadow rounded-full cursor-pointer text-black"
        >
          →
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
