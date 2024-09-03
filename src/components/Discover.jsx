import React from "react";
import "./Discover.css";

const Discover = () => {
  return (
    <div className="discover section">
        <div className="article">
          <div className="frame">
            <img
              src="https://shelavale3795.github.io/discover.jpeg"
              alt="discover"
            />
          </div>
          <div className="info">
            <p className="p1">DESIGNERS AND MAKERS</p>
            <p className="p2">
              Discover the artistry and craftsmanship behind Homevibe with our
              skilled designers and makers
            </p>
            <button className="btn">Know more</button>
          </div>
        </div>
        <p className="zangmo">Zangmo</p>
      </div>
  );
};

export default Discover;
