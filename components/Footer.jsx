import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaContao } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession();

  return (
    <div className="wrapper py-10 h-full ">
      <div className="flex justify-between gap-5">
        <div className="grid gap-2 items-center w-1/2">
          <div className="py-2 rounded-l-full font-bold flex items-center gap-1 text-xl ">
            <FaContao className="bg-indigo-500 text-black " />
            <Link href="/">Cordemy</Link>
          </div>
          <div>
            <p className="w-1/2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, unde reiciendis placeat, dolore consequatur nesciunt,
              pariatur repudiandae optio voluptatem beatae quia amet quo
              sapiente itaque aspernatur tenetur ex explicabo quod?
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
        <div className="flex flex-col gap-1">
          <p className="text-indigo-500 text-lg font-semibold">Sevices</p>
          <Link href="/courses" className=" hover:text-indigo-600 duration-300">
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
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-indigo-500 text-lg font-semibold">Company</p>
          <Link href="/about" className=" hover:text-indigo-600 duration-300">
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
