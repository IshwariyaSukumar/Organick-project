import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import "./App.css";
import { AboutUs } from "./pages/about/AboutUs";
import { Shop } from "./pages/shop/Shop";
import { Team } from "./pages/team/Team";
import { ShopSingle } from "./pages/shopSingle/ShopSingle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shopsingle" element={<ShopSingle />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
