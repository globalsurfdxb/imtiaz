"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { featuredProperties } from "../data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FeaturedProperty = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showPagination, setShowPagination] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPagination(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className=" bg-white overflow-hidden">
      <div className="container ">
      <div className="border-t border-black/20"></div>
      </div>
      <div className="pb-[75px] pt-[150px]">
        <div className="relative w-full">
          <h2 className="text-center font-[optima] text-[50px] font-[400] text-primary uppercase pb-[64px] leading-[1.2]">
            Featured Property
          </h2>

          {/* Relative container for Swiper + pagination */}
          <div className="relative w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
              }}
              autoplay={{ delay: 4000 }}
              loop
              className="relative"
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            >
              {featuredProperties.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    className="relative w-full flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeSlide === index ? 1 : 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    {/* IMAGE */}
                    <div className="relative w-full mx-auto">
                      <div className="md:h-[650px] 2xl:h-[860px] max-w-[1920px] max-h-[860px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={1920}
                          height={860}
                          className="absolute inset-0 rounded-none object-cover w-full h-full"
                        />
                      </div>
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `
                          linear-gradient(359.5deg, #000000 -13.61%, rgba(0, 0, 0, 0) 51.75%),
                          linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0.6%, rgba(0, 0, 0, 0) 19.77%),
                          linear-gradient(269.19deg, rgba(0, 0, 0, 0.2) 0.63%, rgba(0, 0, 0, 0) 25.45%)
                        `,
                        }}
                      />

                      {/* EXPLORE button */}
                      <div className="absolute z-30 left-1/2 -translate-x-1/2 bottom-20 flex flex-col items-center   cursor-pointer">
                        <button
                          className="bg-transparent uppercase hover:bg-white/10 transition-all duration-300 font-[avenir] font-[400]
               border border-white text-white text-[18px] p-[15px] rounded-[169px] cursor-pointer
              hover:-translate-y-1"
                        >
                          <span className="leading-[1.45]">EXPLORE</span>
                        </button>
                      </div>

                      <div className="absolute z-30 right-[70px] bottom-[40px] flex gap-[24px] items-center cursor-pointer">
                        <div className="w-[48px] h-[48px] overflow-hidden backdrop-blur-[9px] bg-white/12 flex items-center justify-center">
                          <Image
                            src="/icons/360.svg"
                            alt="Logo"
                            width={23}
                            height={23}
                          />
                        </div>
                        <div className="w-[48px] h-[48px] overflow-hidden backdrop-blur-[9px] bg-white/12 flex items-center justify-center">
                          <Image
                            src="/icons/gallery.svg"
                            alt="Logo"
                            width={23}
                            height={23}
                          />
                        </div>
                      </div>

                      {/* Navigation buttons */}
                      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 z-20 cursor-pointer">
                        <button className="cursor-pointer group swiper-prev w-[70px] h-[70px] bg-transparent border border-white hover:bg-white text-white hover:text-primary rounded-full flex items-center justify-center transition">
                          <Image
                            src="/images/icons/arrow-right.svg"
                            alt="arrow-right"
                            width={28}
                            height={28}
                            className="w-[28px] h-[28px] rotate-180  invert brightness-1 group-hover:brightness-[1] group-hover:invert-[0] "
                          />
                        </button>
                        <button className="cursor-pointer group swiper-next w-[70px] h-[70px] bg-transparent border border-white hover:bg-white text-white hover:text-primary rounded-full flex items-center justify-center transition">
                          <Image
                            src="/images/icons/arrow-right.svg"
                            alt="arrow-right"
                            width={28}
                            height={28}
                            className="w-[28px] h-[28px] invert brightness-0 group-hover:brightness-[1] group-hover:invert-[0] "
                          />
                        </button>
                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="flex flex-col md:flex-row justify-between items-center container w-full !px-0 mt-[32px] h-full pb-[22px] border-b border-black/20">
                      <div className="flex items-stretch gap-[62px]">
                        <div className="flex items-center px-4 lg:px-[68px]  min-h-[100%]">
                          <Image
                            src={item.logo}
                            alt="Logo"
                            width={125}
                            height={91}
                          />
                        </div>
                        <div className="w-[1px] bg-black/20  " />
                        <div className="flex flex-col justify-between py-3">
                          <h3 className="text-primary text-[32px] font-[optima] uppercase mb-6 leading-[1]">
                            {item.name}
                          </h3>
                          <p className="text-black/80 text-[20px] font-[avenir]">
                            {item.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-[76px] py-3">
                        {item.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center text-center w-auto lg:w-[160px]"
                          >
                            <Image
                              src={feature.icon}
                              alt={feature.label}
                              width={32}
                              height={32}
                              className="mb-[20px]"
                            />
                            <p className="text-[17px] font-[avenir] text-black/70 text-center max-w-[14ch]">
                              {feature.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ✅ Pagination positioned absolutely inside this relative container */}
            <div
              className={`custom-pagination custom-pagination-featured transition-opacity duration-500 ${
                showPagination ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
