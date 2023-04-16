import ContactForm from "../contactForm/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="wrapper contact">
        <div className="contact__leftContainer"></div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
