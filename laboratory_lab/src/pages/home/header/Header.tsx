import React from "react";
import Btn from "../../../components/Btn";

const Header = () => {
  return (
    <header>
      <div className="wrapper header">
        <h1 className="header__title">
          Dziennik laboratoryjny
          <br /> grupy badawczej
        </h1>
        <div className="header__btns">
          <Btn text={"ZALOGUJ"} class={"header__btn"} link={"/login"} />
          <Btn text={"ZAREJESTRUJ"} class={"header__btn"} link={"/register"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
