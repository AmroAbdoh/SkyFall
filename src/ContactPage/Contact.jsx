import Header from "../Header";
import Hero from "../Hero";
import ContactData from "./ContactData";
import ContactDaysSection from "./ContactDaysSection";
import ContactForm from "./ContactForm";


function Contact() {
  return (
    <>
      <Header />
      <main className="main-page">
        <Hero
          title={"Contact Us"}
          description={
            "Get in touch with us today and let us help you with any questions or inquiries you may have."
          }
          image="/images/services-cta.jpg"
          showButton={false}
        />
      </main>
      <ContactData />
      <ContactForm />
      <ContactDaysSection />
    </>
  );
}

export default Contact;
