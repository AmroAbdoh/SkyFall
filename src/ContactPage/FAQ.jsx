import React from "react";
import Hero from "../Hero";

import "./FAQ.css";
import FAQQuestions from "./FAQQuestions";

function FAQ() {
  return (
    <div className="FAQ">
      <main className="main-page">
        <Hero
          title={"Frequently Asked Questions"}
          image="/images/services-cta.jpg"
          showButton={false}
          className="FAQ-hero"
        />
      </main>

      <FAQQuestions />
    </div>
  );
}

export default FAQ;
