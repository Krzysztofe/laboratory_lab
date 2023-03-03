import { useLocation } from "react-router-dom";
import Header from "./navSignOut/nav/Header";
import NavAside from "./navSignIn/navAside/NavAside";
const NavComponents = () => {
  const url = useLocation().pathname;

  return <>{url === "/" ? <Header /> : <NavAside />}</>;
};

export default NavComponents;
