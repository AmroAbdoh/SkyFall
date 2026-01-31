import "./button.css"; 

function Button({ text, buttonURL, isMobile = false }) {
  return (
    <a
      href={buttonURL}
      className={`button ${isMobile ? "mobile-button" : ""}`}
    >
      {text}
    </a>
  );
}

export default Button;