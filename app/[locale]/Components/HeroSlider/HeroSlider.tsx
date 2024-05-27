'use client'
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './heroSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Pagination,Autoplay,Parallax, Scrollbar, A11y } from 'swiper/modules';

interface propTypes {
    slides: Array<{
        image: string;
        title_en: string;
        title_ar: string;
        description_en: string;
        description_ar: string;
    }>
}

const HeroSlider : React.FC<propTypes> = ({slides}) => {

    return <Swiper
        modules={[Navigation, Pagination, Parallax, Autoplay, Scrollbar, A11y]}
        slidesPerView={1}
        parallax={true}
        speed={1400}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true
        }}
        style={{ height: '100%' }}
    >
        {slides.map((slide, index) => (
            <SwiperSlide key={index}>
                <div className="relative h-full">
                    <Image layout='fill' src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full block object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"/>
                    <div className="w-full absolute top-3/4 text-center lg:text-left rtl:lg:text-right rtl:lg:pr-72 left-1/2 lg:top-auto transform lg:transform-none -translate-x-1/2 -translate-y-1/2 lg:bottom-36 lg:left-36 p-4 text-white">
                        <h2 className="text-2xl lg:text-6xl font-roboto mb-4" data-swiper-parallax="-200">{slide.title_en}</h2>
                        <p className="text-lg w-full font-roboto lg:text-3xl" data-swiper-parallax="-100">{slide.description_en}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
}

export default HeroSlider;