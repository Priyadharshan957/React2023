// Home.js
import './home.css';
import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home">Home</a>
        <a><Link to='/aboutus'>About Us</Link></a>
        <a href="#">Contact Us</a>
        <a><Link to='/' className='links'>Log In</Link></a>
      </nav>

      {/* Banner */}
      <section
        className="banner"
        id="home"
      >
        <div className="content">
          <h3>
          FROM STOCKING TO SHOPPING,<br/><span>WE 'VE GOT YOU COVERED</span>
          </h3>
          <button type="button" className="btn">
            <Link to='/products'> Shop Now </Link>
          </button>
        </div>
      </section>

   

      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: info@yoursupermarket.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>


          <div class="footer-section followus">
            <h2>Follow Us</h2>
            <ul>
              <li><a href="">FaceBook</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">X</a></li>
            </ul>
          </div>
        </div>
     
      </footer>
    </div>
  );
}
