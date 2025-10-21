"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  // Listen for theme change event from Hero
  useEffect(() => {
    const handler = (e: CustomEvent) => setIsDark(e.detail === "dark");
    window.addEventListener("headerThemeChange", handler as EventListener);
    return () =>
      window.removeEventListener("headerThemeChange", handler as EventListener);
  }, []);

  return (
    <header
      className={clsx(
        "w-full fixed z-50 transition-all duration-500 pt-[70px]",
        isDark ? "dark-mode" : "light-mode"
      )}
    >
      <div className="container flex items-center justify-between ">
        {/* Left: Hamburger Menu */}
        <div className="w-[200px]">
        <button aria-label="Toggle menu">
          <Image
            src="/images/hamburger.svg"
            className="w-[24px] header-icon"
            alt="menu"
            width={80}
            height={80}
          />
        </button>
</div>
        {/* Center: Logo */}
        <Link href="/" className="block">
          <Image
            src="/images/logo.svg"
            alt="imtiaz logo"
            width={200}
            height={100}
            className="h-[40.5px] w-auto header-icon"
          />
        </Link>

        {/* Right: Icons */}
         <div className="w-[200px] flex justify-end">
        <div className="flex items-center gap-[40px]">
          <Image
            src="/images/account.svg"
            alt="account"
            className="w-[22px] header-icon"
            width={24}
            height={24}
          />
          <div className="flex items-center gap-1">
            <Image
              src="/images/map.svg"
              alt="map"
              className="w-[16px] header-icon"
              width={25}
              height={25}
            />
            <ChevronDown size={16} className="header-icon" />
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
