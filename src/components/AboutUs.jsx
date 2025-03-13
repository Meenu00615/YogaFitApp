import React from "react";
import "./AboutUs.css"; 

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="intro-section">
        <h1 className="section-title">About YogaFit</h1>
        <p className="section-subtitle">
          YogaFit is an AI-powered <strong>smart yoga mat</strong> that provides real-time posture correction using <strong>Computer Vision</strong> and <strong>Machine Learning</strong>.
        </p>
      </section>

      <section className="objective-section">
        <h2>Our Mission</h2>
        <p>
          We aim to enhance <strong>health & wellness</strong> through AI-driven posture correction. Our smart yoga mat integrates <strong>OpenCV, Mediapipe, and Deep Learning</strong> to <strong>analyze body posture</strong> in real time and provide instant feedback for yoga enthusiasts and professionals.
        </p>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-container">
          <div className="feature-box">
            <h3>AI-Powered Posture Analysis</h3>
            <p>Real-time feedback using pose estimation and computer vision.</p>
          </div>

          <div className="feature-box">
            <h3>Real-Time Feedback</h3>
            <p>Live corrections to improve your yoga form and alignment.</p>
          </div>

          <div className="feature-box">
  <a href="https://github.com/Meenu00615/YogaFit">
    <h3>Academic Contribution</h3>
    <p>Published research on AI and ML for health and wellness.</p>
  </a>
</div>

        </div>
      </section>

      <section className="research-section">
        <h2>Research & Development</h2>
        <p>
          Our project explores: Human-Computer Interaction (HCI), Deep Learning, and Health AI to build an intelligent system for yoga practitioners.
        </p>
      </section>

      <section className="cta-section">
        <h2>Join the AI-Powered Yoga Revolution!</h2>
        <p>Be a part of our research and experience a smarter way to practice yoga.</p>
        <button className="btn-primary">Learn More</button>
      </section>
    </div>
  );
};

export default AboutUs;
