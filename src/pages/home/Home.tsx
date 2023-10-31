import { AboutUsHome } from "../../components/aboutUsHome/AboutUsHome";
import { Banner } from "../../components/banner/bannerHome/Banner";
import { Header } from "../../components/headers/Header";
import { BannerCards } from "../../components/bannerCards/BannerCards";
import Layout from "../../components/layout/Layout";
import { Subscribe } from "../../components/subscribe/Subscribe";
import { EcofriendlyHome } from "../../components/ecofriendlyHome/EcofriendlyHome";
import { Footer } from "../../components/footers/Footer";
import { CategoriesHome } from "../../components/categoriesHome/CategoriesHome";
import { TestimonyHome } from "../../components/testimonyHome/TestimonyHome";
import ProductCard from "../../components/Cards/ProductCard";
import { ProductType, productData } from "../../data/productCardsData";
import { products } from "../../data/productCardsData";
import "../../pages/shop/shop.css";
import "../home/home.css";
import { ProductsHome } from "../../components/productsHome/ProductsHome";
import { databases } from "../../appwriteConfig";
import { Query } from "appwrite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    databases
      .listDocuments("6534c10e68de06206d3d", "6534c1191e4407a8ad99", [
        Query.limit(4),
      ])
      .then(
        function (response) {
          console.log("response", response.documents);
          setData(response.documents);
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
      <Banner />
      <BannerCards />
      <AboutUsHome />
      <div className="productCategories">
        <h4 className="productCategoriesHead">Categories </h4>
        <h3 className="productCategoriesSubHead">Our Products</h3>
      </div>
      <div className="shopProduct">
        {data.map((product: ProductType) => (
          <ProductCard data={product} key={product.productName} />
        ))}
      </div>

      <div className="loadButton">
        <Link to="/shop">
          <button className="loadMoreBtn">Load More &rarr;</button>
        </Link>
      </div>
      <TestimonyHome />
      <ProductsHome />
      <EcofriendlyHome />
      <CategoriesHome />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
