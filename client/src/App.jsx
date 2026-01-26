import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes.jsx";
import GenderDropdown from "./components/GenderDropdown.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <GenderDropdown />
      <div className="flex-grow">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
