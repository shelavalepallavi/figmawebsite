import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="group">
        <div className="test1">
          <img src="https://shelavale3795.github.io/homewillimages/quote.svg" alt="" />
          <p>
            I purchased a set of the outdoor furniture from this company and I
            am so Impressed with the durability and design. The furniture has
            held up well in all types of weather and the cushions are easy to
            clean.
          </p>
          <img className="person" src="https://shelavale3795.github.io/homewillimages/test1.png" alt="person1" />
          <span>Lora Smith </span>
        </div>
        <div className="test2">
          <img src="https://shelavale3795.github.io/homewillimages/quote.svg" alt="" />
          <p>
            I recently purchased a sectional sofa from this company and I have
            been extremely pleased with it. The fabric is high quality and the
            cushions are very comfortable. The delivery process was smooth and
            hassle-free. I highly recommended HomeVibes.
          </p>
          <img className="person" src="https://shelavale3795.github.io/homewillimages/test2.png" alt="person2" />
          <span>Lora Smith </span>
        </div>
        <div className="test3">
          <img src="https://shelavale3795.github.io/homewillimages/quote.svg" alt="" />
          <p>
            "I purchased a bed frame from this furniture brand and it exceeded
            my expectations. The quality is top-notch and the design is modern
            and sleek. The customer service was also fantastic, and the delivery
            was prompt. I highly recommended this furniture brand
          </p>
          <img className="person" src="https://shelavale3795.github.io/homewillimages/test3.png" alt="person3" />
          <span>Lora Smith </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
