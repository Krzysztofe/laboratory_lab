import BtnLink from "../../../components/btnLink/BtnLink";

const Header = () => {
  return (
    <header>
      <div className="wrapper header">
        <h1 className="header__title">
          Dziennik laboratoryjny
          <br /> grupy badawczej
        </h1>
        <div className="header__btns">
          <BtnLink text={"KATALOG PROJEKTÓW"} class={"header__btn"} link={"/login"} />
         
        </div>
      </div>
    </header>
  );
};

export default Header;
