import React from "react";
import Header from "../../components/headers/Header";
import { BannerShopSingle } from "../../components/banner/bannerShopSingle/BannerShopSingle";
import { Subscribe } from "../../components/subscribe/Subscribe";
import Footer from "../../components/footers/Footer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ProductType } from "../../data/productCardsData";
import ProductCard from "../../components/Cards/ProductCard";
import "../cart/productCart.css";

export const ProductCart = () => {
  const count = useSelector((state: any) => state.item.count);
  const cart = useSelector((state: any) => state.item.cart);
  const total = useSelector((state: any) => state.item.total);

  return (
    <div>
      <Header />
      <BannerShopSingle />
      <div className="productCart">
        {cart.map(
          ({
            data,
            quantity,
            price,
          }: {
            data: ProductType;
            quantity: string;
            price: string;
          }) => (
            <div className="productQuantity">
              <div className="productInfo">
                <ProductCard data={data} key={data.productName} />
              </div>
              <div className="quantityNprice">
                <p>Quantity: {quantity} </p>
                <p>Price: ${price}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="totalQuantityNprice">
        <h2> Total Quantity: {count}</h2>
        <h2>Total Price: ${total}</h2>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};
