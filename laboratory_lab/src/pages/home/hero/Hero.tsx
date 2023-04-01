import BtnLink from "../../../components/btnLink/BtnLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../data/firebaseConfig";

const Hero = () => {
  const [user] = useAuthState(auth);
  const link = user?.email ? "/reaction-form" : "/login";

  return (
    <section>
      <div style={{ height: 90 }}></div>
      <div className="wrapper hero">
        <div className="hero__leftContainer"></div>

        <div className="hero__rightContainer">
          <h1 className="hero__title">
            Dziennik laboratoryjny
            <br /> grupy badawczej
          </h1>
          <BtnLink
            text={"Wypełnij dziennik"}
            class={"btn btn--hero"}
            link={link}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
