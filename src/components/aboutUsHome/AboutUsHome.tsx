import aboutUsFruit from "../../images/aboutUsFruit.png";
import veganFood from "../../images/veganFood.png";
import mailbox from "../../images/mailbox.png";
import "../../components/aboutUsHome/aboutUsHome.css";
import { Link } from "react-router-dom";

export const AboutUsHome = () => {
  return (
    <div className="aboutUsHome">
      <div className="aboutUsFruit">
        <img src={aboutUsFruit} className="fruitImg" />
      </div>

      <div className="aboutUsHomeContent">
        <h4 className="aboutUsHomeHead">About Us</h4>
        <h3 className="aboutUsHomeSubHead">
          We Believe in Working Accredited Farmers
        </h3>
        <p className="aboutUsHomePara">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="aboutUsTag1">
          <div className="veganFoodTag">
            <img src={veganFood} className="vegan" />
          </div>
          <div className="organicFoodTag">
            <h3 className="organic">Organic Foods Only</h3>
            <p className="organicPara">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
          </div>
        </div>

        <div className="aboutUsTag2">
          <div className="mailTag">
            <img src={mailbox} className="mail" />
          </div>
          <div className="qualityTag">
            <h3 className="quality">Quality Standards</h3>
            <p className="qualityPara">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
          </div>
        </div>
        <Link to="/shop">
          <button className="shopNowBtn">Shop Now &rarr;</button>
        </Link>
      </div>
    </div>
  );
};
