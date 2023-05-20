import React from "react";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import PricingCards from "../../components/PricingCards";
import Accordion from "../../components/Accordion";

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
