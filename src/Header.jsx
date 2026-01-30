// Header.js
import { useState } from "react";
import "./index.css"; // Import styles if needed

// Title component
const Title = () => <div className="logo">SkyFall Enterprises</div>;

// Button component
const Button = ({ text, href }) => {
  return (
    <a href={href} className="contact-us">
      {text}
    </a>
  );
};

// NavbarItem component
function NavbarItem({ Text, className }) {
  return (
    <a className={`Navbar-item ${className || ""}`} href="#">
      {" "}
      {Text}{" "}
    </a>
  );
}

// Navbar component
// function Navbar() {
//   return (
//     <nav className="navbarHeader">
//       <NavbarItem Text="Home" />
//       <NavbarItem Text="Services" />
//       <NavbarItem Text="Work" className='active'/>
//       <NavbarItem Text="Procces" />
//       <NavbarItem Text="About" />
//       <NavbarItem Text="Careers" />
//     </nav>
//   );
// }

// Header component
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-all">
      
      <Title />

      
      <nav className={`navbar-items ${menuOpen ? "open" : ""}`}>
        <NavbarItem Text="Home" />
        <NavbarItem Text="Services" />
        <NavbarItem Text="Work" className="active" />
        <NavbarItem Text="Procces" />
        <NavbarItem Text="About" />
        <NavbarItem Text="Careers" />
      </nav>

      <Button text={"Contact Us"} href={"#"} />

      
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>        
        <img src="images/Vector (Stroke).png" alt="&#9776;" />
      </div>
    </header>
  );
}

export { Button };
export default Header;