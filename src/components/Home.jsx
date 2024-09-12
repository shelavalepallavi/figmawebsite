import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
const Home = () => {
  const handleCollectionClick = () => {
    window.location.href = "https://www.thehousedesigners.com/house-plans/collections/";
  };
  const handleCategoriesClick = () => {
    window.location.href = "https://www.thehousedesigners.com/house-plans/architectural-styles/";
  };
  return (
    <div className="container section">
      <header>
        <div className="nav-left">
          <img src="https://shelavale3795.github.io/menu-01-stroke-rounded.svg" alt="section" />
          <span className="name">HomeVibes</span>
        </div>
        <div className="nav-right">
          <div className="icons">
          <img src="https://shelavale3795.github.io/search-01-stroke-rounded.svg" alt="Search" />
          <img className="heart" src="https://shelavale3795.github.io/favourite-stroke-rounded.svg" alt="Likes" />
          <img src="https://shelavale3795.github.io/shopping-bag-03-stroke-rounded.svg" alt="cart" />
            
          </div>
          <div>
            <Link to="/signup">
            <button className="logbtn">
              <img src="https://shelavale3795.github.io/user-stroke-rounded.svg" alt="logIn" />Log in/ Sign up
            </button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="paragraph">
          <p>
            Crafted with <br /> passion, designed <br /> for comfort
          </p>
        </div>
        <div className="buttons">
          <button className="btn1" onClick={handleCollectionClick}>View our latest collection</button>
          <button className="btn2"  onClick={handleCategoriesClick}>Browse categories</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
