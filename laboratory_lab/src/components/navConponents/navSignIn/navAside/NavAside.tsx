import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import NavAsideItems from "../navAsideItems/NavAsideItems";

const NavAside = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside>
      <nav className="navSingedIn">
        <div className="navSingedIn__top">
          {isOpen ? (
            <>
              <GrFormClose
                className="navSingedIn__icon"
                onClick={() => {
                  setIsOpen(prev => !prev);
                }}
              />
            </>
          ) : (
            <>
              <RiMenuFill
                className="navSingedIn__icon"
                onClick={() => {
                  setIsOpen(prev => !prev);
                }}
              />
            </>
          )}
        </div>
        <NavAsideItems isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </aside>
  );
};

export default NavAside;
