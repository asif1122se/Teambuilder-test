"use client";
import { useState } from "react";
import { BannerDataTypes, ProductsTypes } from "../app/page";
import FooterBanner from "../comps/FooterBanner";
import MainBanner from "./MainBanner";
import Products from "../app/Products";

interface HomeProps {
  products: ProductsTypes[];
  bannerData: BannerDataTypes[];
}

const Home = ({ products, bannerData }: HomeProps) => {
  const [sortedproducts, setSortedProducs] = useState<ProductsTypes[]>(products);

const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
  if (e.target.value === "highToLow") {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setSortedProducs(sorted);
  } else if (e.target.value === "lowToHigh") {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setSortedProducs(sorted);
  }
};

  return (
    <main>
      {/* === MAIN BANNER  */}
      <MainBanner banner={bannerData[0]} />

      <section className="  mb-4 flex items-center flex-col">
        <h1
          className=" headTitle px-8 py-4 sm:py-2 sm:text-4xl text-2xl text-secondary
         font-sans font-extrabold sm:rounded-t-3xl"
        >
          Best Selling Headphones
        </h1>

        <select
          onChange={handleSort}
        >    
          <option value="">Sort By</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="lowToHigh">Price: Low to HIGH</option>
        </select>
        {/* <p className=" text-base text-secondary">Best in the Market</p> */}
      </section>

      {/* === SHOW PRODUCTS  */}
      <section
        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3
       lg:mx-20 overflow-hidden
      "
      >
        {/* === MAP PRODUCTS  */}
        {sortedproducts?.map((products: ProductsTypes) => {
          return <Products key={products._id} products={products} />;
        })}
      </section>

      {/* ==== FOOTER BANNER  */}
      <FooterBanner bannerData={bannerData && bannerData[1]} />
    </main>
  );
};

export default Home;
