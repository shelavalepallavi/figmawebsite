import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <header>
        <div className="nav-left">
          <img src="src/assets/menu-01-stroke-rounded.svg" alt="section" />
          <span className="name">HomeVibes</span>
        </div>
        <div className="nav-right">
          <div className="icons">
          <img src="src/assets/search-01-stroke-rounded.svg" alt="Search" />
          <img className="heart" src="src/assets/favourite-stroke-rounded.svg" alt="Likes" />
          <img src="src/assets/shopping-bag-03-stroke-rounded.svg" alt="cart" />
            
          </div>
          <div>
            <button className="logbtn">
              <img src="src/assets/user-stroke-rounded.svg" alt="logIn" />Log in/ Sign up
            </button>
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
          <button className="btn1">View our latest collection</button>
          <button className="btn2">Browse categories</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
