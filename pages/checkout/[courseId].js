import { getCourse } from "@/prisma/courses";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

/* STRIPE PROMISE*/
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = ({ course }) => {
  const { data: session } = useSession();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormdata((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  /* CHECKOUT HANDLER*/
  const handleCheckout = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    /* SEND A POST REQ TO THE SERVER */
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: [course],
      name: formdata.name,
      email: formdata.email,
      mobile: formdata.mobile,
      address: formdata.address,
      courseTitle: formdata.courseTitle,
    });

    /* REDIRECT TO THE STRIPE PAYMENT */

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="mx-auto wrapper grid justify-center mt-10  min-h-screen">
      <div className=" h-[80vh] w-[60vw] flex justify-center items-center bg-slate-200/80 rounded-lg gap-10">
        <div className="bg-indigo-600 w-full lg:w-[30rem] h-[36rem] text-white grid justify-between p-5 rounded-lg">
          <span className="uppercase text-sm font-bold tracking-widest">
            Checkout
          </span>
          <div className=" flex flex-col gap-5">
            <h2 className=" text-4xl font-semibold">
              Fill in Your Personal Particulars
            </h2>
            <p className="w-80">
              Your information is valuable to us as we strive to create a
              tailored experience just for you.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleCheckout}
          className=" w-full lg:w-[30rem] h-[36rem] flex flex-col justify-center  gap-5"
        >
          <div className="form-control  grid ">
            <label
              htmlFor="name"
              className="text-black font-medium cursor-pointer"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Sarah"
              readOnly
              value={formdata.name}
              className="outline-none bg-transparent border border-gray-300 p-1 rounded-md"
            />
          </div>

          <div className="form-control grid">
            <label
              htmlFor="email"
              className="text-black font-medium cursor-pointer"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="exampl.com"
              readOnly
              value={formdata.email}
              className="outline-none bg-transparent border border-gray-300 p-1 rounded-md"
            />
          </div>

          <div className="form-control grid">
            <label
              htmlFor="mobile"
              className="text-black font-medium cursor-pointer"
            >
              Phone Number:
            </label>
            <input
              required
              type="tel"
              id="mobile"
              placeholder="+8801xxxxxxx"
              value={formdata.mobile}
              onChange={(e) =>
                setFormdata({ ...formdata, mobile: e.target.value })
              }
              className="outline-none bg-transparent border border-gray-300 p-1 rounded-md"
            />
          </div>

          <div className="form-control grid">
            <label
              htmlFor="address"
              className="text-black font-medium cursor-pointer"
            >
              Address:
            </label>
            <input
              required
              type="text"
              id="address"
              placeholder="ABC street,NY"
              value={formdata.address}
              onChange={(e) =>
                setFormdata({ ...formdata, address: e.target.value })
              }
              className="outline-none bg-transparent border border-gray-300 p-1 rounded-md"
            />
          </div>

          <div className="form-control grid">
            <label
              htmlFor="courseTitle"
              className="text-black font-medium cursor-pointer"
            >
              Course Title:
            </label>
            <input
              type="text"
              id="courseTitle"
              placeholder="Advanced JS Course"
              value={formdata.courseTitle}
              readOnly
              className="outline-none bg-transparent border border-gray-300 p-1 rounded-md"
            />
          </div>

          <div className="form-control grid">
            <label
              htmlFor="price"
              className="text-black font-medium cursor-pointer"
            >
              Price:(USD)
            </label>
            <input
              type="number"
              id="price"
              placeholder="$100"
              value={formdata.price}
              readOnly
              className="outline-none bg-transparent border border-gray-300 p-1 rounded-md"
            />
          </div>
          <button
            role="link"
            type="submit"
            className="uppercase bg-indigo-600 text-white py-2 rounded-lg w-full hover:bg-indigo-700 duration-300"
          >
            Procced to Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};
