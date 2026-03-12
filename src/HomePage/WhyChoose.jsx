import "./WhyChoose.css";
import Hero from "../Hero";
import Card from "./Card";

function WhyChooseCard({ iconSource, title, description }) {
  return (
    <div className="why-choose-card">
      <header>
        <div>
          <img src={iconSource} alt={title} />
        </div>
        <h2>{title}</h2>
      </header>
      <p>{description}</p>
    </div>
  );
}

function WhyChoose() {
  return (
    <div className="why-choose-container">
      <Hero
        title="Why Choose Skyfall?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        image="/images/services-cta.jpg"
        showButton={false}
        isSpaceUp={false}

      />

      <div className="why-choose">
        <Card
          title="Expertise"
          description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          iconSource="images/design.png"
        />
        <Card
          title="Expertise"
          description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          iconSource="images/design.png"
        />
        <Card
          title="Expertise"
          description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          iconSource="images/design.png"
          isTitleNextToIcon={false}

        />
        <Card
          title="Expertise"
          description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          iconSource="images/design.png"
          isTitleNextToIcon={true}
        />
      </div>
    </div>
  );
}

export default WhyChoose;
