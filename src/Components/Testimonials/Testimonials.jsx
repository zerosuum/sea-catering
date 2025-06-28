import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  getTestimonials,
  postTestimonial,
} from "../../services/testimonialService";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State untuk form
  const [formName, setFormName] = useState("");
  const [formReview, setFormReview] = useState("");
  const [formRating, setFormRating] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        setError("Failed to load testimonials.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const goToNext = () => {
    if (testimonials.length === 0) return;
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    if (testimonials.length === 0) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formName || !formReview || !formRating) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    setIsSubmitting(true);
    try {
      const newTestimonialData = {
        name: formName,
        review: formReview,
        rating: Number(formRating),
      };
      const savedTestimonial = await postTestimonial(newTestimonialData);

      setTestimonials([savedTestimonial, ...testimonials]);
      setCurrentIndex(0); // Pindah ke testimoni baru

      // Reset form
      setFormName("");
      setFormReview("");
      setFormRating("");
      alert("Thank you for your review!");
    } catch (err) {
      alert("Sorry, there was an error submitting your review.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="testimonials-section">
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
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit Now <FaArrowRight />
                </>
              )}
            </button>
          </form>
        </div>
        <div className="testimonial-slider-column">
          <div className="slider-container">
            <button
              className="slider-arrow"
              onClick={goToPrevious}
              disabled={testimonials.length === 0}
            >
              <FaArrowLeft />
            </button>
            <div className="testimonial-slider">
              {isLoading && <div>Loading testimonials...</div>}
              {error && <div className="error-message">{error}</div>}
              {!isLoading && !error && testimonials.length > 0 ? (
                <div
                  className="testimonial-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial._id} className="testimonial-slide">
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
              ) : (
                !isLoading &&
                !error && (
                  <div className="no-testimonials">
                    Be the first to leave a review!
                  </div>
                )
              )}
            </div>
            <button
              className="slider-arrow"
              onClick={goToNext}
              disabled={testimonials.length === 0}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
