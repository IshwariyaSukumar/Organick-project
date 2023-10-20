import "./aboutUs.css";
import organickLogo from "../../images/organickLogo.png";
import instaLogo from "../../images/instaLogo.png";
import fbLogo from "../../images/fbLogo.png";
import twiterLogo from "../../images/twiterLogo.png";
import pinterestLogo from "../../images/pinterestLogo.png";

export const AboutUs = () => {
  return (
    <div className="aboutUsFooter">
      <div className="aboutUsFooterHead">
        <img src={organickLogo} className="mainLogo"></img>
        <h3 className="title">Organick</h3>
      </div>
      <div className="aboutUsFooterContent">
        <p className="aboutUsFooterPara">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing
        </p>
        <div className="logos">
          <img className="instaLogo" src={instaLogo}></img>
          <img className="fbLogo" src={fbLogo}></img>
          <img className="twiterLogo" src={twiterLogo}></img>
          <img className="pinterestLogo" src={pinterestLogo}></img>
        </div>
      </div>
    </div>
  );
};
