"use client";

import Image from "next/image";

const ImtiazApp = () => {
  return (
    <section className="bg-white pt-[75px]">
      <div className="relative w-full bg-[#F0F0F0] overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Section */}
            <div className="flex flex-col justify-center">
              <h2 className="font-[optima] text-[50px] font-[400] text-primary uppercase mb-[32px] leading-[110%]">
                IMTIAZ APP
              </h2>
              <p className="text-[20px] font-[avenir] text-black/80 mb-[24px] max-w-[62ch] leading-[110%]">
                Imtiaz Developments delivers a total solution to all kinds of
                Real Estate projects, from initial concept through completion
                and handover to after sale maintenance and support.
              </p>
              {/* App Store Buttons */}
              <div className="flex gap-[25px]">
                <a
                  href="#"
                  aria-label="Download on App Store"
                  className="bg-black rounded-[11px] h-[65px] w-[194px]"
                >
                  <Image
                    src="/images/home/app/apple.svg"
                    alt="Download on App Store"
                    width={194}
                    height={65}
                    className="object-contain"
                  />
                </a>
                <a
                  href="#"
                  aria-label="Get it on Google Play"
                  className="bg-black rounded-[11px] h-[65px] w-[194px]"
                >
                  <Image
                    src="/images/home/app/playstore.svg"
                    alt="Get it on Google Play"
                    width={194}
                    height={65}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
            {/* Right Section - Phone Mockup */}
            <div className="relative flex justify-center">
              {/* Background Circle */}
              <div className="absolute">
                <Image
                  src="/images/home/app/bg-frame.svg"
                  alt=""
                  width={958}
                  height={789}
                  className="object-contain"
                />
              </div>
              {/* Phone Mockup */}
              <div className="relative z-10 ml-3 lg:ml-[22px]">
                <Image
                  src="/images/home/app/phone-mockup.png"
                  alt="Imtiaz App on Phone"
                  width={943}
                  height={943}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImtiazApp;
