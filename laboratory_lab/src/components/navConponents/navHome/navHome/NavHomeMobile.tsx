import NavItems from "../navHomeItems/NavIHometems";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { GiChemicalDrop } from "react-icons/gi";

const NavHomeMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <>
          <nav className="navHomeMobile">
            <div className="navHomeMobile__topIcons">
              <GiChemicalDrop />
              <GrFormClose
                className="navHomeMobile__icon"
                onClick={() => setIsOpen(prev => !prev)}
              />
            </div>
            <NavItems setIsOpen={setIsOpen} />
          </nav>
        </>
      ) : (
        <nav className="navHomeMobile" style={{ height: 90 }}>
          <div className="navHomeMobile__topIcons">
            <GiChemicalDrop />
            <RiMenuFill
              className="navHomeMobile__icon"
              onClick={() => setIsOpen(prev => !prev)}
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default NavHomeMobile;
