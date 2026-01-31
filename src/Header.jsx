import { useState } from "react";
import "./index.css";
import Button from "./Button";

const Title = () => <div className="logo">SkyFall Enterprises</div>;

function NavbarItem({ Text, className }) {
  return (
    <a className={`navbar-link ${className || ""}`} href="#">
      {Text}
    </a>
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
        <NavbarItem Text="Work" className="active" />
        <NavbarItem Text="Procces" />
        <NavbarItem Text="About" />
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
