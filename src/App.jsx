// src/App.jsx
import React from "react";
import Navbar from "./assets/components/navbar";
import HeroSection from "./assets/components/herosec";
import FeaturesSection from "./assets/components/featuresec";
import SpecsSection from "./assets/components/specsec";
import CallToAction from "./assets/components/calltoaction";
import Footer from "./assets/components/footer";
import "./App.css";

// For a real project, you'd import specific images like this:
// import iphone17ProMaxImage from './assets/iphone-17-pro-max.png';
// import cameraIcon from './assets/icon-camera.svg';
// ... etc.

// 2. Hero Section Component

// 3. Features Section Component

// 4. Specifications Section Component

// 5. Call To Action Component

// 6. Footer Component

// Main App Component
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SpecsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
