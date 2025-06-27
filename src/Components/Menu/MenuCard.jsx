import React from 'react'
import './MenuCard.css'

const MenuCard = ({image, title, description, price}) => {
    return (
    <div className='menu-card'>
        <img src={image} alt="title" className='menu-card-img' />

        <div className='menu-card-content'>
            <h3 className='menu-card-title'>{title}</h3>
            <p className='menu-card-description'>{description}</p>
            <p className='menu-card-price'>{price}</p>
        </div>
    </div>
    );
};

export default MenuCard