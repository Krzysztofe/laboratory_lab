import Hero from "../hero/Hero";
import Projects from "../projectsSection/projects/Projects";
import Publications from "../publications/Publications";
import Reactions from "../reactions/Reactions";
import Contact from "../contactSection/contact/Contact";
import FormContainer from "../contactSection/form/FormContainer";

const IndexHome = () => {
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
