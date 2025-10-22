"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { pressSpotlights } from "../data";

const PressSpotlights = () => {
  return (
    <section className="relative w-full bg-white py-[75px]">
      <div className="container">
        <h2 className="text-center font-[optima] text-[50px] font-[400] text-primary uppercase mb-[64px] leading-[110%]">
          PRESS SPOTLIGHTS
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <button className="press-prev flex-shrink-0 -mt-30 z-10 w-[80px] h-[80px] group cursor-pointer bg-white border-2 border-primary hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 mr-[14px]">
          <Image
                                    src="/images/icons/arrow-right.svg"
                                    alt="arrow-right"
                                    width={32}
                                    height={32}
                                    className="w-[32px] h-[32px] rotate-180   brightness-[1]  invert-[0] group-hover:invert group-hover:brightness-1 "
                                  />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".press-next",
              prevEl: ".press-prev",
            }}
            pagination={{
              el: ".press-pagination",
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={22}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 22 },
              1024: { slidesPerView: 3, spaceBetween: 22 },
              1280: { slidesPerView: 4, spaceBetween: 22 },
            }}
            className="relative"
          >
            {pressSpotlights.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="overflow-hidden cursor-pointer group">
                  {/* IMAGE CONTAINER */}
                  <div className="relative w-full h-[380px] overflow-hidden group">
                    {/* IMAGE */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full transition-all duration-300"
                    />

                    {/* GRADIENT OVERLAY */}
                    <div
                      style={{
                        background:
                          "linear-gradient(180.2deg, rgba(0, 0, 0, 0) 50.13%, rgba(0, 0, 0, 0.5) 99.82%)",
                      }}
                      className="absolute inset-0 z-10"
                    />

                    {/* BACKDROP BLUR ON HOVER */}
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[12px]" />

                    {/* CENTERED ICON ON HOVER */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-30 transition-opacity duration-300">
                      <div className="w-[60px] h-[60px] bg-white backdrop-blur-md rounded-full flex items-center justify-center">
                        <Image
                          src="/icons/arrow-right-top-primary.svg"
                          alt="Arrow"
                          width={18}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="pt-[24px]">
                    <p className="text-[17px] text-black/80 font-[400] font-[avenir] mb-[15px] leading-[1.1] capitalize tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="text-[24px] font-[400] font-[optima] text-black uppercase leading-[1.2]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next Button */}
          <button className="press-next -mt-30 flex-shrink-0 z-10 w-[80px] h-[80px] group cursor-pointer bg-white border-2 border-primary hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 ml-[14px]">
           <Image
                                     src="/images/icons/arrow-right.svg"
                                     alt="arrow-right"
                                     width={32}
                                     height={32}
                                     className="w-[32px] h-[32px] brightness-[1] invert-[0]  group-hover:invert group-hover:brightness-0 "
                                   />
          </button>
        </div>

        {/* Pagination */}
        <div className="press-pagination mt-[40px]"></div>

        {/* View All Button */}
        <div className="flex justify-center mt-[40px]">
          <button className="p-[15px] cursor-pointer border leading-[1.444444444444444] border-primary text-primary hover:bg-primary hover:text-white font-[400] text-[18px] font-[avenir] uppercase rounded-[169px] transition-colors duration-300">
            VIEW ALL NEWS
          </button>
        </div>
      </div>
    </section>
  );
};

export default PressSpotlights;
