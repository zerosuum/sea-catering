import React, { useEffect, useRef } from "react";
import "./Modal.css";

const Modal = ({ show, onClose, data }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("keydown", handleEscKey);
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [show, onClose]);

  if (!show || !data) {
    return null;
  }

  const formattedPrice =
    typeof data.price === "number"
      ? new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(data.price)
      : "N/A";

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <img src={data.image} alt={data.title} className="modal-image" />
        <div className="modal-text">
          <h2 id="modal-title">{data.title}</h2>
          <p>{data.description}</p>
          <h4>Additional Information:</h4>
          <ul>
            <li>Price: {formattedPrice}</li>
            <li>Category: Healthy Food</li>
            <li>Calories: approx. 350kcal</li>
          </ul>
        </div>
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
