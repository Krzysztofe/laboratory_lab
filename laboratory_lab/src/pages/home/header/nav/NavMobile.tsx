import NavLinks from "../navLinks/NavLinks";
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
          <nav className="navMobile">
            <div className="navMobile__top">
              <GiChemicalDrop className="iconDrop" />
              <GrFormClose
                className="iconCross"
                onClick={() => setIsOpen(prev => !prev)}
              />
            </div>
            <NavLinks setIsOpen={setIsOpen} />
          </nav>
        </>
      ) : (
        <nav className="navMobile">
          <div className="navMobile__top">
            <GiChemicalDrop className="iconDrop" />
            <RiMenuFill
              className="iconHamburger"
              onClick={() => setIsOpen(prev => !prev)}
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default NavMobile;
