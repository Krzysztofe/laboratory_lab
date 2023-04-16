import NavHomeItems from "../navHomeItems/NavIHomeItems";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleNav } from "../../../../redux/storeFeatures/navHomeSlice";
import { RootState } from "../../../../redux/store";

const NavHomeMobile = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.navHome);


  return (
    <>
      {isOpen ? (
        <>
          <nav className="navHomeMobile">
            <div className="navHomeMobile__topIconContainer">
              <GrFormClose
                className="navHomeMobile__icon"
                onClick={() => dispatch(handleToggleNav())}
              />
            </div>
            <NavHomeItems />
          </nav>
        </>
      ) : (
        <nav className="navHomeMobile">
          <div className="navHomeMobile__topIconContainer">
            <RiMenuFill
              className="navHomeMobile__icon"
              onClick={() => dispatch(handleToggleNav())}
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default NavHomeMobile;
