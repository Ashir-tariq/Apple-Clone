const SpecsSection = () => {
  const specs = {
    Display: [
      { label: "Type", value: "Super Retina XDR OLED" },
      { label: "Size", value: "6.7 inches" },
      { label: "Refresh Rate", value: "ProMotion (1-120Hz)" },
      { label: "Brightness", value: "Up to 2500 nits peak" }
    ],
    Processor: [
      { label: "Chipset", value: "A17 Bionic" },
      { label: "CPU", value: "6-core CPU with 2 performance and 4 efficiency cores" },
      { label: "GPU", value: "6-core GPU" },
      { label: "Neural Engine", value: "16-core" }
    ],
    Camera: [
      { label: "Main", value: "48MP (ƒ/1.78)" },
      { label: "Ultra Wide", value: "12MP (ƒ/2.2)" },
      { label: "Telephoto", value: "12MP (ƒ/2.8) with 5x optical zoom" },
      { label: "Front", value: "12MP TrueDepth (ƒ/1.9)" }
    ],
    Battery: [
      { label: "Type", value: "Li-Ion" },
      { label: "Video Playback", value: "Up to 30 hours" },
      { label: "Fast Charging", value: "50% in 30 mins (with 20W adapter)" }
    ]
  };

  return (
    <section id="specs" className="section-container specs-section">
      <h2 className="section-title">Detailed Specifications</h2>
      <p className="section-subtitle">Everything you need to know about the power within.</p>
      <div className="specs-grid">
        {Object.entries(specs).map(([category, items]) => (
          <div key={category} className="spec-item">
            <h3 className="spec-category">{category}</h3>
            <ul className="spec-list">
              {items.map((item, index) => (
                <li 
                  key={index} 
                  className="spec-list-item"
                >
                  <span className="spec-label">{item.label}</span>
                  <span className="spec-value">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SpecsSection