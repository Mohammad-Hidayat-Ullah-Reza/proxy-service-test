import React from "react";
import { BsCheckLg, BsFillHouseDoorFill } from "react-icons/bs";
import { HiLightningBolt, HiOutlineDatabase } from "react-icons/hi";
import Button from "./Button";

function PricingCards({ icon, title, popular }) {
  return (
    <div className="relative p-10 max-w-lg rounded-lg shadow-xl">
      {/* popular */}
      {popular && (
        <div className="absolute -top-8 -right-10 bg-primary text-white leading-0 rounded-full w-fit flex flex-col items-center justify-center py-5 px-4">
          <span>Most</span> <span>Popular</span>
        </div>
      )}
      {/* card title and icon */}
      <div className="flex items-center justify-center gap-5 mb-8">
        {icon === "bolt" && (
          <HiLightningBolt className="text-3xl text-primary" />
        )}
        {icon === "database" && (
          <HiOutlineDatabase className="text-3xl text-primary" />
        )}
        {icon === "house" && (
          <BsFillHouseDoorFill className="text-3xl text-primary" />
        )}
        <h3 className="text-2xl font-semibold text-secondary capitalize">
          {title}
        </h3>
      </div>
      {/* services list */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-gray-500 capitalize text-center">starting from</p>
        <span className="text-secondary text-4xl font-semibold text-center">
          $1.50/GB
        </span>
      </div>
      <div className="mt-20 mx-auto w-fit space-y-4">
        <div className="flex items-center gap-6 text-2xl">
          <BsCheckLg className="text-3xl text-primary opacity-80" />
          <span className="text-gray-400 font-medium">120+ Countries</span>
        </div>
        <div className="flex items-center gap-6 text-2xl">
          <BsCheckLg className="text-3xl text-secondary opacity-80" />
          <span className="text-gray-400 font-medium">Unlimited Data</span>
        </div>
        <div className="flex items-center gap-6 text-2xl">
          <BsCheckLg className="text-3xl text-primary opacity-80" />
          <span className="text-gray-400 font-medium">Data Tracking</span>
        </div>
        <div className="flex items-center gap-6 text-2xl">
          <BsCheckLg className="text-3xl text-secondary opacity-80" />
          <span className="text-gray-400 font-medium">24/7 Support</span>
        </div>
      </div>
      {/* button */}
      <div className="mt-7 mx-auto w-fit">
        <Button text={"purchase now"} color={"primary"} py={"5"} />
      </div>
    </div>
  );
}

export default PricingCards;
