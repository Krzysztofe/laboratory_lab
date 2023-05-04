import { useAuthState } from "react-firebase-hooks/auth";
import BtnLink from "../../../components/btnLink/BtnLink";
import NavHomeSpacer from "../../../components/navHomeSpacer/NavHomeSpacer";
import { auth } from "../../../data/firebaseConfig";


const Hero = () => {
  const [user] = useAuthState(auth);
  const link = user?.email ? "/reaction-form" : "/login";




  return (
    <section>
      <NavHomeSpacer/>
      <div className="wrapper heroHome">
        <div className="heroHome__opacity">
          <h1 className="heroHome__title">
            Dziennik laboratoryjny
            <br /> grupy badawczej
          </h1>
          <BtnLink
            label={"Wypełnij dziennik"}
            class={"btn btn--heroHome"}
            link={link}
          />
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
