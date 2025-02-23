import React from "react";
import "./About.css";
import blog from '../assets/6.webp'
const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About <span>Life Unfiltered</span></h1>
          <p>Explore creativity, knowledge, and inspiration through our blogs.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            "Life Unfiltered" is a platform dedicated to insightful blogs on 
            education, nature, and YouTube content creation. Our goal is to 
            inspire and inform through high-quality writing.
          </p>
        </div>
        <div className="about-image">
          <img src={blog} alt="Blog Writing" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Why Choose Us?</h2>
        <div className="mission-content">
          <div className="mission-box">
            <h3>Quality Content</h3>
            <p>We provide well-researched and engaging articles on trending topics.</p>
          </div>
          <div className="mission-box">
            <h3>Inspiration & Learning</h3>
            <p>Our blogs aim to educate, entertain, and inspire creativity.</p>
          </div>
          <div className="mission-box">
            <h3>Community & Growth</h3>
            <p>Join a passionate community that values knowledge and storytelling.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
