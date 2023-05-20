import SectionTitle from "@/components/SectionTitle";
import { FcGoogle } from "react-icons/fc";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = ({ session }) => {
  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionTitle
        span={"Login"}
        h2={"Get Started With Google"}
        p={"Login for a Journey of Knowledge"}
      />

      <div className="flex justify-center">
        <button
          onClick={loginWithGoogle}
          className="flex gap-2 items-center bg-indigo-600 text-white py-3 px-6 rounded-lg mt-10 hover:bg-indigo-700 duration-300"
        >
          <span>
            <FcGoogle />
          </span>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
