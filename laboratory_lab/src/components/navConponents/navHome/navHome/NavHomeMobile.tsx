import NavHomeItems from "../navHomeItems/NavIHomeItems";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";

const NavHomeMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <>
          <nav className="navHomeMobile">
            <div className="navHomeMobile__topIconContainer">
              <GrFormClose
                className="navHomeMobile__icon"
                onClick={() => setIsOpen(prev => !prev)}
              />
            </div>
            <NavHomeItems setIsOpen={setIsOpen} />
          </nav>
        </>
      ) : (
        <nav className="navHomeMobile">
          <div className="navHomeMobile__topIconContainer">
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
