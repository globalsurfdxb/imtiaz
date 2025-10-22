"use client";

import Link from "next/link";
import Image from "next/image";
import { footerData } from "./data";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container pt-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div>
            <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-[40px] underline underline-offset-[10px] decoration-1">
              ABOUT IMTIAZ
            </h3>
            <ul className="space-y-[30px] mb-[70px]">
              {footerData.aboutImtiaz.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-white/60 hover:text-white text-[17px] font-[400] font-[avenir] transition-colors duration-300 leading-[0.9411764705882353]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Quick Links Column */}
            <div>
              <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-10 underline underline-offset-[10px] decoration-1">
                POPULAR AREAS
              </h3>
              <ul className="space-y-[30px]">
                {footerData.popularAreas.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-white/60 hover:text-white text-[17px] font-[400] font-[avenir] transition-colors duration-300 leading-[0.9411764705882353]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-10 underline underline-offset-[10px] decoration-1">
              Help & Support
            </h3>
            <ul className="space-y-[30px] mb-[70px]">
              {footerData.helpSupport.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-white/60 hover:text-white text-[17px] font-[400] font-[avenir] transition-colors duration-300 leading-[0.9411764705882353]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Quick Links Column */}
            <div>
              <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-10 underline underline-offset-[10px] decoration-1">
                Media Center
              </h3>
              <ul className="space-y-[30px]">
                {footerData.mediaCenter.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-white/60 hover:text-white text-[17px] font-[400] font-[avenir] transition-colors duration-300 leading-[0.9411764705882353]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-10 underline underline-offset-[10px] decoration-1">
                Trending Searches
              </h3>
              <ul className="space-y-[30px]">
                {footerData.trendingSearches.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-white/60 hover:text-white text-[17px] font-[400] font-[avenir] transition-colors duration-300 leading-[0.9411764705882353]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            {/* Newsletter */}
            <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-10 underline underline-offset-[10px] decoration-1">
              NEWSLETTER
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="mb-[30px]">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER EMAIL"
                  className="w-full bg-transparent border-b border-white tracking-widest text-white placeholder:text-white/50 placeholder:text-[17px] placeholder:font-[400] placeholder:leading-[0.9411764705882353] placeholder:font-[avenir] py-2 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-white/60 transition-colors"
                >
                  <Image
                    src="/icons/arrow-right-white.svg"
                    alt="Arrow Right"
                    width={24}
                    height={24}
                    className="h-[24px] w-auto"
                  />
                </button>
              </div>
            </form>

            {/* Social Media */}
            <div className="flex gap-4 mb-[30px]">
  {footerData.socialMedia.map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      className="transition-all duration-500 hover:brightness-0 hover:invert-1 hover:sepia  "
    >
      <Image
        src={social.icon}
        alt={social.name}
        width={24}
        height={24}
        className="h-[24px] w-auto"
      />
    </a>
  ))}
</div>


            {/* App Store Buttons */}
            <div className="flex gap-[25px]">
              <div className="flex items-center  bg-black rounded-[7px] cursor-pointer hover:translate-y-[-2px] transition-all duration-300">
                <Image
                  src="/images/icons/appstore.svg"
                  alt="Get it on App Store"
                  width={124}
                  height={43}
                  className=" w-auto"
                />
              </div>
              <div className="flex items-center  bg-black rounded-[7px] cursor-pointer hover:translate-y-[-2px] transition-all duration-300">
                <Image
                  src="/images/icons/playstore.svg"
                  alt="Get it on App Store"
                  width={128}
                  height={43}
                  className=" w-auto"
                />
              </div>
               
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-[55px] bg-[#893F51]">
        <div className="py-[25px]">
          <p className="text-white/75 text-[17px] font-[avenir] font-[400] leading-[1.882352941176471] text-center opacity-45">
            ©2025 Imtiaz Development. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
