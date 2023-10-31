import React from "react";
import "../../components/categoriesAbout/categoriesAbout.css";
import spicePowder from "../../images/spicePowder.jpg";
import spices from "../../images/spices.jpg";
import pomegranate from "../../images/pomegranate.jpg";
import ginger from "../../images/ginger.jpg";

export const CategoriesAbout = () => {
  return (
    <div className="categoriesAbout">
      <h4 className="categoriesAboutHead">About Us</h4>
      <h3 className="categoriesAboutSubHead">What We Offer You</h3>
      <div className="productCategoriesAbout">
        <div className="spicyPowder">
          <img src={spicePowder} className="spicePowderImg" />
          <p className="spicy">Spicy</p>
        </div>

        <div className="nuts">
          <img src={spices} className="nutsNFeesdImg" />
          <p className="nutsNFeesd">Nuts</p>
        </div>

        <div className="fruits">
          <img src={pomegranate} className="fruitsImg" />
          <p className="fruit">Fruits</p>
        </div>
        <div className="vegetables">
          <img src={ginger} className="vegetablesImg" />
          <p className="vegetable">Vegetables</p>
        </div>
      </div>
    </div>
  );
};
