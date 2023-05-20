import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#FEFEFE]">
      <div className="container grid grid-cols-12 gap-7 px-10 py-20">
        {/* logo and all rights */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <a href="#" className="text-3xl font-semibold capitalize">
            Logo
          </a>
          <p className="mb-5 mt-3 text-sm text-gray-500">
            Found in 2023, Pinpoint Proxies has focused itself on ultra-fast
            speeds.
          </p>
          <p className="text-sm text-gray-400">
            All rights reserved, <a href="#">Pinpoint Proxies</a>
          </p>
        </div>

        {/* Menu */}
        <div className="col-span-6 flex flex-col items-start gap-3 capitalize md:col-span-3 lg:col-span-2">
          <div className="text-xl font-semibold">Menu</div>
          <a
            href="#products"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            our products
          </a>
          <a
            href="#compare"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            How we compare
          </a>
          <a
            href="#plans"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            pricing plans
          </a>
          <a href="#faq" className="text-sm text-gray-500 hover:text-gray-700">
            FAQ
          </a>
        </div>

        {/* More */}
        <div className="col-span-6 flex flex-col items-start gap-3 capitalize md:col-span-3 lg:col-span-2">
          <div className="text-xl font-semibold">More</div>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            privacy policy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            terms & conditions
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            refund policy
          </a>
        </div>

        {/* Contact */}
        <div className="col-span-12 flex flex-col items-start gap-3 capitalize md:col-span-6 lg:col-span-3">
          <div className="text-xl font-semibold">Contact</div>
          <a
            href="#"
            className="flex items-start gap-4 text-sm text-gray-500 hover:text-gray-700"
          >
            <BsFillTelephoneFill className="text-xl" />
            (000) 000-0000
          </a>
          <a
            href="#"
            className="flex items-start gap-4 text-sm text-gray-500 hover:text-gray-700"
          >
            <IoMdMail className="text-xl" />
            email@pinpointproxies.com
          </a>
          <a
            href="#"
            className="flex items-start gap-4 text-sm text-gray-500 hover:text-gray-700"
          >
            <ImLocation className="text-xl" />
            2972 westheimer rd. santa ana, illinois 85486
          </a>
        </div>

        {/* Social Link */}
        <div className="col-span-6 flex flex-col items-start gap-3 capitalize md:col-span-3 lg:col-span-2">
          <div className="text-xl font-semibold normal-case">Social media</div>
          <div className="flex w-full items-center justify-between xl:pr-10">
            <a
              href="https://www.fb.com"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
