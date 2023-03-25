import Nav from "./NavHome";
import NavMobile from "./NavHomeMobile";

const HeaderHome = () => {
  return (
    <header>
      <div className="wrapper homeHeader">
        <Nav />
      </div>
      <NavMobile />
    </header>
  );
};

export default HeaderHome;
