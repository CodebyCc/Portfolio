import Link from "next/link";

function Linky({ link, children }) {
  return (
    <li className="mb-22 hover:text-green-400 ">
      <Link href={link}>{children}</Link>
    </li>
  );
}

export default Linky;
