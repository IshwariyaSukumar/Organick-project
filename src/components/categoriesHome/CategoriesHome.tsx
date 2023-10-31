import "../../components/categoriesHome/categoriesHome.css";

export const CategoriesHome = () => {
  return (
    <div className="categories">
      <div className="organicJuice">
        <button className="organicJuiceBtn">Organic Juice</button>
      </div>
      <div className="organicFood">
        <button className="organicFoodBtn">Organic Food</button>
      </div>
      <div className="nutsCookies">
        <button className="nutsCookiesBtn">Nuts Cookis</button>
      </div>
    </div>
  );
};
