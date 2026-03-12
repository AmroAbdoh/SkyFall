import Header from "../Header"
import HomeHero from "./HomeHero"
import Companies from "./Companies"
import HomeServices from "./HomeServices"
import Success from "./Success"
import WhyChoose from "./WhyChoose"
import FAQ from "../ContactPage/FAQ"
// import Hero from "../Hero"



function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <Companies />
      <HomeServices />
      <Success />
      <WhyChoose />
      <FAQ />
    </>
  )
}

export default Home