import React, { useState } from "react";
import "./Testimonials.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const initialTestimonials = [
  {
    id: 1,
    name: "Emily Williams",
    review:
      "The variety and taste are incredible! I no longer have to worry about cooking healthy meals after a long day at work. It's a lifesaver.",
    rating: 5,
  },
  {
    id: 2,
    name: "William Jackson",
    review:
      "Perfectly portioned and macro-friendly. The detailed nutritional info helps me stay on track with my fitness goals. The taste is a huge bonus!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Chen",
    review:
      "As someone with a hectic schedule, SEA Catering provides the convenience I need without compromising on health or flavor. Highly recommended.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formName, setFormName] = useState("");
  const [formReview, setFormReview] = useState("");
  const [formRating, setFormRating] = useState("");

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formName || !formReview || !formRating) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    const newTestimonial = {
      id: testimonials.length + 1,
      name: formName,
      review: formReview,
      rating: Number(formRating),
    };
    setTestimonials([...testimonials, newTestimonial]);
    setFormName("");
    setFormReview("");
    setFormRating("");
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonial-content-wrapper">
          <div className="testimonial-form-column">
            <form className="testimonial-form" onSubmit={handleSubmit}>
              <h4>Share Your Story</h4>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="review">Your Review</label>
                <textarea
                  id="review"
                  rows="5"
                  placeholder="Write your messages here"
                  required
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating (1-5)</label>
                <input
                  type="number"
                  id="rating"
                  min="1"
                  max="5"
                  placeholder="e.g., 5"
                  required
                  value={formRating}
                  onChange={(e) => setFormRating(e.target.value)}
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit Now <FaArrowRight />
              </button>
            </form>
          </div>
          <div className="testimonial-slider-column">
            <div className="slider-container">
              <button className="slider-arrow" onClick={goToPrevious}>
                <FaArrowLeft />
              </button>
              <div className="testimonial-slider">
                <div
                  className="testimonial-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-slide">
                      <div className="testimonial-card-content">
                        <p className="testimonial-text">
                          "{testimonial.review}"
                        </p>
                        <div className="author-details">
                          <div className="author-avatar-placeholder"></div>
                          <div className="author-info">
                            <h4>{testimonial.name}</h4>
                            <span className="rating-stars">
                              {"⭐".repeat(testimonial.rating)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="slider-arrow" onClick={goToNext}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
