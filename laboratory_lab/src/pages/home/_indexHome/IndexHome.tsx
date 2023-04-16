import ContactSection from "../contact/contactSection/ContactSection";
import Hero from "../hero/Hero";
import PaginationSection from "../pagination/paginationSection/PaginationSection";

const IndexHome = () => {
  return (
    <main>
      <Hero />
      <PaginationSection />
      <ContactSection />
    </main>
  );
};

export default IndexHome;
