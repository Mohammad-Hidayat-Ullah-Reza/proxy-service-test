import React from "react";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";

function Home() {
  return (
    <main>
      {/* Product Section */}
      <section className="bg-[#F3F3F3]">
        <div className="container px-10 py-20">
          <h2 className="font-bold text-5xl text-center mb-14 capitalize">
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
            <Button text={"try it out"} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
