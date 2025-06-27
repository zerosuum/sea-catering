import React from "react";
import "./MenuCard.css";

const MenuCard = ({ image, title, description, price, onShowDetails }) => {
  return (
    <div className="menu-card">
      <img src={image} alt="title" className="menu-card-img" />

      <div className="menu-card-content">
        <h3 className="menu-card-title">{title}</h3>
        <p className="menu-card-description">{description}</p>
        <div className="menu-card-footer">
          <p className="menu-card-price">{price}</p>
          <button onClick={onShowDetails} className="details-button">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
