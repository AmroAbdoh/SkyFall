import { useState } from "react";
import "./index.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Title = () => <div className="logo">SkyFall Enterprises</div>;

function NavbarItem({ Text, className , href}) {
  return (
    <Link to={href} className={`navbar-link ${className || ""}`}>
      {Text}
    </Link>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Title />

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <NavbarItem Text="Home" />
        <NavbarItem Text="Services" />
        <NavbarItem Text="Work" className="active" href="/work" />
        <NavbarItem Text="Procces" />
        <NavbarItem Text="About" href="/about" />
        <NavbarItem Text="Careers" />
      </nav>

      <Button text={"Contact Us"} buttonURL={"#"} isMobile={true} />

      <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="images/Vector (Stroke).png" alt="&#9776;" />
      </div>
    </header>
  );
}

export default Header;
