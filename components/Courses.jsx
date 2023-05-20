import { currencyConverter } from "@/utils/currencyConverter";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import Button from "./Button";

const Courses = ({ course }) => {
  return (
    <div className="w-full lg:w-[30rem] shadow-md rounded-md overflow-hidden">
      <div className="w-full h-[25rem] lg:h-[20rem] overflow-hidden">
        <Image
          src={course.cover}
          alt={course.title}
          width={640}
          height={360}
          priority
          className="w-full  h-full object-cover "
        ></Image>
      </div>

      <div className="p-5 space-y-4">
        <div className="h-[7.5rem] space-y-1">
          <h3 className="text-3xl font-medium">{course.title}</h3>
          <p className="flex justify-between text-gray-600">
            <span>
              by{" "}
              <span className="text-black font-semibold">
                {course.instructor}
              </span>
            </span>
            <span>
              Duration:{" "}
              <span className="text-black font-semibold">
                {course.duration}
              </span>
            </span>
          </p>
          <p className="flex justify-between text-gray-600">
            <span>
              Enrolled Students:{" "}
              <span className="text-black font-semibold">
                {course.Students}
              </span>{" "}
            </span>
            <span className="flex items-center gap-1">
              <AiOutlineStar className="text-indigo-600" />
              <span className="text-black font-semibold"> {course.rating}</span>
            </span>
          </p>
        </div>
        <p className="text-gray-600 h-32 mt-5">
          {course.description.substring(0, 250)}...
        </p>

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">
            {currencyConverter(course.price)}
          </p>
          <Button href={`/courses/${course.id}`} placeholder="View Details" />
        </div>
      </div>
    </div>
  );
};

export default Courses;
