import React from "react";
import Menu from "react-burger-menu/lib/menus/stack";

export const NavBar = () => {
  return (
    <nav id="nav">
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
        <li>
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
