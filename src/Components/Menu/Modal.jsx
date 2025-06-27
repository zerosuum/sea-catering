import React from 'react'
import './Modal.css'

const Modal = ({show, onClose, data}) => {
    if (!show) {
        return null;
    }
    if (!data) {
        return null;
    }
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={data.image} alt={data.title} className="modal-image" />

          <div className="modal-text">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h4>Additional Information:</h4>
            <ul>
              <li>Price: {data.price}</li>
              <li>Category: Healthy Food</li>
              <li>Calories: approx. 350kcal</li>
            </ul>
          </div>
          <button className='modal-close-button' onClick={onClose}>&times;</button>
        </div>
      </div>
    );
}
export default Modal