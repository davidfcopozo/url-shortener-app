import React from "react";

export const Hamburger = () => {
  const mobileMenu = (e) => {
    document.querySelector(".main-nav").classList.toggle("active");
  };

  return (
    <button className="mobile-nav-toggle" onClick={(e) => mobileMenu(e)}>
      <span></span>
    </button>
  );
};
