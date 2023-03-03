import NavItems from "../navItems/NavItems";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { GiChemicalDrop } from "react-icons/gi";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <>
          <nav className="homeNavMobile">
            <div className="homeNavMobile__icons">
              <GiChemicalDrop className="iconDrop" />
              <GrFormClose
                className="icon"
                onClick={() => setIsOpen(prev => !prev)}
              />
            </div>
            <NavItems setIsOpen={setIsOpen} />
          </nav>
        </>
      ) : (
        <nav className="homeNavMobile">
          <div className="homeNavMobile__icons">
            <GiChemicalDrop className="iconDrop" />
            <RiMenuFill
              className="icon"
              onClick={() => setIsOpen(prev => !prev)}
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default NavMobile;
