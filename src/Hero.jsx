import { useState , useEffect} from "react";
import "./hero.css";
import Button from "./Button";


function Hero({ title, description, showButton = true, buttonText, buttonHref , isLaptop = true}) {
  const [image, setImage] = useState("/images/services-cta.jpg"); // default desktop

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1440px)");

    const handleResize = (e) => {
      if (e.matches && isLaptop) {
        setImage("/images/services-hero.jpg"); // smaller image for <=1440px
      } else {
        setImage("/images/services-cta.jpg"); // desktop image
      }
    };

    handleResize(mediaQuery); 
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        {showButton && <Button text={buttonText} buttonURL={buttonHref} />}
      </div>
    </section>
  );
}

export default Hero;
