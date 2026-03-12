import { useState } from "react";
import "./index.css";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

const Title = () => <div className="logo">SkyFall Enterprises</div>;

function NavbarItem({ Text, className, href }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `navbar-link ${className || ""} ${isActive ? "active" : ""}`
      }
    >
      {Text}
    </NavLink>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Title />

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <NavbarItem Text="Home" href="/" />
        <NavbarItem Text="Services" href="/services" />
        <NavbarItem Text="Work" href="/work" />
        <NavbarItem Text="Procces" href="/process" />
        <NavbarItem Text="About" href="/about" />
        <NavbarItem Text="Careers" href="/careers" />
      </nav>

      <Button text={"Contact Us"} buttonURL={"/contact"} isMobile={true} />

      <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="images/Vector (Stroke).png" alt="&#9776;" />
      </div>
    </header>
  );
}

export default Header;
