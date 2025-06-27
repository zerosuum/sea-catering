import React from "react";
import { useState } from "react";
import "./Menu.css";
import MenuCard from "./MenuCard";
import Modal from "./Modal";
import meal_1 from "../../assets/meal-1.jpg";
import meal_2 from "../../assets/meal-2.jpg";
import meal_3 from "../../assets/meal-3.jpg";

const dummyMenuData = [
  {
    id: 1,
    image: meal_3,
    title: "Radiant Pink Smoothie",
    description:
      "A vibrant and refreshing blend of strawberries, raspberries, and banana, packed with vitamins to kickstart your day.",
    price: "$4.75",
  },
  {
    id: 2,
    image: meal_2,
    title: "Hearty Beef Curry",
    description:
      "Tender chunks of beef slow-cooked in a rich and aromatic coconut curry sauce, served with a side of steamed rice.",
    price: "$8.00",
  },
  {
    id: 3,
    image: meal_1,
    title: "Classic Caprese Salad",
    description:
      "A timeless Italian salad featuring fresh mozzarella, ripe tomatoes, and sweet basil, drizzled with premium olive oil.",
    price: "$5.50",
  },
];

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleShowDetails = (mealData) => {
    setSelectedMeal(mealData);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="menu-section ">
      <div className="menu-list">
        {dummyMenuData.map((meal) => (
          <MenuCard
            key={meal.id}
            image={meal.image}
            title={meal.title}
            description={meal.description}
            price={meal.price}
            onShowDetails={() => handleShowDetails(meal)}
          />
        ))}
        <Modal
          show={isModalOpen}
          onClose={handleCloseModal}
          data={selectedMeal}
        />
      </div>
    </div>
  );
};
export default Menu;
