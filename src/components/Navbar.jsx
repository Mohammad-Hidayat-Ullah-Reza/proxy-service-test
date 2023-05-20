import React, { useState } from "react";
import Button from "./Button";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineClockCircle } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <p className="bg-productPrimary text-xs p-2 md:text-base text-center text-white flex items-center justify-center">
          We are currently working on slow proxy servers,{" "}
          <a href="#" className="mx-1 text-green-200">
            click here
          </a>{" "}
          for updates
          <AiOutlineClockCircle className="ml-1" />
        </p>
      </div>
      <nav className="md:sticky top-0 bg-white z-10 border-b">
        <div className="container px-10 flex items-center justify-between">
          {/* logo */}
          <div className="font-bold text-2xl xl:text-3xl py-4 sm:py-7 lg:py-10">
            <a href="#">Logo</a>
          </div>
          {/* links */}
          <div className="hidden font-bold text-secondary lg:text-lg xl:text-2xl py-10 capitalize lg:flex items-center lg:gap-7 xl:gap-14">
            <a href="#" className="hover:opacity-80">
              our products
            </a>
            <a href="#" className="hover:opacity-80">
              how we compare
            </a>
            <a href="#" className="hover:opacity-80">
              pricing plans
            </a>
            <a href="#" className="hover:opacity-80">
              FAQ
            </a>
          </div>
          {/* mobile menu */}
          <div
            className={` ${
              !open && "hidden"
            } absolute top-0 left-0 text-secondary font-semibold bg-white h-screen p-5 flex flex-col capitalize gap-7`}
          >
            <div className="w-full">
              <RxCross2
                className="text-3xl ml-auto mr-0"
                onClick={() => setOpen(false)}
              />
            </div>
            <a href="#" className="hover:opacity-80">
              our products
            </a>
            <a href="#" className="hover:opacity-80">
              how we compare
            </a>
            <a href="#" className="hover:opacity-80">
              pricing plans
            </a>
            <a href="#" className="hover:opacity-80">
              FAQ
            </a>
          </div>
          {/* log in, sign up and log out button */}
          <div className="flex items-center">
            <button
              className={`hidden sm:block border-2 border-transparent hover:border-productPrimary xl:text-xl py-4 px-5 xl:px-10 rounded-md text-gray-600 hover:text-secondary font-medium capitalize mr-4`}
            >
              log in
            </button>
            <button
              className={`hidden sm:block bg-productPrimary xl:text-xl py-4 px-5 xl:px-10 rounded-md text-white capitalize hover:opacity-90`}
            >
              sign up
            </button>
            {/* hamburger menu */}
            <HiMenu
              className="text-4xl text-secondary ml-4 lg:hidden"
              onClick={() => setOpen((p) => !p)}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
