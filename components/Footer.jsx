import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaContao } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession();

  return (
    <div className="wrapper py-10 h-full ">
      <div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <div className="grid col-span-2 gap-2 items-center w-1/2">
            <div className="py-2 rounded-l-full font-bold flex items-center gap-1 text-xl ">
              <FaContao className="bg-indigo-500 text-black " />
              <Link href="/">Cordemy</Link>
            </div>
            <div>
              <p className="w-full">
                Where knowledge meets opportunity. Elevate your skills and
                unleash your potential with our cutting-edge e-learning
                platform. Discover a world of interactive courses, expert
                instructors, and limitless possibilities. Join Cordemy today and
                embark on a unique learning adventure tailored to your
                aspirations.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/">
                <BsYoutube className="text-lg hover:text-indigo-500 duration-300" />
              </Link>
              <Link href="/">
                <BsTwitter className="text-lg hover:text-indigo-500 duration-300" />
              </Link>
              <Link href="/">
                <BsFacebook className="text-lg hover:text-indigo-500 duration-300" />
              </Link>
            </div>
          </div>
          <div className="grid  grid-cols-1 lg:grid-cols-2 lg:ml-72 col-span-1 gap-5">
            <div className="flex flex-col gap-1">
              <p className="text-indigo-500 text-lg font-semibold">Sevices</p>
              <Link
                href="/courses"
                className=" hover:text-indigo-600 duration-300"
              >
                Courses
              </Link>
              {session && (
                <Link
                  href="/orders"
                  className=" hover:text-indigo-600 duration-300"
                >
                  Orders
                </Link>
              )}
              <Link
                href="/contact"
                className=" hover:text-indigo-600 duration-300"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-indigo-500 text-lg font-semibold">Company</p>
              <Link
                href="/about"
                className=" hover:text-indigo-600 duration-300"
              >
                About
              </Link>
              <Link
                href="/testimonials"
                className=" hover:text-indigo-600 duration-300"
              >
                Testimonials
              </Link>
              <Link
                href="/users/faq"
                className=" hover:text-indigo-600 duration-300"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-600 py-2 mt-3">
        <p>
          Developed By <span className="font-medium">Muntasir Fahim</span>{" "}
        </p>
        <p>&copy; {new Date().getFullYear()} Cordemy. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
