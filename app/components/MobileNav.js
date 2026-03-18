"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdMenu, MdClose, MdHome } from "react-icons/md";
import Linky from "./Linky";

function MobileNav() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const hover = "hover:text-yellow-400";

  useEffect(() => {
    if (nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [nav]);
  return (
    <>
      <div className="z-50 top  md:hidden cursor-pointer text-3xl ml-2 pt-1 text-white">
        <Link
          onClick={() => setNav(false)}
          className={
            nav
              ? `text-lg  font-semibold ${hover} fixed`
              : `text-lg font-semibold ${hover}  `
          }
          href="/"
        >
          <MdHome className="text-2xl" />
        </Link>
      </div>
      <div
        onClick={handleClick}
        className={
          nav
            ? ` flex cursor-pointer z-50 md:hidden text-3xl fixed top-1 right-2  ${hover} `
            : ` flex cursor-pointer z-50 md:hidden text-3xl pr-2  ${hover} text-white`
        }
      >
        {nav ? <MdClose /> : <MdMenu />}
      </div>
      {nav && (
        <div className=" motion-preset-slide-up-lg bg-white h-screen  w-screen block ease-in duration-500 fixed md:hidden  z-40">
          <ul
            className="mt-30 ml-20 font-sans  font-semibold"
            onClick={handleClick}
          >
            {/* <li className=" hover:text-yellow-600 mb-20 mt-20">
              <Link href="/warehouse">Slippers +</Link>
            </li> */}

            <li className=" hover:text-red-500 mb-20 mt-20  mr-2">
              <Link href="#aboutme">About Me</Link>
            </li>
            <li className=" text-yellow-600 hover:text-yellow-400  mb-20 mt-20  mr-2">
              <Link href="#projects">Projects+</Link>
            </li>
            <li className=" hover:text-green-600 mb-20 mt-20  mr-2">
              <Link href="/">Skills</Link>
            </li>
            <li className=" hover:text-black mb-20 mt-20  mr-2">
              <Link href="#footer">Contact Me</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
