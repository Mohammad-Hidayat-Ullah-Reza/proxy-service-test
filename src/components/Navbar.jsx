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
        <p className="flex items-center justify-center bg-productPrimary p-2 text-center text-xs text-white md:text-base">
          We are currently working on slow proxy servers,{" "}
          <a href="#" className="mx-1 text-green-200">
            click here
          </a>{" "}
          for updates
          <AiOutlineClockCircle className="ml-1" />
        </p>
      </div>
      <nav className="z-10 border-b bg-white">
        <div className="container flex items-center justify-between px-10 py-2 lg:py-5">
          {/* logo */}
          <div className="text-2xl font-bold xl:text-3xl">
            <a href="#">Logo</a>
          </div>
          {/* links */}
          <div className="hidden items-center font-bold capitalize text-secondary lg:flex lg:gap-7 lg:text-base xl:gap-14 xl:text-xl">
            <a href="#products" className="hover:opacity-80">
              our products
            </a>
            <a href="#compare" className="hover:opacity-80">
              how we compare
            </a>
            <a href="#plans" className="hover:opacity-80">
              pricing plans
            </a>
            <a href="#faq" className="hover:opacity-80">
              FAQ
            </a>
          </div>
          {/* mobile menu */}
          <div
            className={` ${
              !open && "hidden"
            } absolute left-0 top-0 flex h-screen flex-col gap-7 bg-white p-5 font-semibold capitalize text-secondary`}
          >
            <div className="w-full">
              <RxCross2
                className="ml-auto mr-0 text-3xl"
                onClick={() => setOpen(false)}
              />
            </div>
            <a
              href="#products"
              className="hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              our products
            </a>
            <a
              href="#compare"
              className="hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              how we compare
            </a>
            <a
              href="#plans"
              className="hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              pricing plans
            </a>
            <a
              href="#faq"
              className="hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              FAQ
            </a>
            <button
              className={`mx-auto w-full rounded-md bg-productPrimary p-4 text-sm capitalize text-white hover:opacity-90`}
            >
              sign up
            </button>
            <button
              className={`rounded-md border-2 border-transparent px-5 py-4 font-medium capitalize text-gray-600 hover:border-productPrimary hover:text-secondary`}
            >
              log in
            </button>
          </div>
          {/* log in, sign up and log out button */}
          <div className="flex items-center">
            <button
              className={`mr-4 hidden rounded-md border-2 border-transparent px-5 py-4 font-medium capitalize text-gray-600 hover:border-productPrimary hover:text-secondary sm:block xl:px-10 xl:text-xl`}
            >
              log in
            </button>
            <button
              className={`hidden rounded-md bg-productPrimary px-5 py-4 capitalize text-white hover:opacity-90 sm:block xl:px-10 xl:text-xl`}
            >
              sign up
            </button>
            {/* hamburger menu */}
            <HiMenu
              className="ml-4 text-4xl text-secondary lg:hidden"
              onClick={() => setOpen((p) => !p)}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
