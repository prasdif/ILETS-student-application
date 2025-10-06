import React from 'react';
import './index.css';

const CardsSection = () => {
  const cardsData = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1759741943/sp_p1gqfe.webp",
      title: "Comprehensive IELTS Preparation Course",
      description: "In-depth training across all IELTS modules, tailored to help students maximize their scores. Personalized coaching and expert feedback."
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1759741942/2d_dpqvw8.webp",
      title: "Speaking Practice Workshops",
      description: "Enhance speaking skills through mock interviews and peer practice sessions. Boost confidence with constructive feedback from experienced tutors."
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1759741942/gd_kllso1.webp",
      title: "Mock Tests & Band Score Predictions",
      description: "Evaluate progress and predict band scores using AI-based analysis. Realistic test environment to build exam confidence and target weak areas."
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1759741942/gd1_jslwyl.webp",
      title: "Success Stories",
      description: "Hear from our successful students and learn how our unique features helped them achieve their desired IELTS band scores."
    }
  ];

  return (
    <section className="cards-section">
      <div className="cards-container">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <div className="card-image">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;