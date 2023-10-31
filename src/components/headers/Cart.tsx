import "./cart.css";
import cartIcon from "../../images/cartIcon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { addCart } from "../../features/cartSlice";

export const Cart = () => {
  const count = useSelector((state: any) => state.item.count);

  return (
    <div className="cart">
      <img src={cartIcon} className="cartIcon" />
      <Link to="/cart">
        <p className="cartNo">cart({count})</p>
      </Link>
    </div>
  );
};
