"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between bg-gradient-to-r to-emerald-800 from-sky-700 p-4 md:px-8 rounded-lg">
      {/* LEFT */}
      <Link href="/" className="flex items-center gap-4 text-white">
        <Image
          src="/catalogue.ico"
          alt="TrendLama"
          width={30}
          height={30}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="text-md md:text-lg font-bold tracking-wider">
          KATALOG MARGO RAHAYU
        </p>
      </Link>

      {/* RIGHT (desktop) */}
      <div className="hidden md:flex items-center gap-6 text-white">
        <Link href="/">
          <h1 className="text-md font-medium hover:text-sky-500 transition-all duration-300">Beranda</h1>
        </Link>
        <Link href="/address">
          <h1 className="text-md font-medium hover:text-sky-500 transition-all duration-300">Alamat</h1>
        </Link>
        <Link href="/contact">
          <h1 className="text-md font-medium hover:text-sky-500 transition-all duration-300">Kontak</h1>
        </Link>
        <Link href="/about">
          <h1 className="text-md font-medium hover:text-sky-500 transition-all duration-300">Tentang</h1>
        </Link>
      </div>

      {/* BURGER (mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {isOpen ? <X size={28} className="text-red-600" /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute w-90 text-white top-20 p-10 rounded-lg right-4 bg-gradient-to-r to-emerald-800 from-sky-700 shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-lg font-medium hover:text-sky-700 transition-all duration-300">Beranda</h1>
          </Link>
          <Link href="/address" onClick={() => setIsOpen(false)}>
            <h1 className="text-lg font-medium hover:text-sky-700 transition-all duration-300">Alamat</h1>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <h1 className="text-lg font-medium hover:text-sky-700 transition-all duration-300">Kontak</h1>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <h1 className="text-lg font-medium hover:text-sky-700 transition-all duration-300">Tentang</h1>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
