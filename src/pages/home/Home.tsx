import { AboutUsHome } from "../../components/aboutUsHome/AboutUsHome";
import { Banner } from "../../components/bannerHome/Banner";
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

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <BannerCards />
      <AboutUsHome />
      <div className="shopProduct">
        {products.map((product: ProductType) => (
          <ProductCard data={product} key={product.productName} />
        ))}
      </div>
      <div className="loadButton">
        <button className="loadMoreBtn">Load More &rarr;</button>
      </div>
      <ProductsHome />
      <EcofriendlyHome />
      <CategoriesHome />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
