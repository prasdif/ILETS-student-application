import React from 'react';
import './index.css';

const WhyIELTSSection = () => {
  const cardsData = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1759743468/tenweb_media_rmb6k7o7z_kziv6f.webp",
      title: "Comprehensive IELTS Preparation",
      description: "Our flagship course offers in-depth training across all IELTS modules. Get personalized coaching, access practice tests, and receive expert feedback to improve your performance."
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1759743468/tenweb_media_rpyyo7ujq_rfo8pd.webp",
      title: "Speaking Practice Workshops",
      description: "Enhance your speaking skills through mock interviews, pronunciation exercises, and peer practice sessions. Boost your confidence and receive constructive feedback from experienced tutors."
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1759743468/tenweb_media_rucd796dk_audpln.webp",
      title: "Mock Tests & Band Score Predictions",
      description: "Evaluate your progress with regular mock tests and AI-based band score predictions. Identify your weak areas and prepare for the actual IELTS test day with realistic test environments."
    }
  ];

  return (
    <section id="about" className="why-ielts-section">
      <div className="why-ielts-container">
        <div className="why-ielts-header">
          <h2>
            Why <span className="highlight">IELTS Institute</span> is Your Best Choice for IELTS Success
          </h2>
          <p>
            Choosing the right IELTS preparation institute is crucial for your success. At IELTS Institute, we offer a comprehensive and personalized approach to help you achieve your desired band score. Our experienced instructors, proven methodologies, and state-of-the-art resources ensure that you are fully prepared for the exam.
          </p>
        </div>

        <div className="why-ielts-cards">
          {cardsData.map((card) => (
            <div key={card.id} className="why-card">
              <div className="why-card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="why-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyIELTSSection;
