import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Hero from "./Hero";
import Body from "./Body";

function All() {
  return (
    <>
      <Header />
      <Hero
        title="Our Works"
        description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
        image="/images/services-cta.jpg"
        showButton={false}
      />
      <Body />
      <footer className="footer-work">
        <Hero
          title="Let us Bring your Ideas to Life in the Digital World."
          description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
          buttonText="Start Project"
          buttnoHref="#"
          changeImageLaptop={false}
        />
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<All />);
