import React from "react";
import "./Collections.css";

const Collections = () => {
  return (
    <div className="collections">
      <p className="para1">Exciting collections</p>
      <p className="para2">curated specially for you</p>
      <div className="row">
        <div className="col">
          <img src="src/assets/collection1.jpeg" alt="col1" />
          <button className="view">View collection</button>
        </div>
        <div className="col">
          <img src="src/assets/collection2.jpeg" alt="col2" />
          <button className="view">View collection</button>
        </div>
        <div className="col">
          <img src="src/assets/collection3.jpeg" alt="col3" />
          <button className="view">View collection</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
