
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleContactClick = (event) => {
    event.preventDefault();
    let formErrors = {};
    if (!name) {
      formErrors.name = "Full Name is required";
    }
    if (!email) {
      formErrors.email = "Email is required";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formErrors.email = "Please enter a valid email address";
      }
    }
    if (!message) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      window.location.href = "https://www.thehousedesigners.com/contact-us/";
    }
  };
  const handleInputChange = (field, value) => {
    switch (field) {
      case "name":
        setName(value);
        setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
        break;
      case "email":
        setEmail(value);
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        break;
      case "message":
        setMessage(value);
        setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
        break;
      default:
        break;
    }
  };

  const handleFaceBookClick = (event) => {
    event.preventDefault();
    window.location.href = "https://www.facebook.com/TheHouseDesigners";
  };

  const handleInstaClick = (event) => {
    event.preventDefault();
    window.location.href = "https://www.instagram.com/thehousedesigners/";
  };

  return (
    <div className="contact section">
      <div className="head">
        <div className="email">
          <img
            src="https://shelavalepallavi.github.io/homewillimages/email.svg"
            alt="mail"
            onClick={handleContactClick}
          />
          <p>Email us @ xyz@HomeVibes.com</p>
        </div>

        <div className="space-icon">
          <img
            src="https://shelavalepallavi.github.io/homewillimages/facebook.svg"
            alt="facebook"
            onClick={handleFaceBookClick}
          />
          <img
            src="https://shelavalepallavi.github.io/homewillimages/insta.svg"
            alt="instagram"
            onClick={handleInstaClick}
          />
          <img
            src="https://shelavalepallavi.github.io/homewillimages/twitter.svg"
            alt="twitter"
            onClick={handleContactClick}
          />
        </div>
      </div>

      <form action="">
        <p className="cont-para">Contact us</p>
        <div>
          <div className="input-container">
            <input
              className="ipt"
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="input-container">
            <input
              className="ipt"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="input-container">
            <input
              className="ipt"
              id="msg"
              name="msg"
              placeholder="Message"
              value={message}
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>
        </div>

        <button type="button" className="contact-btn" onClick={handleContactClick}>
          Contact us
        </button>
      </form>
    </div>
  );
};

export default Contact;
