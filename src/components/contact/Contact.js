import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h4 className="contact__colored">03. What's Next?</h4>
      <h2 className="contact__getInTouch"> GET IN TOUCH</h2>
      <p className="contact__text">
        I'm currently looking for any new opportunities and my inbox is always
        open. Whether you have a question or just want to say hi, I'll try my
        best to get back to you!
      </p>
      <button className="contact__btn btn">Say Hello</button>
    </div>
  );
};

export default Contact;
