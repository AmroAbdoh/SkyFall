import Hero from "../Hero";
import "./HomeServices.css";
import Card from "./Card";


function HomeServices() {
  return (
    <div className="services">
      <Hero
        title="About Us"
        description="Welcome to Skyfall, where data is the driver of your business."
        image="/images/services-cta.jpg"
        showButton={false}
        isSpaceUp={false}
      />
      <div className="home-services">
        <Card
          title="Design"
          description="At Skyfall, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
          iconSource="images/design.png"
          buttonText="Learn More"
        />
        <Card
          title="Engineering"
          description="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
          iconSource="images/engineering.png"
          buttonText="Learn More"
        />
        
        <Card
          title="Project Management"
          description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
          iconSource="images/projectManegment.png"
          buttonText="Learn More"
        />
        
        
      </div>
    </div>
  );
}

export default HomeServices;
