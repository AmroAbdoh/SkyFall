import "./button.css"; 
import { Link } from "react-router-dom";

function Button({ text, buttonURL, isMobile = false, type = "link" }) {
  const className = `button ${isMobile ? "mobile-button" : ""}`;

  if (type === "submit") {
    return (
      <button type="submit" className={className}>
        {text}
      </button>
    );
  }

  return (
    <Link to={buttonURL} className={className}>
      {text}
    </Link>
  );
}

export default Button;