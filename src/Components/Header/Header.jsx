import React, { useState } from "react";
import "./Header.css"; // Import CSS file for header styles

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="burger-icon" onClick={toggleMenu}>
          <div className={`bar ${showMenu ? "change" : ""}`}></div>
          <div className={`bar ${showMenu ? "change" : ""}`}></div>
          <div className={`bar ${showMenu ? "change" : ""}`}></div>
        </div>
        <ul className={`nav-list ${showMenu ? "show" : ""}`}>
          <li
            className={`nav-item ${activeNavItem === "about" ? "active" : ""}`}
            onClick={() => handleNavItemClick("about")}
          >
            <a
              href="#about"
              onClick={toggleMenu}
              className={`nav-item ${
                activeNavItem === "about" ? "active" : ""
              }`}
            >
              About
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === "Skills" ? "active" : ""}`}
          >
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
