import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="footer-logo">YogaFit</h1>
          <p className="newsletter-text">
            Get newsletter updates for upcoming updates.
          </p>
          <div className="newsletter">
  <input type="email" placeholder="Your Email" className="newsletter-input" id="userEmail" />
  <button 
    className="newsletter-btn"
    onClick={() => {
      const userEmail = document.getElementById("userEmail").value;
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=meenu00615@gmail.com&su=Newsletter Subscription&body=Please add ${userEmail} to your newsletter list.`,
        "_blank"
      );
    }}
  >
    Submit
  </button>
</div>


        </div>

        <div className="footer-right">
          <div className="footer-links">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="https://github.com/Meenu00615/YogaFit" target="_blank" rel="">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Our Social Media</h3>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 YogaFit | All Rights Reserved</p>
        <div className="footer-bottom-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
