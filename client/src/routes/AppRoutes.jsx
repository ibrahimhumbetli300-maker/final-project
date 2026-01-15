import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import BestSellers from "../pages/BestSellers";
import Kits from "../pages/Kits";
import Memorabilia from "../pages/Memorabilia";
import Training from "../pages/Training";
import Apparel from "../pages/Apparel";
import Gifts from "../pages/Gifts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Kids from "../pages/Kids";
import Men from "../pages/Men";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/training" element={<Training />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/memorabilia" element={<Memorabilia />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
