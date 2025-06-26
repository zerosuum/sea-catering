import React from "react";
import "./Navbar.css";
import logo from "../../assets/salad.svg";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="all-logo">
        <img src={logo} alt="" className="logo" />{" "}
        <span className="logo-text">sea catering</span>
      </div>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Our Service</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
