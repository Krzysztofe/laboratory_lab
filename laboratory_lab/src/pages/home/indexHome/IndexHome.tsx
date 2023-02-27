import Nav from "../nav/Nav";
import Header from "../header/Header";
import Projects from "../projects/Projects";
import Publications from "../publications/Publications";
import Reactions from "../reactions/Reactions";
import FormSection from "../form/FormSection";
import Footer from "../footer/Footer";

const IndexHome = () => {
  return (
    <>
      <Nav />
      <Header />
      <Projects />
      <Publications />
      <Reactions />
      <FormSection />
      <Footer />
    </>
  );
};

export default IndexHome;
