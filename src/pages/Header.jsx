import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <a href="#" className="menu">
        <i class="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i class="bi bi-heart-fill"></i>
          <span className="like"></span>
        </a>
        <a href="#" className="icon">
          <i class="bi bi-bag-fill"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
