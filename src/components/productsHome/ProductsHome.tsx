import "../../components/productsHome/productsHome.css";
import { ProductType } from "../../data/productCardsData";
import { viewProducts } from "../../data/productCardsData";
import ProductCard from "../Cards/ProductCard";
import "../../pages/shop/shop.css";

export const ProductsHome = () => {
  return (
    <div className="productsHome">
      <h4 className="productsHomeHead">Offer</h4>
      <div className="viewProduct">
        <h3 className="productsHomeSubHead">We Offer Organic For You</h3>
        <button className="viewBtn">View All Product &rarr;</button>
      </div>
      <div className="shopProduct">
        {viewProducts.map((product: ProductType) => (
          <ProductCard data={product} key={product.productName} />
        ))}
      </div>
    </div>
  );
};
