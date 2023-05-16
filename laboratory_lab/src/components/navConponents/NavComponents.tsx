import { useLocation } from "react-router-dom";
import HeaderHome from "./navHome/navHome/HeaderHome";
import NavAside from "./navAside/navAside/NavAside";

const NavComponents = () => {
  const url = useLocation().pathname;

  return (
    <>
      {["/", "/login", "/register"].includes(url) ? (
        <HeaderHome />
      ) : (
        <NavAside />
      )}
    </>
  );
};

export default NavComponents;
