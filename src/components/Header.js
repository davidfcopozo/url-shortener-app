import React from "react";
import { NavBar } from "./NavBar";
import { Hamburger } from "./Hamburger";

const Header = () => {
  return (
    <header>
      <div>
        <a href="#" className="logo">
          Shortlify
        </a>
      </div>
      <Hamburger />
      <NavBar />
    </header>
  );
};

export default Header;
