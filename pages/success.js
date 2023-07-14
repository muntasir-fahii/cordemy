import Button from "@/components/Button";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessPage = ({ session }) => {
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
    <div className="wrapper py-10  min-h-screen grid justify-center">
      <div className="bg-white/40 flex flex-col rounded-lg shadow-md h-1/2 w-[35rem] mt-20">
        <div className=" flex flex-col items-center  gap-5 mt-24">
          <h2 className="text-2xl text-center">
            {` You have enrolled in this course!`}
          </h2>
          <AiOutlineCheckCircle className="text-4xl text-emerald-600" />
          <Button href="/orders" placeholder="Go to orders " />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
