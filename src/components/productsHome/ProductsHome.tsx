import "../../components/productsHome/productsHome.css";
import { ProductType } from "../../data/productCardsData";
import { viewProducts } from "../../data/productCardsData";
import ProductCard from "../Cards/ProductCard";
import "../../pages/shop/shop.css";
import { Link } from "react-router-dom";
import { databases } from "../../appwriteConfig";
import { Query } from "appwrite";
import { useEffect, useState } from "react";

export const ProductsHome = () => {
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
    <div className="productsHome">
      <h4 className="productsHomeHead">Offer</h4>
      <div className="viewProduct">
        <h3 className="productsHomeSubHead">We Offer Organic For You</h3>
        <Link to="/shop">
          <button className="viewBtn">View All Product &rarr;</button>
        </Link>
      </div>
      <div className="shopProductsHome">
        <div className="shopProduct">
          {data.map((product: ProductType) => (
            <ProductCard data={product} key={product.productName} />
          ))}
        </div>
      </div>
    </div>
  );
};
