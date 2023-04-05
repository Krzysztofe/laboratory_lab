import Hero from "../hero/Hero";
import Projects from "../projectsSection/projects/Projects";
import PaginationSection from "../pagination/paginationSection/PaginationSection";
import Contact from "../contactSection/contact/Contact";
import FormContainer from "../contactSection/form/FormContainer";
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
