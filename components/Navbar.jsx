import Link from "next/link";
import { FaBars, FaContao, FaTimes } from "react-icons/fa";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  const handleOpen = () => {
    setOpen(false);
  };

  return (
    <div className="h-20 flex justify-between items-center ">
      <nav className="wrapper flex justify-between items-center mx-auto">
        <div className="  py-2 px-3 rounded-l-full font-bold flex items-center gap-1 text-xl ">
          <FaContao className="bg-indigo-500 text-black " />
          <Link href="/">Cordemy</Link>
        </div>
        <div className="nav-links hidden lg:block">
          <ul className="flex items-center gap-7 text-md">
            <li>
              <Link
                href="/"
                className="nav-link font-medium hover:text-indigo-600 duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="nav-link font-medium  hover:text-indigo-600 duration-300"
              >
                Courses
              </Link>
            </li>
            <li>
              {session && (
                <Link
                  href="/orders"
                  className="nav-link font-medium  hover:text-indigo-600 duration-300"
                >
                  Orders
                </Link>
              )}
            </li>
            <li>
              <Link
                href="/about"
                className="nav-link font-medium  hover:text-indigo-600 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="nav-link font-medium hover:text-indigo-600 duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="nav-link font-medium hover:text-indigo-500 duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="invisible lg:visible">
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
              size="default"
            />
          )}
        </div>
        {/* hamburger buttons */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={handleMenu}
            className="inline-flex absolute right-6 top-5 focus:outline-none p-2 z-[999]"
          >
            <span className="sr-only">Open Main Menu</span>
            {open == true ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>
      {/* mobile menu */}
      <div>
        {open ? (
          <div className="lg:hidden duration-300">
            <div
              onClick={handleOpen}
              className={`w-screen h-screen fixed z-[900] bg-white/50 backdrop-blur-lg top-0 left-0 right-0 bottom-0 flex text-black justify-center items-center ${
                setOpen ? `` : "hidden"
              }`}
            >
              <ul className="lg:flex lg:gap-8 space-y-5 lg:space-x-0 items-center justify-center text-sm md:text-lg">
                <li>
                  <Link
                    href="/"
                    className="font-semibold hover:text-indigo-500 duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="font-semibold hover:text-indigo-500 duration-300"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  {session && (
                    <Link
                      href="/orders"
                      className="font-semibold hover:text-indigo-500 duration-300"
                    >
                      Orders
                    </Link>
                  )}
                </li>
                <li>
                  <Link
                    href="/about"
                    className="font-semibold hover:text-indigo-500 duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="font-semibold hover:text-indigo-500 duration-300"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-semibold hover:text-indigo-500 duration-300"
                  >
                    Contact
                  </Link>
                </li>

                <li className="pt-5">
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
                      size="default"
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
