import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"; // Import the Footer component
import Home from "./pages/Home";
import FindRecipe from "./pages/FindRecipe";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-recipe" element={<FindRecipe />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer /> {/* Footer is added here to display on all pages */}
    </div>
  );
}

export default App;
