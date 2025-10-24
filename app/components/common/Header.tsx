"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = (e: CustomEvent) => setIsDark(e.detail === "dark");
    window.addEventListener("headerThemeChange", handler as EventListener);
    return () =>
      window.removeEventListener("headerThemeChange", handler as EventListener);
  }, []);

  const menuItems = [
    { name: "About", href: "/#" },
    { name: "Communities", href: "/#" },
    { name: "Properties", href: "/#" },
    { name: "Media Center", href: "/#" },
    { name: "Partnership", href: "/#" },
    { name: "Channel Partner", href: "/#" },
    { name: "Pay Now", href: "/#" },
  ];

  return (
    <div className="relative z-[999]">
      <header
        className={clsx(
          "w-full fixed z-50 transition-all duration-500",
          isDark ? "dark-mode bg-white py-8" : "light-mode pt-[70px]"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Left: Hamburger */}
          <div className="w-[200px]">
            <button
              aria-label="Toggle menu "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-[26px] h-[21px] flex flex-col justify-between items-center z-[60] cursor-pointer"
            >
              <span
                className={clsx(
                  "block w-full h-[2px] transition-all duration-300 ease-in-out",
                  isMenuOpen ? "rotate-45 translate-y-[10px]" : "",
                  isMenuOpen || !isDark ? "bg-white" : "bg-black"
                )}
              />
              <span
                className={clsx(
                  "block w-full h-[2px] transition-all duration-300 ease-in-out",
                  isMenuOpen ? "opacity-0" : "opacity-100",
                  isMenuOpen || !isDark ? "bg-white" : "bg-black"
                )}
              />
              <span
                className={clsx(
                  "block w-full h-[2px] transition-all duration-300 ease-in-out",
                  isMenuOpen ? "-rotate-45 -translate-y-[10px]" : "",
                  isMenuOpen || !isDark ? "bg-white" : "bg-black"
                )}
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

          {/* Right Icons */}
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

        {/* Slide-out Menu */}
        <div
          className={clsx(
            "fixed top-0 left-0 h-full w-[450px] bg-black/80 backdrop-blur-md transition-transform duration-500 z-40 flex flex-col justify-center pl-[60px] p-10",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="flex flex-col space-y-8 text-[24px] font-[200] uppercase font-[avenir] w-full">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  "group flex items-center justify-between text-white/50 hover:text-white transition-all duration-300 ease-out transform translate-y-4 opacity-0",
                  isMenuOpen && "translate-y-0 opacity-100"
                )}
              >
                <span>{item.name}</span>
                <Image src={"/images/icons/chevron-right.svg"} className="h-[22px] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-white" alt="ic" width={20} height={20} />
                {/* <ChevronRight
                  size={20}
                  className=""
                /> */}
              </Link>
            ))}
          </nav>
        </div>

        {/* Overlay */}
        <div
          className={clsx(
            "fixed inset-0 bg-black/40 z-30 transition-opacity duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMenuOpen(false)}
        />
      </header>
    </div>
  );
};

export default Header;
