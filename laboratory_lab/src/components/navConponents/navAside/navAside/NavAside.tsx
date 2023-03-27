import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import NavAsideItems from "../navAsideItems/NavAsideItems";

const NavAside = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside>
      {isOpen ? (
        <>
          <GrFormClose
            className="navAside__icon"
            onClick={() => {
              setIsOpen(prev => !prev);
            }}
          />
        </>
      ) : (
        <>
          <RiMenuFill
            className="navAside__icon"
            onClick={() => {
              setIsOpen(prev => !prev);
            }}
          />
        </>
      )}
      <NavAsideItems isOpen={isOpen} setIsOpen={setIsOpen} />
    </aside>
  );
};

export default NavAside;
