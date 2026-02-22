import Header from "../Header";
import Hero from "../Hero";
import AboutSection from "./AboutSection";
import InfoSection from "./InfoSection";

function About() {
  return (
    <>
      <Header />
      <main className="main-page">
        <Hero
          title="About Us"
          description="Welcome to Skyfall, where data is the driver of your business."
          image="/images/services-cta.jpg"
          showButton={false}
        />
      </main>
      <AboutSection imageUrl="/images/aboutUs.png" />

      <InfoSection
        title="Our Story"
        paragraph="Skyfall Enterprises is a data-driven software development company dedicated to empowering businesses with intelligent solutions. By seamlessly integrating software services with advanced data tracking, we provide in-depth, data-driven reporting that enables businesses to make informed and strategic decisions. Our expertise lies in transforming raw data into actionable insights, helping companies optimize their operations, enhance performance, and drive sustainable growth. At Skyfall Enterprises, we bridge the gap between technology and business intelligence, ensuring that every decision is backed by accurate and meaningful data."
      />

      <InfoSection
        imageUrl="/images/Ahmad-Al-Njada.jpg"
        title="Founder & CEO"
        paragraphTitle="Ahmad Al Njada"
        paragraph={`With a bachelors’ in Computer Science, and experience in Business Intelligence. Ahmad Founded Skyfall Enterprises to empower businesses and implement software needs through data-driven approach.  

And a part of being a tech-founder he also Co-Founded Weqayah (a product under the umbrella of Skyfall).

Also, training people and companies is a big part of Ahmad’s journey to ensure that people has the knowledge needed.`}      
      />
      
    </>
  );
}

export default About;
