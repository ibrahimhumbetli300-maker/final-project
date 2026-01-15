import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes.jsx";
import GenderDropdown from "./components/GenderDropdown.jsx";

function App() {
  return (
    <>
   
   
      <Navbar />
      <GenderDropdown />
      <AppRoutes />
    </>
  );
}

export default App;
