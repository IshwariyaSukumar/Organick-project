import { ProductType } from "../../data/productCardsData";
import "../../components/Cards/productCard.css";
import Star from "../../images/Star.png";
import { Link } from "react-router-dom";

const ProductCard = ({ data }: { data: ProductType }) => {
  return (
    <div className="productCard">
      <h5 className="productCategory">{data.category}</h5>
      <Link to={{ pathname: `/shopSingle/${data.id}` }}>
        <img src={"/" + data.productImage} className="productImg" />
      </Link>
      <p className="productName">{data.productName}</p>
      <div>
        <div className="price">
          <p className="productPrice">${data.price}</p>
          <p className="discountedPrice">${data.discountPrice}</p>
        </div>
        <div>
          <img src={Star} className="star" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
