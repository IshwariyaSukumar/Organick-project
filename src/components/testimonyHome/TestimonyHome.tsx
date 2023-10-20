import testimonyImg1 from "../../images/testimonyImg1.png";
import testimonyImg2 from "../../images/testimonyImg2.png";
import testimonyPic from "../../images/testimonyPic.jpg";
import "../../components/testimonyHome/testimonyHome.css";
import Star from "../../images/Star.png";

export const TestimonyHome = () => {
  return (
    <div className="testimony">
      <img src={testimonyImg1} />
      <div className="testimonyContent">
        <h4 className="testimonyHead">Testimonial</h4>
        <h3 className="testimonySubHead">What Our Customers Saying?</h3>
        <img src={testimonyPic} className="testimonyProfile" />
        <img src={Star} className="rating" />
        <p className="testimonyPara">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </p>
        <h4 className="testimonialName">Sara Taylor</h4>
        <p className="consumer">Consumer</p>

        <div className="tags">
          <p className="organicTag">
            <strong>100%</strong>Organic
          </p>
          <p className="activeTag">
            <strong>285</strong>Active Product
          </p>
          <p className="orchadsTag">
            <strong>300+</strong>Organic Orchads
          </p>
          <p className="farmingTag">
            <strong>25+</strong>Years of Farming
          </p>
        </div>
      </div>
      <img src={testimonyImg2} />
    </div>
  );
};
