import React, { useState, useEffect } from "react";
import "./Subcription.css";

const planOptions = [
  { id: "diet", name: "Diet Plan", price: 30000 },
  { id: "protein", name: "Protein Plan", price: 40000 },
  { id: "royal", name: "Royal Plan", price: 60000 },
];

const mealTypeOptions = ["Breakfast", "Lunch", "Dinner"];
const deliveryDayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const SubscriptionPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(planOptions[0].price);
  const [mealTypes, setMealTypes] = useState([]);
  const [deliveryDays, setDeliveryDays] = useState([]);
  const [allergies, setAllergies] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const planPrice = Number(selectedPlan);
    const numMealTypes = mealTypes.length;
    const numDeliveryDays = deliveryDays.length;

    if (numMealTypes > 0 && numDeliveryDays > 0) {
      const calculatedPrice = planPrice * numMealTypes * numDeliveryDays * 4.3;
      setTotalPrice(calculatedPrice);
    } else {
      setTotalPrice(0);
    }
  }, [selectedPlan, mealTypes, deliveryDays]);

  const handleMealTypeChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setMealTypes([...mealTypes, value]);
    } else {
      setMealTypes(mealTypes.filter((type) => type !== value));
    }
  };

  const handleDayChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setDeliveryDays([...deliveryDays, value]);
    } else {
      setDeliveryDays(deliveryDays.filter((day) => day !== value));
    }
  };

  return (
    <section className="subscription-section">
      <div className="subscription-form-wrapper">
        <form className="subscription-form">
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Active Phone Number*</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Select Your Plan*</label>
            <div className="radio-group">
              {planOptions.map((plan) => (
                <label key={plan.id} className="radio-label">
                  <input
                    type="radio"
                    name="plan"
                    value={plan.price}
                    checked={Number(selectedPlan) === plan.price}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  />
                  {plan.name} – Rp{plan.price.toLocaleString("id-ID")}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Meal Type (Select at least one)*</label>
            <div className="checkbox-group">
              {mealTypeOptions.map((type) => (
                <label key={type} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={type}
                    onChange={handleMealTypeChange}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Delivery Days (Select at least one)*</label>
            <div className="checkbox-group-days">
              {deliveryDayOptions.map((day) => (
                <label key={day} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={day}
                    onChange={handleDayChange}
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="allergies">Allergies or Dietary Restrictions</label>
            <textarea
              id="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              rows="4"
            ></textarea>
          </div>

          <div className="price-display">
            <h3>Total Estimated Price:</h3>
            <p>
              Rp
              {totalPrice.toLocaleString("id-ID", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          <button type="submit" className="submit-btn">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscriptionPage;
