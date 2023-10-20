import React from "react";
import { Header } from "../../components/headers/Header";
import { BannerShop } from "../../components/bannerShop/BannerShop";
import { Footer } from "../../components/footers/Footer";
import { Subscribe } from "../../components/subscribe/Subscribe";
import ProductCard from "../../components/Cards/ProductCard";
import { ProductType, productData } from "../../data/productCardsData";
import "../shop/shop.css";

// const dummyData = {
//   category: "Vegetable",
//   imageSrc: cauliflower,
//   productName: "Calabrese Broccoli",
//   price: "20.00",
//   discountPrice: "13.00",
//   rating: "5",
//   productDescription:
//     "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
//   productOverview:
//     "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
//   additoinalInfo: "sdfsdf dsfadfa",
// };

export const Shop = () => {
  return (
    <div className="shop">
      <Header />
      <BannerShop />
      <div className="shopProduct">
        {productData.map((product: ProductType) => (
          <ProductCard data={product} key={product.productName} />
        ))}
      </div>
      {/* <ProductCard data={dummyData} /> */}
      <Subscribe />
      <Footer />
    </div>
  );
};
