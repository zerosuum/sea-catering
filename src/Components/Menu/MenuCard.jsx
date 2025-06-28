import React from "react";
import "./MenuCard.css";

const MenuCard = ({ image, title, description, price, onShowDetails }) => {
  // Memastikan harga diformat dengan aman, hanya jika tipenya angka
  const formattedPrice =
    typeof price === "number"
      ? new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(price)
      : "Harga tidak tersedia";

  return (
    <div className="menu-card">
      <img src={image} alt={title} className="menu-card-img" />

      <div className="menu-card-content">
        <h3 className="menu-card-title">{title}</h3>
        <p className="menu-card-description">{description}</p>
        <div className="menu-card-footer">
          <p className="menu-card-price">{formattedPrice}</p>
          <button onClick={onShowDetails} className="details-button">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
