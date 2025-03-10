import React from "react";
import PropTypes from "prop-types";

const Feature = () => {
  const features = [
    {
      id: 1,
      title: "Expertise",
      text: "Our real estate company has a team of highly skilled professionals who possess extensive knowledge of the real estate market, ensuring that our clients receive the best possible advice and guidance.",
    },
    {
      id: 2,
      title: "Personalized Service",
      text: "We understand that each client has unique needs and preferences, which is why we provide personalized service that is tailored to meet individual requirements.",
    },
    {
      id: 3,
      title: "Trustworthy",
      text: "We have built a reputation of being a trustworthy real estate company that operates with honesty, transparency, and integrity. Our clients can rely on us to always act in their best interests.",
    },
    {
      id: 4,
      title: "Exceptional Results",
      text: "We have a track record of achieving exceptional results for our clients, whether it's finding the perfect home, securing a profitable investment property, or selling a property at the best possible price.",
    },
  ];

  return (
    <div className="features-container">
      {features.map((feature) => (
        <section className="feature-grid" key={feature.id}>
          <div className="feature-box">
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

Feature.propTypes = {};

export default Feature;
