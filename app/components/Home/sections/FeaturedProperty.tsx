"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { featuredProperties } from "../data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProperty = () => {
  return (
    <section className="pb-[75px] pt-[150px] bg-white overflow-hidden">
      <div className="relative w-full">
        <h2 className="text-center font-[optima] text-[50px] font-[400] text-primary uppercase pb-[64px]">
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
              el: ".custom-pagination-featured",
              clickable: true,
            }}
            autoplay={{ delay: 4000 }}
            loop
            className="relative"
          >
            {featuredProperties.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative w-full flex flex-col items-center">
                  {/* IMAGE */}
                  <div className="relative w-full mx-auto">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={1920}
                      height={860}
                      className="rounded-none object-cover w-full h-full md:h-[650px] 2xl:h-[720px] max-w-[1920px] max-h-[860px]"
                    />
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
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-20 flex flex-col items-center z-10 cursor-pointer">
                      <button className="bg-transparent uppercase hover:bg-white/10 transition-all duration-300 font-[avenir] font-[400] border border-white text-white text-[18px] p-[15px] rounded-[169px] cursor-pointer">
                        EXPLORE
                      </button>
                    </div>

                    {/* Navigation buttons */}
                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 z-20 cursor-pointer">
                      <button className="cursor-pointer swiper-prev w-[70px] h-[70px] bg-transparent border border-white hover:bg-white text-white hover:text-primary rounded-full flex items-center justify-center transition">
                        <ChevronLeft size={28} />
                      </button>
                      <button className="cursor-pointer swiper-next w-[70px] h-[70px] bg-transparent border border-white hover:bg-white text-white hover:text-primary rounded-full flex items-center justify-center transition">
                        <ChevronRight size={28} />
                      </button>
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="flex flex-col md:flex-row justify-between items-center container w-full mt-[32px] h-full pb-[22px] border-b border-black/20">
                    <div className="flex items-stretch gap-[62px]">
                      <Image
                        src={item.logo}
                        alt="Logo"
                        width={100}
                        height={40}
                        className="mb-2"
                      />
                      <div className="w-[1px] bg-black/20 ml-10" />
                      <div className="flex flex-col justify-between py-2">
                        <h3 className="text-primary text-[32px] font-[optima] uppercase">
                          {item.name}
                        </h3>
                        <p className="text-black/80 text-[20px] font-[avenir]">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[76px]">
                      {item.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center text-center"
                        >
                          <Image
                            src={feature.icon}
                            alt={feature.label}
                            width={32}
                            height={32}
                            className="mb-[20px]"
                          />
                          <p className="text-[17px] font-[avenir] text-black/70 text-center max-w-[110px]">
                            {feature.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination-featured"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
