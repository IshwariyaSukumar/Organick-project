import aboutUsFruit from "../../images/aboutUsFruit.png";
import veganFood from "../../images/veganFood.png";
import mailbox from "../../images/mailbox.png";
import "../../components/aboutUsHome/aboutUsHome.css";

export const AboutUsHome = () => {
  return (
    <div className="aboutUsHome">
      <div className="aboutUsFruit">
        {" "}
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

        <img src={veganFood} />
        <h3 className="organic">Organic Foods Only</h3>
        <p className="organicPara">
          Simply dummy text of the printing and typesetting industry Lorem Ipsum
        </p>
        <img src={mailbox} />
        <h3 className="quality">Quality Standards</h3>
        <p className="qualityPara">
          Simply dummy text of the printing and typesetting industry Lorem Ipsum
        </p>
        <button className="shopNowBtn">Shop Now &rarr;</button>
      </div>
    </div>
  );
};
