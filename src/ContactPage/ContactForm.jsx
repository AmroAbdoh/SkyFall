import React, { useState } from "react";
import "./contactForm.css";
import Button from "../Button";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    reasons: [],
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCheckBox(e) {
    const { value, checked } = e.target;

    if (checked) {
      setForm({ ...form, reasons: [...form.reasons, value] });
    } else {
      setForm({
        ...form,
        reasons: form.reasons.filter((r) => r !== value),
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-row">
          <InputBox label="Full Name" name="name" onChange={handleChange} />
          <InputBox
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
          />
        </div>
        <CheckBox handleCheckBox={handleCheckBox} selected={form.reasons} />
        <InputBox label="Message" name="message" onChange={handleChange} />
        <div className="form-submit">
          <Button text="Submit" type="submit" />
        </div>
      </div>
    </form>
  );
}

function InputBox({ label, name, type = "text", onChange }) {
  return (
    <div className="form-box">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder="Type here"
        onChange={onChange}
      />
    </div>
  );
}

function CheckBox({ handleCheckBox, selected }) {
  const options = [
    "Web Design",
    "Collaboration",
    "Mobile App Design",
    "Others",
  ];

  return (
    <div className="form-checkbox">
      <h3>Why are you contacting us?</h3>
      <div className="checkbox-grid">
        {options.map((opt) => (
          <label key={opt}>
            <input
              type="checkbox"
              value={opt}
              checked={selected.includes(opt)}
              onChange={handleCheckBox}
            />
            <span></span>
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

export default ContactForm;
