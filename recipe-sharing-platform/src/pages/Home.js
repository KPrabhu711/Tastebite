import React from "react";
import FeaturedRecipeBanner from "../components/FeaturedRecipeBanner/FeaturedRecipeBanner";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Featured Recipe Banner */}
      <FeaturedRecipeBanner />

      {/* Super Delicious Section */}
      <section className="super-delicious-section">
        <h2 className="section-title">Super Delicious</h2>
        <div className="recipe-cards-container">
          <RecipeCard
            className="recipe-card"
            image="/images/pasta.png"
            title="Mac n Cheese"
            rating="5"
          />
          <RecipeCard
            className="recipe-card"
            image="/images/pizza.png"
            title="Chicago Deep Dish Pizza"
            rating="4.5"
          />
          <RecipeCard
            className="recipe-card"
            image="/images/cheesecake.png"
            title="Baked Cheese Cake"
            rating="4.8"
          />
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="popular-categories-section">
        <h2 className="section-title">Popular Categories</h2>
        <div className="categories-container">
          <CategoryCard
            className="category-card"
            name="Pasta"
            image="/images/pasta-category.png"
          />
          <CategoryCard
            className="category-card"
            name="Pizza"
            image="/images/pizza-category.png"
          />
          <CategoryCard
            className="category-card"
            name="Desserts"
            image="/images/desserts-category.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
