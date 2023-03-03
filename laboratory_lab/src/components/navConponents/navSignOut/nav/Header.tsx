import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header>
      <div className="wrapper homeHeader">
        <Nav />
      </div>
      <NavMobile />
    </header>
  );
};

export default Header;
