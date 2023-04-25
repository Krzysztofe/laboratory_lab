import NavHomeItems from "../navHomeItems/NavIHomeItems";

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
      <nav className="navHomeMobile">
        <div className="navHomeMobile__topIconContainer">
          {isOpen ? (
            <GrFormClose
              className="navHomeMobile__icon"
              onClick={() => dispatch(handleToggleNav())}
            />
          ) : (
            <RiMenuFill
              className="navHomeMobile__icon"
              onClick={() => dispatch(handleToggleNav())}
            />
          )}
        </div>
        <NavHomeItems />
      </nav>
    </>
  );
};

export default NavHomeMobile;
