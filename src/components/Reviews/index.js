import React, { useState } from 'react';
import './index.css';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1759746668/pexels-julia-m-cameron-4144144_icfseg.jpg",
      rating: 5,
      text: "Thanks to IELTS Institute's comprehensive training and mock exams, I improved my speaking and listening skills significantly. Their personalized feedback made all the difference, and I scored well above my expectations.",
      name: "Michael Lee",
      title: "Aspiring Student, Academic Success Co.",
      company: "ASC"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1759746755/pexels-julia-m-cameron-4144223_awhrmk.jpg",
      rating: 5,
      text: "Attending IELTS Institute was a game-changer for me. Their tailored coaching and practice tests boosted my confidence and helped me achieve my target score. The instructors are highly professional and supportive throughout the journey.",
      name: "Emma Johnson",
      title: "Recent IELTS Graduate, Global Education Ltd.",
      company: "GEL"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="testimonials" className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} />
        </div>

        <div className="testimonial-content">
          <div className="stars">
            {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>

          <p className="testimonial-text">{testimonials[currentSlide].text}</p>

          <div className="testimonial-author">
            <div className="author-info">
              <h4>{testimonials[currentSlide].name}</h4>
              <p>{testimonials[currentSlide].title}</p>
            </div>
            <div className="company-logo">
              {testimonials[currentSlide].company}
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-controls">
        <div className="dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="nav-buttons">
          <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous testimonial">
            ←
          </button>
          <button className="nav-btn next" onClick={nextSlide} aria-label="Next testimonial">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
