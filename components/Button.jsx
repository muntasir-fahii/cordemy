import Link from "next/link";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "rounded-lg transition-colors duration-300 flex justify-center",
  {
    variants: {
      color: {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      },
      size: {
        default: "py-3 px-6 ",
        medium: "py-2 px-5",
        full: "py-2 w-full",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
);

const Button = ({ href, placeholder, color, size }) => {
  return (
    <Link className={clsx(buttonVariants({ color, size }))} href={href}>
      {placeholder}
    </Link>
  );
};

export default Button;
