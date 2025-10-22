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
          {/* Properties Column - Takes 2 columns */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {/* Column 1: First 15 items */}
            <div>
              <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-[30px] underline underline-offset-[10px] decoration-1">
                PROPERTIES
              </h3>
              <ul className="space-y-[30px]">
                {footerData.properties.slice(0, 15).map((item, index) => (
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

            {/* Column 2: Remaining items */}
            <div>
              {/* Align second column with list, not heading */}
              <ul className="space-y-[30px]">
                {footerData.properties.slice(15).map((item, index) => (
                  <li key={index + 15}>
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

          {/* Communities Column */}
          <div>
            <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-[30px] underline underline-offset-[10px] decoration-1">
              COMMUNITIES
            </h3>
            <ul className="space-y-[30px] mb-[70px]">
              {footerData.communities.map((item, index) => (
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
              <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-[30px] underline underline-offset-[10px] decoration-1">
                QUICK LINKS
              </h3>
              <ul className="space-y-[30px]">
                {footerData.quickLinks.map((item, index) => (
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
            {/* Media Links Column */}
            <div>
              <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-[30px] underline underline-offset-[10px] decoration-1">
                MEDIA LINKS
              </h3>
              <ul className="space-y-[30px] mb-[70px]">
                {footerData.mediaLinks.map((item, index) => (
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
            {/* Contact */}
            <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-[30px] underline underline-offset-[10px] decoration-1">
              CONTACT
            </h3>
            <div className="space-y-[30px] mb-[70px]">
              <p className="text-white/60 text-[17px] font-[400] font-[avenir] leading-[0.9411764705882353]">
                {footerData.contact.phone}
              </p>
              <p className="text-white/60 text-[17px] font-[400] font-[avenir] leading-[0.9411764705882353]">
                {footerData.contact.email}
              </p>
              <p className="text-white/60 text-[17px] font-[400] font-[avenir] leading-[0.9411764705882353]">
                {footerData.contact.address}
              </p>
            </div>

            {/* Newsletter */}
            <h3 className="font-[optima] font-[550] leading-[100%] text-[24px] uppercase tracking-wider mb-[30px] underline underline-offset-[10px] decoration-1">
              NEWSLETTER
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="mb-[30px]">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER EMAIL"
                  className="w-full bg-transparent border-b border-white/40 text-white placeholder:text-white/50 text-[17px] font-[400] font-[avenir] py-2 pr-10 focus:outline-none focus:border-white transition-colors"
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
                  className="text-white hover:text-white/60 transition-colors duration-300"
                  aria-label={social.name}
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
              <a
                href="#"
                className="hover:opacity-60 transition-opacity duration-300 bg-black rounded-[11px] flex items-center gap-[5px] py-[9px] px-[12px]"
                aria-label="Download on App Store"
              >
                <Image
                  src="/images/home/app/apple.svg"
                  alt="Download on App Store"
                  width={22}
                  height={22}
                  className="h-[22px] w-auto"
                />
                <div className="flex flex-col text-white -space-y-1">
                  <p className="text-[9px] font-[rubik] font-[500] ">
                    Download on the
                  </p>
                  <p className="text-[19px] font-[rubik] font-[500]">
                    App Store
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="hover:opacity-60 transition-opacity duration-300 bg-black rounded-[11px] flex items-center gap-[5px] py-[9px] px-[12px]"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/images/home/app/playstore.svg"
                  alt="Get it on Google Play"
                  width={22}
                  height={22}
                  className="h-[22px] w-auto"
                />
                <div className="flex flex-col gap-0 text-white -space-y-1">
                  <p className="text-[9px] font-[rubik] font-[500]">
                    Get it on
                  </p>
                  <p className="text-[19px] font-[rubik] font-[500]">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-[40px] bg-[#893F51]">
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
