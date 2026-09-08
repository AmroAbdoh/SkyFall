import Header from "../Header"
import Hero from "../Hero"
import SectionHeader from "../SectionHeader"
import Service from "./Service"


function Services() {
  return (
    <>
      <Header />
      <main className="main-page">
        <Hero
          title={"Our Services"}
          description={
            "Transform your brand with our innovative digital solutions that captivate and engage your audience."
          }
          image="/images/services-cta.jpg"
          showButton={false}
        />
      </main>
      <div className="services">
          <Service type={"service"}/>
          <Service type={"engineering"}/>
          <Service type={"project"}/>

      </div>
      <footer className="footer-work">
        <Hero
          title="Let us Bring your Ideas to Life in the Digital World."
          description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
          buttonText="Start Project"
          buttonHref="#"
          isLaptop={false}
        />
      </footer>
    </>
  )
}

export default Services