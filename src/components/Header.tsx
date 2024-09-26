"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full px-20 max-md:px-10 bg-[rgba(255,255,255,0.9)] backdrop-blur-sm box-b  text-[black] min-h-[40px] box-border flex justify-between items-center py-5 z-50">
      <div className="flex justify-center items-center gap-[10px]">
        <Link href="/" legacyBehavior>
          <a className="flex justify-center items-center gap-[10px]">
            <image
              width="201"
              height="48"
              className="w-[200px] max-md:w-[150px]"
              style={{ color: 'transparent' }}
              xlinkHref="/../public/image/logo1.d6ac039b.svg"
            />
          </a>
        </Link>
      </div>
      <nav className="flex gap-[30px] max-md:hidden font-nueuthin justify-center md:items-center">
        <Link href="/#aboutus" legacyBehavior>
          <a className="w-fit">About us</a>
        </Link>
        <Link href="/#features" legacyBehavior>
          <a className="w-fit">Product Features</a>
        </Link>
        <Link href="/#footer" legacyBehavior>
          <a className="w-fit">Contact us</a>
        </Link>
      </nav>
      <button className="w-[179px] max-md:hidden h-[52px] grid place-items-center rounded-xl bg-[#222222] text-white">
        Get Started
      </button>
      <div className={`max-md:menu_con w-full md:hidden h-[100vh] md:h-fit absolute md:static z-10 top-[100%] left-0 flex flex-col md:flex-row gap-[30px] md:justify-end md:items-end ${menuOpen ? 'block' : 'hidden'}`}>
        <div data-open="0" className="h-full bg-[white] w-full flex flex-col md:flex-row gap-[30px] md:justify-center md:items-center p-5 md:p-0">
          <div className="text-[black] flex gap-[10px] flex-col md:flex-row justify-center md:items-center">
            <Link href="/#aboutus" legacyBehavior>
              <a className="w-fit">About us</a>
            </Link>
            <Link href="/#features" legacyBehavior>
              <a className="w-fit">Product Features</a>
            </Link>
            <Link href="/#footer" legacyBehavior>
              <a className="w-fit">Contact us</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="menu visible md:hidden w-[20px]" onClick={toggleMenu}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          className="svg-inline--fa fa-bars text-[black]"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
