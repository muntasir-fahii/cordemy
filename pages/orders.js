import Button from "@/components/Button";
import prisma from "@/prisma/prisma";
import { currencyConverter } from "@/utils/currencyConverter";
import { getSession } from "next-auth/react";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { FcReading } from "react-icons/fc";
import { BiCustomize } from "react-icons/bi";

const Orderspage = ({ session, customer }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }

  return (
    <div className="wrapper py-10 min-h-screen">
      <div className="flex items-center gap-2 ">
        <BiCustomize className="text-3xl text-indigo-600" />
        <h2 className="text-3xl font-medium">
          You Enrolled: {customer.orders.length} Course
          {customer.orders.length > 1 ? "s" : ""}
        </h2>
      </div>
      <div className="courses grid gap-5 mt-5">
        {customer.orders.map((course) => (
          <div
            key={course.id}
            className="course grid gap-5 lg:flex items-center  lg:justify-between bg-white/80 shadow-md p-3 rounded-lg"
          >
            <div className="space-y-1">
              <span className="text-indigo-600 font-semibold">
                Id: {course.id}
              </span>
              <h2 className="text-2xl">{course.courseTitle}</h2>
              <div className="flex gap-1 items-center">
                <FcReading />
                <p>{course.name}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-medium text-start lg:text-center ">
                {currencyConverter(course.amountTotal)}
              </p>
              <Button
                href={`/users/dashboard/courses/${course.courseId}`}
                placeholder="Study Now"
                size="medium"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orderspage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const customer = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: true,
    },
  });

  if (!session || !customer) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  const updatedCustomer = {
    ...customer,
    updatedAt: customer.updatedAt.toString(),
    createdAt: customer.createdAt.toString(),

    orders: customer.orders.map((order) => ({
      ...order,
      updatedAt: order.updatedAt.toString(),
      createdAt: order.createdAt.toString(),
    })),
  };

  return {
    props: {
      session,
      customer: updatedCustomer,
    },
  };
};
