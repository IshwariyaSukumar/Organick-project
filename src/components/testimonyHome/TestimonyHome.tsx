import testimonyImg1 from "../../images/testimonyImg1.png";
import testimonyImg2 from "../../images/testimonyImg2.png";
import testimonyPic from "../../images/testimonyPic.jpg";
import "../../components/testimonyHome/testimonyHome.css";
import Star from "../../images/Star.png";

export const TestimonyHome = () => {
  return (
    <div className="testimony">
      <img src={testimonyImg1} className="testimonyImg1" />
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
          <div className="organicTag">
            <strong>100%</strong>
            <p>Organic</p>
          </div>
          <div className="activeTag">
            <strong>285</strong>
            <p>Active Product</p>
          </div>
          <div className="orchadsTag">
            <strong>300+</strong>
            <p>Organic Orchads</p>
          </div>
          <div className="farmingTag">
            <strong>25+</strong>
            <p>Years of Farming</p>
          </div>
        </div>
      </div>
      <img src={testimonyImg2} className="testimonyImg2" />
    </div>
  );
};
