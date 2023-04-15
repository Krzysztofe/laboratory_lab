import Contact from "../contactSection/contact/Contact";
import Hero from "../hero/Hero";
import PaginationSection from "../pagination/paginationSection/PaginationSection";

const IndexHome = () => {
  return (
    <main>
      <Hero />
      <PaginationSection />
      <Contact />
    </main>
  );
};

export default IndexHome;
