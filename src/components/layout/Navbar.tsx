"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isDashboard = pathname === "/dashboard";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass = isDashboard
    ? scrolled
      ? "bg-white/90 backdrop-blur-md shadow-md"
      : "bg-transparent"
    : "bg-white shadow-md";

  const textMode = isDashboard
    ? scrolled
      ? "text-black"
      : "text-white"
    : "text-black";

  const logoSrc = isDashboard
    ? scrolled
      ? "/logo-dark.svg"
      : "/logo-light.svg"
    : "/logo-dark.svg";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${bgClass}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
        <Link href="/">
          <Image src={logoSrc} alt="Vnue Logo" width={50} height={50} />
        </Link>

        <div
          className={`hidden md:flex space-x-10 font-medium transition-colors ${textMode}`}
        >
          <Link href="/dashboard">Home</Link>
          <Link href="/products">Produk</Link>
          <Link href="/contact">Hubungi kami</Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link
            href="/cart"
            className={`flex items-center space-x-1 ${textMode}`}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="font-medium">Cart</span>
          </Link>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <Link href="/cart" className={textMode}>
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <button className={textMode}>
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
