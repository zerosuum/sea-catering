import React, { useState, useEffect } from "react";
import "./Subscription.css";
import { postSubscription } from "../../services/subscriptionService.js";

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

const Subscription = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(planOptions[0].price);
  const [mealTypes, setMealTypes] = useState([]);
  const [deliveryDays, setDeliveryDays] = useState([]);
  const [allergies, setAllergies] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleCheckboxChange = (event, currentValues, setterFunction) => {
    const { value, checked } = event.target;
    if (checked) {
      setterFunction([...currentValues, value]);
    } else {
      setterFunction(currentValues.filter((item) => item !== value));
    }
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setSelectedPlan(planOptions[0].price);
    setMealTypes([]);
    setDeliveryDays([]);
    setAllergies("");
    // Uncheck all checkboxes visually
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const planDetails = planOptions.find(
      (p) => p.price === Number(selectedPlan)
    );

    if (
      !name ||
      !phone ||
      !planDetails ||
      mealTypes.length === 0 ||
      deliveryDays.length === 0
    ) {
      alert("Please fill all required fields before subscribing.");
      return;
    }

    const subscriptionData = {
      name,
      phone,
      planName: planDetails.name,
      planPrice: planDetails.price,
      mealTypes,
      deliveryDays,
      allergies,
    };

    setIsSubmitting(true);
    try {
      const result = await postSubscription(subscriptionData);
      alert(
        result.message ||
          "Subscription successful! We will contact you shortly."
      );
      resetForm();
    } catch (err) {
      alert("Failed to create subscription. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="subscription" className="subscription-section">
      <div className="subscription-form-wrapper">
        <form className="subscription-form" onSubmit={handleSubmit}>
          <h2>Start Your Healthy Journey</h2>
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
                    onChange={(e) =>
                      handleCheckboxChange(e, mealTypes, setMealTypes)
                    }
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
                    onChange={(e) =>
                      handleCheckboxChange(e, deliveryDays, setDeliveryDays)
                    }
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
            <h3>Total Estimated Monthly Price:</h3>
            <p>
              Rp
              {totalPrice.toLocaleString("id-ID", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Subscribe Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
