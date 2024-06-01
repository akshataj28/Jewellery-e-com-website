import React from 'react';
import './Bestseller.css';

// Import images
import image1 from '../images/bracelet.jpeg';
import image2 from '../images/bracelet.jpeg';
import image3 from '../images/bracelet.jpeg';
import image4 from '../images/bracelet.jpeg';

const Bestseller = () => {
  return (
    <div className="bestseller-container">
      <h2>OUR BESTSELLERS</h2>
      <div className="bestseller-items">
        <div className="bestseller-item">
          <img src={image1} alt="Bestseller 1" />
        </div>
        <div className="bestseller-item">
          <img src={image2} alt="Bestseller 2" />
        </div>
        <div className="bestseller-item">
          <img src={image3} alt="Bestseller 3" />
        </div>
        <div className="bestseller-item">
          <img src={image4} alt="Bestseller 4" />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-section">
          <h3>Help And Information</h3>
          <ul>
            <li><a href="#help">Help</a></li>
            <li><a href="#faqs">FAQ's</a></li>
            <li><a href="#shipping">Shipping</a></li>
            <li><a href="#track-order">Track Order</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Want to stay updated with our newest products? Sign up now!</p>
          <form>
            <input type="email" placeholder="email address" />
            <button type="submit">→</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Bestseller;
