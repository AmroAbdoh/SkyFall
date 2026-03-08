import React, { useState } from "react";
import "./FAQQuestions.css";

const questions = [
  {
    id: 1,
    q: "What services does SquareUp provide?",
    a: "SquareUp offers design, engineering, project management, web development, mobile app development, branding and more.",
  },
  {
    id: 2,
    q: "How can SquareUp help my business?",
    a: "We provide tailored solutions to grow your business effectively.",
  },
  {
    id: 3,
    q: "What industries does SquareUp work with?",
    a: "We work with technology, healthcare, finance, e-commerce and more.",
  },
  {
    id: 4,
    q: "How long does it take to complete a project with SquareUp?",
    a: "It depends on scope, but typical projects take 4-12 weeks.",
  },
  {
    id: 5,
    q: "Do you offer ongoing support and maintenance after the project is completed?",
    a: "Yes, we provide maintenance packages and support plans.",
  },
  {
    id: 6,
    q: "Can you work with existing design or development frameworks?",
    a: "Absolutely, we integrate seamlessly with existing frameworks.",
  },
  {
    id: 7,
    q: "How involved will I be in the project development process?",
    a: "You will be involved in all key milestones and approvals.",
  },
  {
    id: 8,
    q: "Can you help with website or app maintenance and updates?",
    a: "Yes, ongoing updates and support are part of our services.",
  },
];

function FAQQuestions() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  // Split into 2 columns
  const left = questions.slice(0, 4);
  const right = questions.slice(4, 8);

  const renderColumn = (items) =>
    items.map((item) => (
      <div className="faq-item" key={item.id} onClick={() => toggle(item.id)}>
        <div className="faq-header">
          <div className="faq-number">{String(item.id).padStart(2, "0")}</div>
          <div className="faq-content">
            <p className="faq-question">{item.q}</p>
            <div
              className={`faq-answer-wrapper ${open === item.id ? "open" : ""}`}
            >
              <p className="faq-answer">{item.a}</p>
            </div>
          </div>
          <span className="faq-icon">{open === item.id ? "×" : "+"}</span>
        </div>
      </div>
    ));

  return (
    <div className="faq-container">
      <div className="faq-column">{renderColumn(left)}</div>
      <div className="faq-column right-column">{renderColumn(right)}</div>
    </div>
  );
}

export default FAQQuestions;
