import { useLocation } from "react-router-dom";
import HeaderHome from "./navHome/navHome/HeaderHome";
import NavAside from "./navAside/navAside/NavAside";

const NavComponents = () => {
  const url = useLocation().pathname;

  return (
    <>
      {url === "/" || url === "/login" || url === "/register" ? (
        <HeaderHome />
      ) : (
        <NavAside />
      )}
    </>
  );
};

export default NavComponents;
