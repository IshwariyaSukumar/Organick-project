import React from "react";
import Header from "../../components/headers/Header";
import { Subscribe } from "../../components/subscribe/Subscribe";
import Footer from "../../components/footers/Footer";
import { BannerShopSingle } from "../../components/banner/bannerShopSingle/BannerShopSingle";
import { ShopSingleCard } from "../../components/Cards/ShopSingleCard";
import { ProductType } from "../../data/productCardsData";
import "../../pages/shopSingle/shopSingle.css";
import ProductCard from "../../components/Cards/ProductCard";
import { databases } from "../../appwriteConfig";
import { Query } from "appwrite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export const ShopSingle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    databases
      .listDocuments("6534c10e68de06206d3d", "6534c1191e4407a8ad99", [
        Query.equal("id", parseInt(id as string)),
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

  useEffect(() => {
    databases
      .listDocuments("6534c10e68de06206d3d", "6534c1191e4407a8ad99", [
        Query.limit(4),
      ])
      .then(
        function (response) {
          console.log("response", response.documents);
          setProducts(response.documents);
          return response;
        },
        function (error) {
          console.log(error);
        }
      );
  }, []);

  return (
    <div>
      <Header />
      <BannerShopSingle />
      <div className="shopSingleProduct">
        {data.map((product: ProductType) => (
          <ShopSingleCard data={product} key={product.productName} />
        ))}
      </div>
      <div className="relatedProducts">
        <h3 className="relatedProductsHead">Related Products</h3>
      </div>
      <div className="shopProduct">
        {products.map((product: ProductType) => (
          <ProductCard data={product} key={product.productName} />
        ))}
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};
