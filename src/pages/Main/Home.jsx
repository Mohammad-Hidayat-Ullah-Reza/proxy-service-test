import React from "react";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import PricingCards from "../../components/PricingCards";
import Accordion from "../../components/Accordion";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

function Home() {
  return (
    <main>
      {/* --------- hero Section --------- */}
      <section id="hero" className="hero-section">
        <div className="container grid grid-cols-1 gap-14 px-10 pb-28 pt-10 lg:grid-cols-2 lg:gap-[100px] xl:gap-[150px]">
          {/* hero desc */}
          <div className="col-span-1 pb-5 sm:pb-10 lg:pb-[100px]">
            {/* open beta */}
            <div className="open-beta-custom-border mb-10 w-fit rounded-full bg-[#FDFDFD] px-4 py-1 text-xs font-semibold capitalize text-secondary">
              public beta now <span className="text-productPrimary">open</span>
            </div>
            {/* h1 */}
            <h1 className="mb-14 text-5xl font-bold text-secondary sm:text-6xl">
              Meet an <span className="text-primary">ultra</span> fast & easy
              proxy service
            </h1>
            <p className="mb-9 text-lg font-medium text-gray-700 sm:w-3/4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus facere reiciendis saepe ipsa.
            </p>
            {/* buttons */}
            <div>
              <button
                className={`rounded-md bg-productPrimary px-6 py-4 capitalize text-white hover:opacity-90 sm:px-10 xl:text-xl`}
              >
                explore now
              </button>
              <button
                className={`ml-4 rounded-md border-2 border-transparent px-6 py-4 font-medium capitalize text-gray-600 hover:border-productPrimary hover:text-secondary sm:px-14 xl:text-xl`}
              >
                log in
              </button>
            </div>
          </div>
          {/* images */}
          <div className="col-span-1 flex flex-col items-end justify-between pt-20 sm:pr-20 lg:pt-0">
            <div className="relative h-full w-full">
              <div className="absolute -top-[150px] right-0 w-[100px] lg:left-0 lg:top-[50px]">
                <img src="src\assets\location-circle.png" alt="" />
              </div>
              <div className="absolute -top-20 -z-10 w-[100px] lg:-right-20 lg:top-[300px]">
                <img src="src\assets\location-circle.png" alt="" />
              </div>
            </div>
            <div className="input-custom-border flex w-fit items-center rounded-xl bg-[#F2F2F2] pr-6 shadow-lg">
              <input
                type="text"
                className="max-w-sm bg-transparent p-6 text-lg outline-none placeholder:font-medium placeholder:text-gray-500"
                placeholder="Search Location"
              />
              <AiOutlineSearch className="text-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* --------- Product Section --------- */}
      <section id="products" className="bg-[#F3F3F3]">
        <div className="container px-10 py-20">
          <h2 className="mb-14 text-center text-4xl font-bold capitalize text-secondary sm:text-5xl">
            our products
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
      <section id="compare" className="bg-[#FCFCFC]">
        <div className="container px-10 py-20">
          <h2 className="mb-6 text-center text-4xl font-bold capitalize text-secondary sm:text-left sm:text-5xl">
            how we compare
          </h2>
          <p className="mb-14 max-w-md text-center font-medium leading-8 text-gray-500 sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a?
          </p>

          <div className="compare flex overflow-x-auto md:grid md:grid-cols-12 xl:ml-20">
            {/* 1st column */}
            <div className="col-span-4">
              <div className="py-10 text-center text-3xl font-semibold capitalize text-transparent">
                Logo
              </div>
              <div className="whitespace-nowrap rounded-tl-lg bg-[#EFEFEF] p-5 text-lg font-semibold capitalize text-secondary">
                Money Back
              </div>
              <div className="whitespace-nowrap bg-[#E0E1E5] p-5 text-lg font-semibold capitalize text-secondary">
                ultra fast service
              </div>
              <div className="whitespace-nowrap bg-[#EFEFEF] p-5 text-lg font-semibold capitalize text-secondary">
                flexible pricing
              </div>
              <div className="whitespace-nowrap bg-[#E0E1E5] p-5 text-lg font-semibold capitalize text-secondary">
                24/7 support team
              </div>
              <div className="whitespace-nowrap bg-[#EFEFEF] p-5 text-lg font-semibold capitalize text-secondary">
                data never expires
              </div>
              <div className="whitespace-nowrap rounded-bl-lg bg-[#E0E1E5] p-5 text-lg font-semibold capitalize text-secondary">
                prices start from
              </div>
            </div>

            {/* 2nd column */}
            <div className="group col-span-2 hover:rounded-xl hover:bg-white/[.8] hover:shadow-xl">
              <div className="py-10 text-center text-3xl font-semibold capitalize text-secondary">
                Logo
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-center text-lg font-semibold capitalize text-secondary">
                $1.50/GB
              </div>
              <div className="invisible flex items-center justify-center px-3 py-7 group-hover:visible">
                <button
                  className={`rounded-md bg-primary p-4 px-2 text-sm capitalize text-white hover:opacity-90 lg:px-4 lg:text-base xl:px-7`}
                >
                  order now
                </button>
              </div>
            </div>

            {/* 3rd column */}
            <div className="group col-span-2 hover:rounded-xl hover:bg-white/[.8] hover:shadow-xl">
              <div className="py-10 text-center text-3xl font-semibold capitalize text-secondary">
                Logo
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-center text-lg font-semibold capitalize text-secondary">
                $12/GB
              </div>
              <div className="invisible flex items-center justify-center px-3 py-7 group-hover:visible">
                <button
                  className={`rounded-md bg-primary p-4 px-2 text-sm capitalize text-white hover:opacity-90 lg:px-4 lg:text-base xl:px-7`}
                >
                  order now
                </button>
              </div>
            </div>

            {/* 4th column */}
            <div className="group col-span-2 hover:rounded-xl hover:bg-white/[.8] hover:shadow-xl">
              <div className="py-10 text-center text-3xl font-semibold capitalize text-secondary">
                Logo
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-center text-lg font-semibold capitalize text-secondary">
                $1.50/GB
              </div>
              <div className="invisible flex items-center justify-center px-3 py-7 group-hover:visible">
                <button
                  className={`rounded-md bg-primary p-4 px-2 text-sm capitalize text-white hover:opacity-90 lg:px-4 lg:text-base xl:px-7`}
                >
                  order now
                </button>
              </div>
            </div>

            {/* 5th column */}
            <div className="group col-span-2 hover:rounded-xl hover:bg-white/[.8] hover:shadow-xl">
              <div className="py-10 text-center text-3xl font-semibold capitalize text-secondary">
                Logo
              </div>
              <div className="rounded-tr-lg bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:rounded-none group-hover:bg-[#EFEFEF]/[.8]">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#E0E1E5] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#E0E1E5]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="bg-[#EFEFEF] p-5 text-[28px] font-semibold text-primary group-hover:bg-[#EFEFEF]/[.8] ">
                <BsCheckLg className="mx-auto" />
              </div>
              <div className="rounded-br-lg bg-[#E0E1E5] p-5 text-center text-lg font-semibold capitalize text-secondary group-hover:rounded-none">
                $1.50/GB
              </div>
              <div className="invisible flex items-center justify-center px-3 py-7 group-hover:visible">
                <button
                  className={`rounded-md bg-primary p-4 px-2 text-sm capitalize text-white hover:opacity-90 lg:px-4 lg:text-base xl:px-7`}
                >
                  order now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------- pricing Section --------- */}
      <section id="plans" className="bg-[#FCFCFC]">
        <div className="container px-10 py-20">
          <h2 className="mb-6 text-center text-4xl font-bold capitalize text-secondary drop-shadow-[0_6px_3px_rgba(0,0,0,0.30)] sm:text-5xl">
            simple and <span className="text-primary">transparent</span> pricing
          </h2>
          <p className="mx-auto mb-14 max-w-md text-center font-medium leading-8 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a?
          </p>

          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
            <PricingCards icon={"bolt"} title={"static residential"} />
            <PricingCards
              icon={"database"}
              title={"datacenter proxy"}
              popular={true}
            />
            <PricingCards title={"rotating residential"} />
          </div>
          <div className="mx-auto mt-10 w-fit rounded-full bg-[#F3F3F5] px-5 py-2">
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
      <section id="faq" className="bg-[#F3F3F3]">
        <div className="container px-10 py-20">
          <h2 className="mb-6 text-center text-4xl font-bold capitalize text-secondary sm:text-left sm:text-5xl">
            frequently asked questions
          </h2>
          <p className="mb-14 max-w-md text-center font-medium leading-8 text-gray-500 sm:text-left">
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
