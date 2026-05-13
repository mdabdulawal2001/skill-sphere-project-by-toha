"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { motion } from "motion/react";
import { FaRocket } from "react-icons/fa";
import { Rocket } from "@gravity-ui/icons";

const slides = [
  {
    id: 1,
    title: "Upgrade Your Skills",
    subtitle: "Learn from Industry Experts",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "Learn Anytime, Anywhere",
    subtitle: "Flexible Online Courses for You",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 3,
    title: "Start Your Career Today",
    subtitle: "Build Skills That Matter",
    image:
      "https://plus.unsplash.com/premium_photo-1661331911412-330f2e99cf53?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const BannerSection = () => {
  return (
    <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto my-10 md:my-16">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-3xl overflow-hidden shadow-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-125 md:h-150 flex items-center justify-center text-white text-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/40"></div>

              {/* Background Zoom Effect */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="relative z-10 px-4 max-w-4xl"
              >
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  <span className="text-[#047bfb]">
                    {slide.title === "Upgrade Your Skills" ? (
                      <>
                        {slide.title} <FaRocket className="inline-block ml-2" />
                      </>
                    ) : (
                      slide.title
                    )}
                  </span>
                </h1>

                <p className="mt-5 font-bold text-xl md:text-[30px] text-[#0494fb] leading-relaxed">
                  {slide.subtitle}
                </p>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={"/allCoursesPage"}
                    className="inline-block mt-8 px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-blue-500/40"
                  >
                    Browse Courses
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;
