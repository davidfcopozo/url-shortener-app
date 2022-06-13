import React from "react";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import instagramIcon from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <h2>Shortify</h2>
      <div class="footer-container">
        <ul>
          <li>
            <h3>Features</h3>
          </li>
          <li>Link Shortening</li>
          <li>Branded</li>
          <li>Links Analytics</li>
        </ul>
        <ul>
          <li>
            <h3>Resources</h3>
          </li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul>
          <li>
            <h3>Company</h3>
          </li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul className="social-footer">
          <li>
            <a href="facebook.com">
              <img src={facebookIcon} alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a href="twitter.com">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a href="pinterest.com">
              <img src={pinterestIcon} alt="Pinterest icon" />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img src={instagramIcon} alt="Instagram icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
