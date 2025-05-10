'use client';

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay} from 'swiper/modules';
import Image from 'next/image';

import '../aPropos/page.css';
import {CarouselTechno} from "@/constants/technos";

interface LogoCarouselProps {
    logos: CarouselTechno[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({logos}) => {
    return (
        <div className="w-full py-8 CAROUSEL">
            <div className="overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={10}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={logo.iconUrl}
                                alt={`logo-${logo.name}`}
                                className="mx-auto max-w-[50px]"
                                style={{filter: 'invert(1) grayscale(100%)'}}
                                width={50}
                                height={50}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default LogoCarousel;
