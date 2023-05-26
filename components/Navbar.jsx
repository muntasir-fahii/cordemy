import Link from "next/link";
import { FaContao } from "react-icons/fa";
import Button from "./Button";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="h-20 flex items-center ">
      <div className="wrapper flex justify-between items-center">
        <div className="  py-2 px-3 rounded-l-full font-bold flex items-center gap-1 text-xl ">
          <FaContao className="bg-indigo-500 text-black " />
          <Link href="/">Cordemy</Link>
        </div>
        <div className="flex gap-7 font-medium text-md">
          <Link
            href="/"
            className="nav-link hover:text-indigo-600 duration-300"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="nav-link hover:text-indigo-600 duration-300"
          >
            Courses
          </Link>
          {session && (
            <Link
              href="/orders"
              className="nav-link hover:text-indigo-600 duration-300"
            >
              Orders
            </Link>
          )}
          <Link
            href={"/about"}
            className="nav-link hover:text-indigo-600 duration-300"
          >
            About
          </Link>
          <Link
            href="/testimonials"
            className="nav-link hover:text-indigo-600 duration-300"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="nav-link hover:text-indigo-500 duration-300"
          >
            Contact
          </Link>
        </div>
        <div>
          {!session ? (
            <Button
              href="/users/login"
              placeholder="Sign in"
              color="primary"
              size="default"
            />
          ) : (
            <Button
              href="/users/profile"
              placeholder="Profile"
              color="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
