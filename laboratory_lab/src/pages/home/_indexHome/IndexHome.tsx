import Nav from "../nav/Nav";
import Hero from "../hero/Hero";
import Projects from "../projectsSection/projects/Projects";
import Publications from "../publications/Publications";
import Reactions from "../reactions/Reactions";
import Contact from "../contactSection/contact/Contact";
import FormContainer from "../contactSection/form/FormContainer";
import Footer from "../footer/Footer";

const IndexHome = () => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <Hero />
        <Projects />
        <Publications />
        <Reactions />
        <Contact>
          <FormContainer />
        </Contact>
      </main>
      <Footer />
    </>
  );
};

export default IndexHome;
