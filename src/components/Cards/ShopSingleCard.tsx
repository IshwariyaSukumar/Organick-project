import React from "react";
import { ProductType } from "../../data/productCardsData";
import Star from "../../images/Star.png";
import "../../components/Cards/shopSingleCard.css";
import { addCart } from "../../features/cartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";

export const ShopSingleCard = ({ data }: { data: ProductType }) => {
  const count = useSelector((state: any) => state.item.count);
  const cart = useSelector((state: any) => state.item.cart);
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addCart(data));
  };

  return (
    <div>
      <div className="shopSingleCard">
        <div className="shopSingleProduct">
          <h5 className="category">{data.category}</h5>
          <img src={"/" + data.productImage} className="productImg" />
        </div>

        <div className="shopSingleContent">
          <h3 className="name">{data.productName}</h3>
          <img src={Star} alt="rating" />

          <div className="price">
            <p className="actualPrice">${data.price}</p>
            <p className="discountPrice">${data.discountPrice}</p>
          </div>

          <p className="description">{data.productDescription}</p>
          <div className="cartSection">
            <label className="quantity">Quantity: </label>
            <button className="quantityBtn">1</button>
            <button className="cartBtn" onClick={handleAddCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="additionalInfo">
        <button className="additionalInfoBtn">Additional Info</button>
        <p className="overview">{data.productOverview}</p>
      </div>
    </div>
  );
};
