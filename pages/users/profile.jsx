import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";

const ProfilePage = ({ session }) => {
  const router = useRouter();
  const logoutWithGoogle = async () => {
    try {
      await signOut("google");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen wrapper  flex flex-col items-center  mt-24">
      <Image
        src={session.user.image}
        alt={session.user.name}
        height={50}
        width={50}
        className="h-20 w-20 rounded-full border-2 border-indigo-500"
      />

      <h2 className="text-3xl font-medium mt-2">
        Welcome, {session.user.name}
      </h2>

      <button
        onClick={logoutWithGoogle}
        className="flex gap-2 items-center bg-indigo-600 text-white py-3 px-6 rounded-lg mt-10 hover:bg-indigo-700 duration-300"
      >
        <span>
          <FiLogOut />
        </span>
        Logout from Google
      </button>
    </div>
  );
};

export default ProfilePage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
