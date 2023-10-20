import "./cart.css";
import cartIcon from "../../images/cartIcon.png";

export const Cart = () => {
  return (
    <div className="cart">
      <img src={cartIcon} className="cartIcon" />
      <p className="cartNo">cart(0)</p>
    </div>
  );
};
