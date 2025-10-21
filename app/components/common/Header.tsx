"use client";

import { useState } from "react";
import { Menu, User, Globe2, ChevronDown } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 border-b border-gray-100">
      {/* Left: Hamburger Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-600 hover:text-gray-800 transition"
        aria-label="Toggle menu"
      >
        <Menu size={20} />
      </button>

      {/* Center: Logo */}
      <Link
        href="/"
        className="text-2xl font-semibold tracking-[0.2em] text-[#7b1b2d]"
      >
        IMTIAZ
      </Link>

      {/* Right: Icons */}
      <div className="flex items-center gap-3">
        <button
          aria-label="User account"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          <User size={18} />
        </button>
        <button
          aria-label="Language selection"
          className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition"
        >
          <Globe2 size={18} />
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
};

export default Header;
