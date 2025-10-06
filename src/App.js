import Navbar from "./components/Navbar";
import Home from "./components/Home/";
import MiddleSection from "./components/MiddleSection";
import CardsSection from "./components/CardsSection";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <MiddleSection />
      <CardsSection />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;