import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./navSignOut/nav/Header";
import NavSignIn from "./navSignIn/NavSignIn";
const NavComponents = () => {
  const url = useLocation().pathname;

  return <>{url === "/" ? <Header /> : <NavSignIn />}</>;
};

export default NavComponents;
