import React from "react";
import "./FeaturedRecipeBanner.css";

const FeaturedRecipeBanner = () => {
  return (
    <section className="featured-recipe-banner">
      <div className="banner-content">
        <h1>Layered Chocolate Tiramisu Cake</h1>
        <p>
        Indulge in the ultimate layered chocolate tiramisu—decadent, velvety, and irresistibly rich, with every bite offering a perfect balance of cocoa and cream.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <img src="/images/tiramisu.jpg" alt="Mighty Super Cheesecake" />
    </section>
  );
};

export default FeaturedRecipeBanner;
