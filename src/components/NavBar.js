import React from "react";

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="main-nav">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <span></span>
        <li className="login-btn">
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#" id="sign-up-btn">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};
