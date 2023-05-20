import React from "react";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import PricingCards from "../../components/PricingCards";
import Accordion from "../../components/Accordion";
import { BsCheckLg } from "react-icons/bs";

function Home() {
  return (
    <main>
      {/* --------- Product Section --------- */}
      <section className="bg-[#F3F3F3]">
        <div className="container px-10 py-20">
          <h2 className="font-bold text-5xl text-center text-secondary mb-14 capitalize">
            our products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProductCard
              icon={"bolt"}
              title={"static residential proxies"}
              discountPrice={"25"}
            />
            <ProductCard icon={"database"} title={"data center proxies"} />
            <ProductCard
              icon={"house"}
              title={"rotating residential proxies"}
            />
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Button text={"try it out"} color={"productPrimary"} py={"2"} />
          </div>
        </div>
      </section>

      {/* --------- compare Section --------- */}
      <section className="bg-[#FCFCFC]">
        <div className="container px-10 py-20">
          <h2 className="font-bold text-5xl text-secondary mb-6 capitalize">
            how we compare
          </h2>
          <p className="mb-14 text-gray-500 font-medium leading-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a?
          </p>

          <div className="flex md:grid md:grid-cols-12 overflow-x-auto compare">
            {/* 1st column */}
            <div className="col-span-4">
              <div className="text-transparent font-semibold text-3xl py-10 text-center capitalize">
                Logo
              </div>
              <div className="text-secondary whitespace-nowrap font-semibold text-lg p-5 bg-[#EFEFEF] capitalize rounded-tl-lg">
                Money Back
              </div>
              <div className="text-secondary whitespace-nowrap font-semibold text-lg p-5 bg-[#E0E1E5] capitalize">
                ultra fast service
              </div>
              <div className="text-secondary whitespace-nowrap font-semibold text-lg p-5 bg-[#EFEFEF] capitalize">
                flexible pricing
              </div>
              <div className="text-secondary whitespace-nowrap font-semibold text-lg p-5 bg-[#E0E1E5] capitalize">
                24/7 support team
              </div>
              <div className="text-secondary whitespace-nowrap font-semibold text-lg p-5 bg-[#EFEFEF] capitalize">
                data never expires
              </div>
              <div className="text-secondary whitespace-nowrap font-semibold text-lg p-5 bg-[#E0E1E5] capitalize rounded-bl-lg">
                prices start from
              </div>
            </div>

            {/* 2nd column */}
            <div className="group col-span-2 hover:shadow-xl hover:bg-white/[.8] hover:rounded-xl">
              <div className="text-secondary font-semibold text-3xl py-10 text-center capitalize">
                Logo
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#E0E1E5] group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#E0E1E5] group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-secondary font-semibold text-lg text-center p-5 bg-[#E0E1E5] capitalize">
                $1.50/GB
              </div>
              <div className="invisible group-hover:visible py-7 px-3 flex items-center justify-center">
                <button
                  className={`bg-primary p-4 px-2 text-sm lg:text-base lg:px-4 xl:px-7 rounded-md text-white capitalize hover:opacity-90`}
                >
                  order now
                </button>
              </div>
            </div>

            {/* 3rd column */}
            <div className="group col-span-2 hover:shadow-xl hover:bg-white/[.8] hover:rounded-xl">
              <div className="text-secondary font-semibold text-3xl py-10 text-center capitalize">
                Logo
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#E0E1E5] group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#E0E1E5] group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-secondary font-semibold text-lg text-center p-5 bg-[#E0E1E5] capitalize">
                $12/GB
              </div>
              <div className="invisible group-hover:visible py-7 px-3 flex items-center justify-center">
                <button
                  className={`bg-primary p-4 px-2 text-sm lg:text-base lg:px-4 xl:px-7 rounded-md text-white capitalize hover:opacity-90`}
                >
                  order now
                </button>
              </div>
            </div>

            {/* 4th column */}
            <div className="group col-span-2 hover:shadow-xl hover:bg-white/[.8] hover:rounded-xl">
              <div className="text-secondary font-semibold text-3xl py-10 text-center capitalize">
                Logo
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#E0E1E5] group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#E0E1E5] group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-secondary font-semibold text-lg text-center p-5 bg-[#E0E1E5] capitalize">
                $1.50/GB
              </div>
              <div className="invisible group-hover:visible py-7 px-3 flex items-center justify-center">
                <button
                  className={`bg-primary p-4 px-2 text-sm lg:text-base lg:px-4 xl:px-7 rounded-md text-white capitalize hover:opacity-90`}
                >
                  order now
                </button>
              </div>
            </div>

            {/* 5th column */}
            <div className="group col-span-2 hover:shadow-xl hover:bg-white/[.8] hover:rounded-xl">
              <div className="text-secondary font-semibold text-3xl py-10 text-center capitalize">
                Logo
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] rounded-tr-lg group-hover:rounded-none">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#E0E1E5] group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#E0E1E5] group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-primary font-semibold text-[28px] p-5 bg-[#EFEFEF] group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="text-secondary font-semibold text-lg text-center p-5 bg-[#E0E1E5] capitalize rounded-br-lg group-hover:rounded-none">
                $1.50/GB
              </div>
              <div className="invisible group-hover:visible py-7 px-3 flex items-center justify-center">
                <button
                  className={`bg-primary p-4 px-2 text-sm lg:text-base lg:px-4 xl:px-7 rounded-md text-white capitalize hover:opacity-90`}
                >
                  order now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------- pricing Section --------- */}
      <section className="bg-[#FCFCFC]">
        <div className="container px-10 py-20">
          <h2 className="font-bold text-5xl text-center text-secondary mb-6 capitalize drop-shadow-[0_6px_3px_rgba(0,0,0,0.30)]">
            simple and <span className="text-primary">transparent</span> pricing
          </h2>
          <p className="mb-14 mx-auto text-gray-500 font-medium text-center leading-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <PricingCards icon={"bolt"} title={"static residential"} />
            <PricingCards
              icon={"database"}
              title={"datacenter proxy"}
              popular={true}
            />
            <PricingCards title={"rotating residential"} />
          </div>
          <div className="mt-10 mx-auto py-2 px-5 rounded-full bg-[#F3F3F5] w-fit">
            <p>
              Looking for custom plans?{" "}
              <a href="#" className="capitalize text-primary">
                contact us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* --------- faq Section --------- */}
      <section className="bg-[#F3F3F3]">
        <div className="container px-10 py-20">
          <h2 className="font-bold text-5xl text-secondary mb-6 capitalize">
            frequently asked questions
          </h2>
          <p className="mb-14 text-gray-500 font-medium leading-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a?
          </p>

          {/* Accordion */}
          <div className="mx-auto w-3/4">
            <Accordion title={"question 1"} />
            <Accordion title={"question 2"} />
            <Accordion title={"question 3"} />
          </div>

          <div className="mt-32 flex items-center justify-center ">
            <Button text={"try pinpoint"} color={"primary"} py={"5"} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
