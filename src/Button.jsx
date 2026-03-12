import "./button.css"; 
import { Link } from "react-router-dom";

function Button({ text, buttonURL, isMobile = false, type = "link" , isPurple = true }) {
  const className = `button ${isMobile ? "mobile-button" : ""} ${isPurple ? "" : "grey"}`;

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