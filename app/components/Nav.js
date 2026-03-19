import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
// import { MdHome } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Nav = async () => {
  return (
    <nav className="flex justify-between  md:h-10 md:items-center  text-gray-400 bg-black z-50 ">
      <div className="z-50 hidden text-3xl  md:block cursor-pointer ml-2 mb-4 pt-1">
        <Link href="/">
          <FaHome size={30} className=" fixed top-0 left-1 " />
        </Link>
      </div>

      <ul className=" hidden md:flex md:justify-center font-sans font-semibold fixed top-1 right-2">
        <li className="  hover:text-red-500  mr-2">
          <Link href="#aboutme">About Me</Link>
        </li>
        <li className=" hover:text-yellow-300  mr-2">
          <Link href="#projects">Projects</Link>
        </li>
        <li className=" hover:text-green-600  mr-2">
          <Link href="/">Skills</Link>
        </li>
        <li className=" hover:text-gray-800  mr-2">
          <Link href="#footer">Contact Me</Link>
        </li>
      </ul>
      <MobileNav />
    </nav>
  );
};

export default Nav;
