import React from "react";

const features = [
  { id: 1, text: "Modern Design", imgSrc: "house-1.jpg" },
  { id: 2, text: "Prime Location", imgSrc: "house-2.jpg" },
  { id: 3, text: "Affordable Pricing", imgSrc: "house-3.jpg" },
];

function Feature() {
  return (
    <div className="feature-container">
      {features.map((feature) => (
        <div key={feature.id} className="feature-item">
          <img 
            src={`/assets/${feature.imgSrc}`} 
            alt={feature.text}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/house-1.jpg";
            }}
          />
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Feature;
