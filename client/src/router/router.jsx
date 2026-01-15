import { Routes, Route } from "react-router-dom";
import BestSellers from "../pages/BestSellers";
import Kits from "../pages/Kits";
import Training from "../pages/Training";
import Apparel from "../pages/Apparel";
import Memorabilia from "../pages/Memorabilia";
import Gifts from "../pages/Gifts";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Search from "../pages/Search";
import Home from '../pages/Home'


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/best-sellers" element={<BestSellers />} />
      <Route path="/kits" element={<Kits />} />
      <Route path="/training" element={<Training />} />
      <Route path="/apparel" element={<Apparel />} />
      <Route path="/memorabilia" element={<Memorabilia/>} />
      <Route path="/gifts" element={<Gifts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default AppRouter;