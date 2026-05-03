'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "Upgrade Your Skills 🚀",
    subtitle: "Learn from Industry Experts",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "Learn Anytime, Anywhere",
    subtitle: "Flexible Online Courses for You",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 3,
    title: "Start Your Career Today",
    subtitle: "Build Skills That Matter",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
];

const BannerSection = () => {

    return (
    <div className="w-11/12 max-w-7xl mx-auto mt-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-100 flex items-center justify-center text-white text-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 px-4">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h1>
                <p className="mt-3 text-lg">{slide.subtitle}</p>

                <Link
                  href={'/allCoursesPage'}
                  className="inline-block mt-5 px-5 py-2 bg-blue-500 rounded text-white"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;