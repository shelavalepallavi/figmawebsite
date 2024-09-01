import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="head">
        <div className="email">
          <img src="//shelavale3795.github.io/email.svg" alt="mail" />
          <p>Email us @ xyz@HomeVibes.com</p>
        </div>
<<<<<<< HEAD
        <div className="flexicon">
          <img src="src/assets/facebook.svg" alt="facebook" />
          <img src="src/assets/insta.svg" alt="instagram" />
          <img src="src/assets/twitter.svg" alt="twitter" />
=======
        <div className="flex">
          <img src="//shelavale3795.github.io/facebook.svg" alt="facebook" />
          <img src="//shelavale3795.github.io/insta.svg" alt="instagram" />
          <img src="//shelavale3795.github.io/twitter.svg" alt="twitter" />
>>>>>>> ed5fd78d4d12821dee5ed2bbfb5e45db42c10544
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
