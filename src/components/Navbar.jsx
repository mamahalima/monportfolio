import React, { useState } from "react";
import "../styles/components/Navbar.scss";

const Navbar = ({ setAnimateSkills, toggleTheme, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={`navbar ${isMenuOpen ? "open" : ""}`}
      aria-label="Navigation principale">
      <div className="navbar-left">
        <h1 className="navbar-logo">Halima</h1>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={darkMode ? "Activer le mode clair" : "Activer le mode sombre"}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      <div
        className={`navbar-links ${isMenuOpen ? "open" : ""}`}
        id="main-navigation">
        <ul>
          <li>
            <a href="#home-section" onClick={handleClick}>
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#profile"
              onClick={() => {
                handleClick();
                if (setAnimateSkills) setAnimateSkills(false); }}>
              Profil
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleClick}>
              Projets
            </a>
          </li>
          <li>
            <a href="#stack-section" onClick={handleClick}>
              Stack
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div
        className="nav-toggle"
        onClick={toggleMenu}
        role="button"tabIndex="0"
        aria-label="Ouvrir ou fermer le menu"aria-expanded={isMenuOpen}
        aria-controls="main-navigation"onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            toggleMenu();} }}>
        <span className={`bar ${isMenuOpen ? "bar1" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "bar2" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "bar3" : ""}`}></span>
      </div>
    </nav>
  );
};
export default Navbar;