import About from "@/components/About";
import Link from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdInsertChart } from "react-icons/md";

const HomePage = () => {
  return (
    <div className=" h-[90vh]  p-10 mx-auto grid items-center justify-center grid-cols-2 gap-2">
      <div className="grid gap-5 col-span-1 ">
        <h1 className="text-5xl font-semibold  w-">
          <span className="text-lime-600">Studying</span> Online is now <br />
          much easier
        </h1>

        <p className="text-lg w-1/2">
          Cordemy in as intersting platform that will teach you in more an
          interactive way
        </p>
        <Link
          href="/courses"
          className="uppercase bg-lime-500 py-2 px-10 w-1/4 text-center rounded-2xl font-medium hover:text-white hover:bg-lime-600 duration-300
          "
        >
          get courses
        </Link>
      </div>
      <div className="col-span-1 relative">
        <img
          src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hero-img"
          className="object-fill overflow-hidden"
        />
        <div className="absolute -bottom-14 left-52 bg-white/75  rounded-lg py-5 px-7 z-30 grid justify-center it<ems-center text-center">
          <div
            className="flex items-center justify-center
           gap-3"
          >
            <AiOutlineCalendar className="items-center justify-center text-3xl text-lime-600" />
            <p className="text-lg font-semibold">250k</p>
          </div>
          <p className="font-medium">Assisted Students</p>
        </div>
        <div className="absolute top-36 -left-24 bg-white/75  rounded-lg py-2 px-16 z-30 grid justify-center it<ems-center text-center">
          <div
            className="flex items-center justify-center
           gap-3"
          >
            <BsEnvelopeFill className="items-center justify-center text-3xl text-white bg-orange-500 p-1 rounded-lg" />
            <p className="text-lg font-semibold">Congratulations</p>
          </div>
          <p className="">Your admission completed</p>
        </div>
        <div className="absolute top-16 right-16 bg-pink-600/80 text-white py-2 px-2 rounded-lg shadow-2xl">
          <MdInsertChart className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
