import Image from "next/image";
import Link from "next/link";

import { AiOutlineCalendar } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdInsertChart } from "react-icons/md";

const Hero = () => {
  return (
    <div className=" h-[90vh] p-10 mx-auto grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-2  mb-16 md:mb-72 lg:mb-10">
      <div className="grid gap-5 col-span-1 ">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-5xl font-semibold overflow-hidden"
        >
          <span className="text-indigo-700">Studying</span> Online is now <br />
          much easier
        </h1>

        <p
          // data-aos="zoom-in"
          // data-aos-duration="1000"
          className="text-lg w-1/2"
        >
          Cordemy in as intersting platform that will teach you in more an
          interactive way
        </p>
        <Link
          // data-aos="zoom-in"
          // data-aos-duration="1000"
          href="/courses"
          className="uppercase bg-indigo-600 text-white py-1 lg:py-2 px-5 lg:px-10 w-1/2 lg:w-1/4 text-center rounded-lg font-medium hover:text-white hover:bg-indigo-700 duration-300
      "
        >
          get courses
        </Link>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="col-span-1 relative"
      >
        <Image
          src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hero-img"
          height={500}
          width={500}
          className="w-[60rem] object-fit overflow-hidden"
        />
        <div className="invisible md:visible absolute -bottom-4 lg:-bottom-14 right-14 lg:right-28 bg-white/75  rounded-lg py-2 lg:py-5 px-3 lg:px-7 z-30 grid justify-center it<ems-center text-center">
          <div
            className="flex items-center justify-center
       gap-3"
          >
            <AiOutlineCalendar className="items-center justify-center text-2xl lg:text-3xl text-lime-600" />
            <p className="text-base lg:text-lg font-semibold">250k</p>
          </div>
          <p className="font-medium">Assisted Students</p>
        </div>
        <div className="invisible md:visible absolute top-48 lg:top-36 -left-6 lg:-left-24 bg-white/75  rounded-lg py-1 lg:py-4 px-2 lg:px-12 z-30 grid justify-center it<ems-center text-center">
          <div
            className="flex items-center justify-center
       gap-3"
          >
            <BsEnvelopeFill className="items-center justify-center text-2xl lg:text-3xl text-white bg-orange-500 p-1 rounded-lg" />
            <p className="text-lg font-semibold">enroll now</p>
          </div>
          <p className="">Your success is our priority</p>
        </div>
        <div className="absolute top-6 lg:top-16 right-6 lg:right-16 bg-pink-600/80 text-white py-2 px-2 rounded-lg shadow-2xl">
          <MdInsertChart className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
