import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi"; // Profile Icon
import logo from "../../assets/Logo.png";

const Menu = () => (
  <>
    <p>
      <Link to="/">Home</Link> {/* Link for Home Page */}
    </p>
    <p>
      <Link to="/find-recipe">Find Recipe</Link> {/* Link for Find Recipe Page */}
    </p>
    <p>
      <Link to="/favourites">Favourites</Link> {/* Link for Favourites Page */}
    </p>
    <p>
      <Link to="/profile">Profile</Link> {/* Link for Profile Page */}
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLoginClick = () => {
    // Simulate a login process (this can be replaced with real login logic)
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    // Simulate logout (this can be replaced with real logout logic)
    setIsLoggedIn(false);
  };

  return (
    <div className="recipe-navbar">
      {/* Logo Section */}
      <div className="recipe-navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <div className="recipe-navbar-links">
        <Menu />
      </div>

      {/* Login/Sign Up Button or Profile Icon */}
      <div className="recipe-navbar-login">
        {!isLoggedIn ? (
          <button onClick={handleLoginClick}>Login / Sign Up</button> // Show Login button if not logged in
        ) : (
          <FiUser size={25} onClick={handleLogoutClick} /> // Show Profile Icon if logged in
        )}
      </div>

      {/* Mobile Menu */}
      <div className="recipe-navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="recipe-navbar-menu_container scale-up-right">
            <div className="recipe-navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
