import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact section">
      <div className="head">
        <div className="email">
          <img src="https://shelavale3795.github.io/email.svg" alt="mail" />
          <p>Email us @ xyz@HomeVibes.com</p>
        </div>

        <div className="space-icon">
          <img src="https://shelavale3795.github.io/facebook.svg" alt="facebook" />
          <img src="https://shelavale3795.github.io/insta.svg" alt="instagram" />
          <img src="https://shelavale3795.github.io/twitter.svg" alt="twitter" />

        </div>
      </div>

      <form action="">
        <p className="cont-para">Contact us</p>
        <div>
          <div className="input-container">
            <input className="ipt" type="text" id="name" name="name" placeholder="Full Name" />
          </div>
          <div className="input-container">
            <input className="ipt" type="email" id="email" name="email" placeholder="E-mail" />
          </div>
          <div className="input-container">
            <input className="ipt" id="msg" name="msg" placeholder="Message" />
          </div>
        </div>
        <button className="contact-btn">Contact us</button>
      </form>
    </div>
  );
};

export default Contact;
