import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  const navLinks = [
    {
      id: 1,
      url: "/",
      label: "Home",
    },
    {
      id: 2,
      url: "/about",
      label: "About",
    },
    {
      id: 3,
      url: "/features",
      label: "Services",
    },
    {
      id: 4,
      url: "/testimonials",
      label: "Testimonial",
    },
    {
      id: 5,
      url: "/plans",
      label: "Plans",
    },
    {
      id: 6,
      url: "/contact",
      label: "Contact",
    },
  ];

  const { isSignedIn } = useAuth();
  const router = useRouter();

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Navlinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006]`}
      >
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="nav_link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        <button
          className="ml-12 mt-4 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full"
          onClick={() => {
            if (isSignedIn) {
              router.push("/dashboard");
            } else {
              router.push("/sign-in");
            }
          }}
        >
          Join Now
        </button>
        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
