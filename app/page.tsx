'use client'
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay,Parallax, Scrollbar, A11y } from 'swiper/modules';

import Container from '@/app/Components/Layout/Container';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1714837003223-5144b6e082cb?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Slide 1 Title',
        description: 'Slide 1 Description',
    },
    {
        image: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=2542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Slide 2 Title',
        description: 'Slide 2 Description',
    },
    {
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Slide 3 Title',
        description: 'Slide 3 Description',
    },
];

export default function HomePage() {
  return (
      <>
        <main className="bg-amber-50">

                    <section className='h-[70vh]' id="hero section">
                        <Swiper
                            modules={[Navigation, Pagination, Parallax, Autoplay, Scrollbar, A11y]}
                            slidesPerView={1}
                            parallax={true}
                            navigation
                            pagination={{ clickable: true }}
                            //loop={true}
                            autoplay={{
                                delay: 4000,
                                pauseOnMouseEnter: true
                            }}
                            style={{ height: '100%'}}
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative h-full">
                                        <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"/>
                                        <div className="absolute top-3/4 text-center lg:text-left left-1/2 lg:top-auto transform lg:transform-none -translate-x-1/2 -translate-y-1/2 lg:bottom-36 lg:left-36 p-4 text-white">
                                            <h2 className="text-6xl font-roboto mb-4">{slide.title}</h2>
                                            <p className="font-roboto text-3xl">{slide.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>

        </main>
      </>
  );
}
