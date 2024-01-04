
import React from 'react';
import './aboutus.css';
import { Link } from 'react-router-dom'; 


const AboutUs = () => {
  return (
       

    <div className="about-us-container">
        <h1>Welcome to SuperMart</h1>
      <section className="about-content">
        <p>
          SuperMart is your go-to grocery store, committed to providing
          quality products and exceptional service for a convenient shopping
          experience.
        </p>
        <p>
          Discover a wide variety of fresh produce and groceries sourced from
          local farmers. At SuperMart, we offer competitive prices and
          promotions, making your shopping enjoyable and budget-friendly.
        </p>
      </section>
      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          Make grocery shopping convenient, affordable, and enjoyable for our
          customers while being a community-driven supermarket.
        </p>
        <h2>Our Vision</h2>
        <p>
          Be the preferred destination for high-quality groceries, fostering
          lasting relationships with customers, suppliers, and communities.
        </p>
      </section>
      <footer>
        <p>Contact us at info@supermart.com for inquiries or support.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
