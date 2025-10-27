const FeaturesSection = () => {
  const features = [
    {
      icon: "⚡️", // Placeholder for icon image
      title: "A17 Bionic Chip",
      description: "Experience unparalleled speed and efficiency with the next-generation A17 Bionic chip. Powering everything from pro-level apps to demanding games with ease."
    },
    {
      icon: "📸", // Placeholder for icon image
      title: "Pro-Grade Camera System",
      description: "Capture breathtaking photos and cinematic videos with a revolutionary camera system, featuring enhanced low-light performance and advanced computational photography."
    },
    {
      icon: "🔋", // Placeholder for icon image
      title: "All-Day Battery Life",
      description: "Go further with an extended battery life that keeps up with your busiest days. Optimized for efficiency, so you can do more, for longer."
    },
    {
      icon: "💎", // Placeholder for icon image
      title: "Ceramic Shield",
      description: "The toughest smartphone glass ever, Ceramic Shield provides industry-leading drop performance, offering incredible durability and peace of mind."
    }
  ];

  return (
    <section id="features" className="section-container">
      <h2 className="section-title">Groundbreaking Features</h2>
      <p className="section-subtitle">Discover what makes the iPhone 17 Pro Max truly extraordinary.</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div> {/* Replace with <img src={feature.iconUrl} /> */}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturesSection