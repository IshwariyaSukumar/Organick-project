import React from "react";
import Header from "../../components/headers/Header";
import { Subscribe } from "../../components/subscribe/Subscribe";
import Footer from "../../components/footers/Footer";
import { BannerShopSingle } from "../../components/bannerShopSingle/BannerShopSingle";

export const ShopSingle = () => {
  return (
    <div>
      <Header />
      <BannerShopSingle />
      <Subscribe />
      <Footer />
    </div>
  );
};
