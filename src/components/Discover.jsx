import React from "react";
import "./Discover.css";

const Discover = () => {
  const handleClick = () => {
    window.location.href = "https://www.thehousedesigners.com/about-our-house-plans/";
  };
  return (
    <div className="discover section">
        <div className="article">
          <div className="frame">
            <img
              src="https://github.com/shelavalepallavi/homevibes/discover.jpeg"
              alt="discover"
            />
          </div>
          <div className="info">
            <p className="p1">DESIGNERS AND MAKERS</p>
            <p className="p2">
              Discover the artistry and craftsmanship behind Homevibe with our
              skilled designers and makers
            </p>
            <button className="btn" onClick={handleClick}>Know more</button>
          </div>
        </div>
        <p className="zangmo">Zangmo</p>
      </div>
  );
};

export default Discover;
