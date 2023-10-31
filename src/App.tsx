import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import { AboutUs } from "./pages/about/AboutUs";
import Shop from "./pages/shop/Shop";
import { Team } from "./pages/team/Team";
import { ShopSingle } from "./pages/shopSingle/ShopSingle";
import { Member } from "./pages/member/Member";
import { ProductCart } from "./pages/cart/ProductCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopSingle/:id" element={<ShopSingle />} />
        <Route path="/member/:id" element={<Member />} />
        <Route path="/member" element={<Member />} />
        <Route path="/cart" element={<ProductCart />} />
      </Routes>
    </Router>
  );
}

export default App;
