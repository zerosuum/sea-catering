import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.svg'

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Healthy Meals, Anytime, Anywhere</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At maiores ipsa beatae excepturi impedit, numquam enim. Illum unde odio quidem minus molestiae possimus vel asperiores pariatur repellat, doloremque, iure maiores!</p>
        <button className='btn'>Explore more <img src={arrow} alt="" /></button>
      </div>
    </div>
  );
}
