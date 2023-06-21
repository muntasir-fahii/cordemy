import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = ({ testimonial }) => {
  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 shadow-md rounded-tl-3xl rounded-bl-3xl rounded-br-3xl bg-indigo-500 text-white px-5 mb-5 justify-center p-5">
        <div className="flex  justify-between space-x-3">
          <Image
            priority
            src={testimonial.img}
            alt={testimonial.name}
            height={50}
            width={50}
            className="h-16 w-16 mt-5 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
          />
          <div className="grid space-y-3 p-2 items-center justify-center">
            <div className="grid mt-2 gap-1">
              <FaQuoteLeft />
              <p className="w-[24rem] h-60 justify-start">{testimonial.para}</p>
              <FaQuoteRight />
            </div>
            <p className="text-base font-medium tracking-wider">
              {testimonial.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
