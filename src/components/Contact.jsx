import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1 className="contact-title">Let’s get in touch</h1>

        <div className="contact-details">
          <p><strong>Phone</strong></p>
          <p>+(91) 7668016006</p>

          <p><strong>Email</strong></p>
          <p>meenu00615@gmail.com</p>

        </div>
      </div>

      <div className="contact-form-container">
        <div className="form-box">
          <h2>Contact</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Phone" required />
              <input type="text" placeholder="Subject" required />
            </div>

            <textarea placeholder="Message" required></textarea>

            <button type="submit" className="send-btn">Send to us</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
