import React, { useEffect, useState } from "react";
import { Header } from "../../components/headers/Header";
import { BannerShop } from "../../components/banner/bannerShop/BannerShop";
import { Footer } from "../../components/footers/Footer";
import { Subscribe } from "../../components/subscribe/Subscribe";
import ProductCard from "../../components/Cards/ProductCard";
import { ProductType, productData } from "../../data/productCardsData";
import "../shop/shop.css";
import { databases } from "../../appwriteConfig";
import { Query } from "appwrite";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { id } = useParams();

  const [data, setData] = useState<any>([]);
  useEffect(() => {
    databases
      .listDocuments("6534c10e68de06206d3d", "6534c1191e4407a8ad99", [
        Query.equal("category", [
          "Vegetable",
          "Fresh",
          "Nuts",
          "Millets",
          "Health",
        ]),
      ])
      .then(
        function (response) {
          setData(response.documents);
          return response;
        },
        function (error) {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="shop">
      <Header />
      <BannerShop />
      <div className="shopProduct">
        {data?.map?.((product: ProductType) => (
          <ProductCard data={product} key={product.productName} />
        ))}
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Shop;
