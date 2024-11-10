import React from "react";
import "./Collections.css";

const Collections = () => {
  const handleCollectionClick = () => {
    window.location.href = "https://www.thehousedesigners.com/house-plans/collections/";
  };
  return (
    <div className="collections section">
      <p className="para1">Exciting collections</p>
      <p className="para2">curated specially for you</p>
      <div className="row">
        <div className="col">
          <img src="https://github.com/shelavalepallavi/homevibes/collection1.jpeg" alt="col1" />
          <button className="view" onClick={handleCollectionClick}>View collection</button>
        </div>
        <div className="col">
          <img src="https://github.com/shelavalepallavi/homevibes/collection2.jpeg" alt="col2" />
          <button className="view" onClick={handleCollectionClick}>View collection</button>
        </div>
        <div className="col">
          <img src="https://github.com/shelavalepallavi/homevibes/collection3.jpeg" alt="col3" />
          <button className="view" onClick={handleCollectionClick}>View collection</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
