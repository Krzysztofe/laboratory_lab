import BtnLink from "../../../components/btnLink/BtnLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../data/firebaseConfig";
const Hero = () => {
  const [user] = useAuthState(auth);
  const link = user?.email ? "/reaction-form" : "/login";

  return (
    <section>
      <div className="wrapper hero">
        <h1 className="hero__title">
          Dziennik laboratoryjny
          <br /> grupy badawczej
        </h1>

        <BtnLink text={"KATALOG PROJEKTÓW"} class={"hero__btn"} link={link} />
      </div>
    </section>
  );
};

export default Hero;
