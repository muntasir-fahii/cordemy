import Link from "next/link";
import { FaContao } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center ">
      <div className="wrapper flex justify-between items-center">
        <div className="  py-2 px-3 rounded-l-full font-bold flex items-center gap-1 text-xl ">
          <FaContao className="bg-lime-400 text-black " />
          <Link href="/">Cordemy</Link>
        </div>
        <div className="flex gap-7 font-medium text-md">
          <Link href="/" className="nav-link hover:text-lime-600 duration-300">
            Home
          </Link>
          <Link
            href="/courses"
            className="nav-link hover:text-lime-500 duration-300"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="nav-link hover:text-lime-500 duration-300"
          >
            About
          </Link>
          <Link
            href="/testimonials"
            className="nav-link hover:text-lime-500 duration-300"
          >
            Testimonilas
          </Link>
          <Link
            href="/contact"
            className="nav-link hover:text-lime-500 duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center font-medium bg-black py-2 px-5 text-white rounded-md hover:bg-lime-400 hover:text-black duration-300 hover:border hover:border-gray-400">
          <Link href="login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
