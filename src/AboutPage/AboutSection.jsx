import React from "react";
import "./aboutSection.css";

function AboutSection({ imageUrl }) {
  return (
    <div className="about-section">
      <p>
        {" "}
        <span style={{ fontWeight: "700" , color:"white" }}>Skyfall Enterprises</span> is the
        premier data-driven software development company. We go beyond
        traditional software solutions by integrating cutting-edge data tracking
        and analytics, transforming raw information into powerful, actionable
        insights. Unlike one-size-fits-all software providers, we empower
        businesses with tailored, in-depth reporting that drives smarter
        decisions, maximizes performance, and unlocks new opportunities for
        success. With Skyfall Enterprises, data isn’t just numbers—it’s the key
        to your competitive advantage.
      </p>

      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="about-img"
      >
        <h2>Skyfall <br /> Enterprises</h2>
      </div>
    </div>
  );
}

export default AboutSection;
