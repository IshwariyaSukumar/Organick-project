import "./menu.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/team">Team</Link>
    </div>
  );
};
export default Menu;
