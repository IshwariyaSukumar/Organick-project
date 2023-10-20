import { ProductType } from "../../data/productCardsData";
import "../../components/Cards/productCard.css";
import Star from "../../images/Star.png";

const ProductCard = ({ data }: { data: ProductType }) => {
  return (
    <div className="productCard">
      <h5 className="productCategory">{data.category}</h5>
      <img src={data.imageSrc} className="productImg" />
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
