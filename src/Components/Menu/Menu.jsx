import React, { useState, useEffect } from "react";
import "./Menu.css";
import MenuCard from "./MenuCard";
import Modal from "./Modal";
import { getMenuItems } from "../../services/menuService";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenuItems();
        setMenuItems(data);
      } catch (err) {
        let errorMessage = "Failed to load menu. Please try again later.";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        setError(errorMessage);
        console.error("Failed to fetch menu:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const handleShowDetails = (mealData) => {
    setSelectedMeal(mealData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="menu" className="menu-section">
      {isLoading && <div>Loading menu...</div>}
      {error && <div className="error-message">{error}</div>}
      {!isLoading && !error && (
        <div className="menu-list">
          {menuItems.map((meal) => (
            <MenuCard
              key={meal._id} // Menggunakan _id dari MongoDB
              image={meal.image}
              title={meal.title}
              description={meal.description}
              price={meal.price}
              onShowDetails={() => handleShowDetails(meal)}
            />
          ))}
        </div>
      )}
      <Modal
        show={isModalOpen}
        onClose={handleCloseModal}
        data={selectedMeal}
      />
    </div>
  );
};

export default Menu;
