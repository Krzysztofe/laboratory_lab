import Nav from "../nav/Nav";
import Header from "../header/Header";
import ProjectsContainers from "../projects/ProjectsContainer";
import Publications from "../publications/Publications";
import Reactions from "../reactions/Reactions";
import FormSection from "../form/FormSection";
import Footer from "../footer/Footer";

const IndexHome = () => {
  return (
    <>
      <Nav />
      <Header />
      <ProjectsContainers />
      <Publications />
      <Reactions />
      <FormSection />
      <Footer />
    </>
  );
};

export default IndexHome;
