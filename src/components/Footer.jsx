import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required");
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      window.location.href =
        "https://www.thehousedesigners.com/house-plans/search/results/";
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(""); 
  };

  return (
    <div className="footer">
      <div className="privacy">
        <div className="logo">
          <img src="https://github.com/shelavalepallavi/homevibes/footer.svg" alt="logo" />
          <p>
            Home<span>Vibes</span>
          </p>
        </div>
        <div className="para1">
          <p>Keep up to date with new collection and festive sales</p>
        </div>
        <div className="sub">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={!error ? "Enter your email" : ""}
            value={error ? error : email}
            onChange={handleInputChange}
            className={error ? "error-input" : ""}
          />
          <button onClick={handleClick}>Subscribe</button>
        </div>
        <hr />
        <div className="para2">
          We respect your privacy, we'll not spam you! Read our{" "}
          <a href="https://www.thehousedesigners.com/privacy-policy/">
            privacy <br />
            policy
          </a>{" "}
          here.
        </div>

        <div className="terms">
          <p>TERMS & CONDITIONS</p>
          <p className="t2">PRIVACY POLICY</p>
        </div>
      </div>

      <div className="company">
        <p className="com">COMPANY</p>
        <p>About us</p>
        <p>Careers</p>
        <p>Contact us</p>
        <p>Find a showroom</p>
      </div>
      <div className="product">
        <p className="pro">PRODUCT</p>
        <p>Categories</p>
        <p>New Arrivals</p>
        <p>Best sellers</p>
        <p>Collections</p>
      </div>
    </div>
  );
};

export default Footer;
