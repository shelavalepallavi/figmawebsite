import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="privacy">
        <div className="logo">
          <img src="//shelavale3795.github.io/footer.svg" alt="logo" />
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
            placeholder="Enter your email"
          />
          <button>Subscribe</button>
        </div>
        <hr />
        <div className="para2">
          We respect your privacy, we'll not spam you! Read our{" "}
          <a href="">privacy <br />policy</a> here.
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
