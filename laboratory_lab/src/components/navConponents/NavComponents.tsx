import { useLocation } from "react-router-dom";
import Header from "./navSignOut/nav/Header";
import NavAside from "./navSignIn/navAside/NavAside";
import { ProSidebarProvider } from "react-pro-sidebar";
const NavComponents = () => {
  const url = useLocation().pathname;

  return (
    <>
      {url === "/" || url === "/login" || url === "/register" ? (
        <Header />
      ) : (
        <ProSidebarProvider>
          <NavAside />
        </ProSidebarProvider>
      )}
    </>
  );
};

export default NavComponents;
