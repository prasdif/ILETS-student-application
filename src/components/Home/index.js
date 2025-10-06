// index.js
import "./index.css";

const Home = () => (
  <div className="hero-container">
    <img
      src="https://res.cloudinary.com/dztmp3saa/image/upload/v1759733622/pexels-yankrukov-8199555_nmvups.jpg"
      alt="home"
      className="hero-image"
    />
    <div className="hero-content">
      <h1 className="hero-heading">
        Unlock Your 
        <br />
        <span className="hero-heading-underline">IELTS Potential Today!</span>
      </h1>
      <p className="hero-description">
        Achieve your desired IELTS band score with our comprehensive preparation courses. 
        Get access to expert instructors, personalized feedback, and proven strategies for success.
       Sign up now and take the first step towards your academic and professional goals.
      </p>
      <div className="hero-signup">
        <input
          type="email"
          placeholder="Enter your email"
          className="hero-input"
        />
        <button className="hero-button">Sign up</button>
      </div>
    </div>
  </div>
);

export default Home;
