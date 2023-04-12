import Hero from "../hero/Hero";
import PaginationSection from "../pagination/paginationSection/PaginationSection";
import Contact from "../contactSection/contact/Contact";
import { useParams } from "react-router-dom";

const IndexHome = () => {
const {id} = useParams()

  return (
    <>
      <main>
        <Hero />
        <PaginationSection />
        <Contact/>
      </main>
    </>
  );
};

export default IndexHome;
