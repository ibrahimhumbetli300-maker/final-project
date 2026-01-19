import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes.jsx";
import GenderDropdown from "./components/GenderDropdown.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
   
   
      <Navbar />
      <GenderDropdown />
      <AppRoutes />
      <Footer/>
    </>
  );
}

export default App;
