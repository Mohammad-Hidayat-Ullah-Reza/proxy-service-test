import React from "react";
import { HiLightningBolt, HiOutlineDatabase } from "react-icons/hi";
import { BsFillHouseDoorFill } from "react-icons/bs";

function ProductCard({ icon, title, discountPrice }) {
  return (
    <div className="relative p-10 space-y-6 max-w-lg rounded-lg shadow-lg">
      {discountPrice && (
        <div className="absolute -top-8 -right-8 bg-productPrimary text-white leading-0 rounded-full w-fit flex flex-col items-center justify-center py-2 px-4">
          <span>{discountPrice}%</span> <span>Off</span>
        </div>
      )}
      {/* card title and icon */}
      <div className="flex items-center justify-start gap-5 ">
        {icon === "bolt" && (
          <HiLightningBolt className="text-7xl text-productPrimary" />
        )}
        {icon === "database" && (
          <HiOutlineDatabase className="text-7xl text-productPrimary" />
        )}
        {icon === "house" && (
          <BsFillHouseDoorFill className="text-7xl text-productPrimary" />
        )}
        <h3 className="text-2xl font-semibold text-secondary capitalize">
          {title}
        </h3>
      </div>
      {/* card description */}
      <div>
        <p className="text-gray-700 text-justify font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          saepe tenetur, rem eaque doloribus ad illo culpa distinctio voluptatum
          modi?
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
