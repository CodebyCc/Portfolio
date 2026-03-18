import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { MdHome } from "react-icons/md";

const Nav = async () => {
  return (
    <nav className="flex justify-between relative  md:h-10 md:items-center bg-black ">
      <div className="z-50 hidden text-3xl  md:block cursor-pointer ml-2 mb-4 pt-1">
        <Link href="/">
          <MdHome className="text-white" />
        </Link>
      </div>

      <ul className=" hidden md:flex md:justify-center font-sans font-semibold text-white ">
        {/* <li className=" mr-2 text-zinc-900 hover:text-green-600">
          <Link href="/products">Products</Link>
        </li> */}
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
