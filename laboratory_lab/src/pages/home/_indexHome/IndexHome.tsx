import Hero from "../hero/Hero";
import Projects from "../projectsSection/projects/Projects";
import Publications from "../publications/Publications";
import Reactions from "../pagination/paginationContainer/PaginationContainer";
import Contact from "../contactSection/contact/Contact";
import FormContainer from "../contactSection/form/FormContainer";
import { useParams } from "react-router-dom";

const IndexHome = () => {
const {id} = useParams()



  return (
    <>
      <main>
        <Hero />
        <Projects />
        <Publications />
        <Reactions />
        <Contact>
          <FormContainer />
        </Contact>
      </main>
    </>
  );
};

export default IndexHome;
