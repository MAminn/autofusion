"use client";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handeScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    // add scroll event
    window.addEventListener("scroll", handeScroll);

    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handeScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive
          ? "h-[80px] bg-black/80 backdrop-blur-md"
          : "h-[100px] bg-transparent"
      } fixed max-w-[1920px] top-0 w-full transition-all duration-300 z-50`}>
      <div className='container mx-auto h-full flex items-center justify-between px-6'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <div className='text-white font-oswald text-2xl font-bold tracking-wider'>
            AUTOFUSION
          </div>
        </Link>

        {/* Mobile nav */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[80px]" : "top-[100px]"} 
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/20"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          flex flex-col text-center gap-8 fixed bg-black/90 backdrop-blur-md w-full left-0 text-base uppercase font-medium text-white transition-all xl:hidden`}
        />

        {/* Center navigation */}
        <Nav containerStyles='hidden xl:flex gap-8 text-white text-sm uppercase font-medium tracking-wider' />

        {/* Right side actions */}
        <div className='flex items-center gap-6'>
          {/* CTA Button */}
          <Link
            href='/contact'
            className='hidden md:block border border-white text-white px-8 py-3 text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl'>
            GET IN TOUCH
          </Link>

          {/* Mobile menu toggle */}
          <button
            className='text-white xl:hidden p-3 rounded-full hover:bg-white/10 transition-all duration-300'
            onClick={() => setOpenNav(!openNav)}>
            <MdMenu className='text-2xl' />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
