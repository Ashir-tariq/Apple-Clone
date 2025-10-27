const HeroSection = () => {
  // Placeholder for the iPhone image. In a real app, you'd import it.
  const iphone17ProMaxPlaceholder =
    "./images/iphone17.jpg";

  return (
    <section id="overview" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">iPhone 17 Pro Max</h1>
        <p className="hero-subtitle">
          The future in your hands. Unrivaled power. Unmatched design.
        </p>
        <a href="#buy" className="btn-primary hero-cta-button">
          Pre-order Now
        </a>
        <a href="#features" className="learn-more-link">
          Learn More &gt;
        </a>
      </div>
      <div className="hero-image-container">
        <img
          src={iphone17ProMaxPlaceholder} // Replace with actual image path
          alt="iPhone 17 Pro Max"
          className="hero-iphone-image"
        />
      </div>
    </section>
  );
};
export default HeroSection;
