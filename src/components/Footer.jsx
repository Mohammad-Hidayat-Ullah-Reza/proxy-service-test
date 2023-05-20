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
      <div className="container px-10 py-20 grid grid-cols-12 gap-7">
        {/* logo and all rights */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <a href="#" className="text-3xl font-semibold capitalize">
            Logo
          </a>
          <p className="text-gray-500 text-sm mt-3 mb-5">
            Found in 2023, Pinpoint Proxies has focused itself on ultra-fast
            speeds.
          </p>
          <p className="text-gray-400 text-sm">
            All rights reserved, <a href="#">Pinpoint Proxies</a>
          </p>
        </div>

        {/* Menu */}
        <div className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col items-start gap-3 capitalize">
          <div className="text-xl font-semibold">Menu</div>
          <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
            our products
          </a>
          <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
            How we compare
          </a>
          <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
            pricing plans
          </a>
          <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
            FAQ
          </a>
        </div>

        {/* More */}
        <div className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col items-start gap-3 capitalize">
          <div className="text-xl font-semibold">More</div>
          <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
            privacy policy
          </a>
          <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
            terms & conditions
          </a>
          <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
            refund policy
          </a>
        </div>

        {/* Contact */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-start gap-3 capitalize">
          <div className="text-xl font-semibold">Contact</div>
          <a
            href="#"
            className="text-gray-500 text-sm hover:text-gray-700 flex items-start gap-4"
          >
            <BsFillTelephoneFill className="text-xl" />
            (000) 000-0000
          </a>
          <a
            href="#"
            className="text-gray-500 text-sm hover:text-gray-700 flex items-start gap-4"
          >
            <IoMdMail className="text-xl" />
            email@pinpointproxies.com
          </a>
          <a
            href="#"
            className="text-gray-500 text-sm hover:text-gray-700 flex items-start gap-4"
          >
            <ImLocation className="text-xl" />
            2972 westheimer rd. santa ana, illinois 85486
          </a>
        </div>

        {/* Social Link */}
        <div className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col items-start gap-3 capitalize">
          <div className="text-xl font-semibold normal-case">Social media</div>
          <div className="flex items-center justify-between xl:pr-10 w-full">
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-gray-700 flex items-center gap-2"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-gray-700 flex items-center gap-2"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-gray-700 flex items-center gap-2"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-gray-700 flex items-center gap-2"
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
