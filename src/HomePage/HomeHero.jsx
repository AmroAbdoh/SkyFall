import "./HomeHero.css";
import Button from "../Button";

function HomeHero() {
  return (
    <div className="home-hero">
      <div className="home-hero-title">
        <h1>
          A Data-Driven Software <br /> & Business Company
        </h1>
        <section className="home-hero-section">
          <span>Ed-Tech</span>
          ,
          <span>Fin-Tech</span>
          ,
          <span>Med-Tech</span>
          and
          <span>Startups</span>
        </section>
      </div>

      <div className="home-buttons">
        <Button text={"Our Works"} buttonURL={"/work"}  isPurple={false} />
        <Button text={"Contact Us"} buttonURL={"/contact"}  />
      </div>

      <div className="trusted-badge">
        Trusted By 250+ Companies
      </div>
    </div>
  );
}

export default HomeHero;
