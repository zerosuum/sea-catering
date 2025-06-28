import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/salad.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMobileMenu = () => setMenuOpen(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <nav className={`navbar container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo" onClick={closeMobileMenu}>
        <img src={logo} alt="SEA Catering Logo" className="logo-img" />
        <span className="logo-text">sea catering</span>
      </div>

      <button
        className="menu-icon"
        onClick={handleToggle}
        aria-expanded={menuOpen}
        aria-controls="nav-menu-list"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul
        id="nav-menu-list"
        className={menuOpen ? "nav-menu-active" : "nav-menu"}
      >
        {/* ... list item Anda ... */}
      </ul>

      <ul className={menuOpen ? "nav-menu-active" : "nav-menu"}>
        <li className="nav-item">
          <a href="#home" className="nav-link" onClick={closeMobileMenu}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#menu" className="nav-link" onClick={closeMobileMenu}>
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#subscription"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Subscription
          </a>
        </li>
        <li className="nav-item-button">
          <button className="btn" onClick={closeMobileMenu}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
