import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <h2>CATEGORIES</h2>
      <div className="cards">
        <div className="card1">
          <span>FURNITURE</span>
          <img className="image1" src="src/assets/image11.jpeg" alt="image1" />
          <img className="image2" src="src/assets/image12.jpeg" alt="image2" />
          <img className="image3" src="src/assets/image13.jpeg" alt="image3" />
          <img className="image4" src="src/assets/image14.jpeg" alt="image4" />
          <img className="image5" src="src/assets/image15.jpeg" alt="image5" />
        </div>
        <div className="card2">
          <span>DECOR</span>
          <img className="image1" src="src/assets/image21.jpeg" alt="image1" />
          <img className="image2" src="src/assets/image22.jpeg" alt="image2" />
          <img className="image3" src="src/assets/image23.jpeg" alt="image3" />
          <img className="image4" src="src/assets/image24.jpeg" alt="image4" />
          <img className="image5" src="src/assets/image25.jpeg" alt="image5" />
        </div>
        <div className="card3">
          <span>LIGHTING</span>
          <img className="image1" src="src/assets/image31.jpeg" alt="image1" />
          <img className="image2" src="src/assets/image32.jpeg" alt="image2" />
          <img className="image3" src="src/assets/image33.jpeg" alt="image3" />
          <img className="image4" src="src/assets/image34.jpeg" alt="image4" />
          <img className="image5" src="src/assets/image35.jpeg" alt="image5" />
        </div>
      </div>
    </div>
  );
};

export default Categories;

