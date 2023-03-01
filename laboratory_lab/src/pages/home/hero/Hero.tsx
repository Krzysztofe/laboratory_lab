import BtnLink from "../../../components/btnLink/BtnLink";

const Hero = () => {
  return (
    <section>
      <div className="wrapper hero">
        <h1 className="hero__title">
          Dziennik laboratoryjny
          <br /> grupy badawczej
        </h1>

        <BtnLink
          text={"KATALOG PROJEKTÓW"}
          class={"hero__btn"}
          link={"/user"}
        />
      </div>
    </section>
  );
};

export default Hero;
