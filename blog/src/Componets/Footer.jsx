import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row footer-top py-4">
          {/* Logo & About */}
          <div className="col-md-4">
            <h2 className="footer-logo">Sameer Writes</h2>
            <p>Inspiring minds, one blog at a time.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/create" className="footer-link">Blogs</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <div className="d-flex social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center py-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Sameer Writes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
