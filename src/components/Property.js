import React from "react";

function Property({ prop }) {
  const { id, imgSrc, address, price, description } = prop;

  return (
    <div className="property" key={id}>
      <img 
        src={`/assets/${imgSrc}`} 
        alt={address}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/assets/house-1.jpg";
        }}
      />
      <h3>{address}</h3>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
}

export default Property;
