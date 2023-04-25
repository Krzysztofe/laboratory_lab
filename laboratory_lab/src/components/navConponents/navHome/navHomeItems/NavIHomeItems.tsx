import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { RootState } from "../../../../redux/store";
import { handleToggleNav } from "../../../../redux/storeFeatures/navHomeSlice";
import NavHomeUserItems from "../navHomeUserItems/NavHomeUserItems";
import { navLinksData } from "./dataNavHomeItems";

export interface Props {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavHomeItems = () => {
  const dispatch = useDispatch();
  const url = useLocation().pathname;
  const { isOpen } = useSelector((state: RootState) => state.navHome);

  const selectedNavLinksData = () => {
    if (url === "/login") return [navLinksData[0]];

    if (url === "/") return navLinksData.slice(1, 3);
  };

  const scrollToHash = (hash: string): void => {
    const element = document.querySelector(hash);
    if (element) {
      const offset =
        element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <ul className={`navHomeItems ${isOpen && "navHomeItems--isOpen"}`}>
        {selectedNavLinksData()?.map(link => {
          return (
            <li
              key={crypto.randomUUID()}
              onClick={() => dispatch(handleToggleNav())}
            >
              <HashLink
                to={link.to}
                smooth
                className="navHomeItems__item"
                scroll={el => scrollToHash(link.to)}
              >
                {link.text}
              </HashLink>
            </li>
          );
        })}
      </ul>
      <NavHomeUserItems />
    </>
  );
};

export default NavHomeItems;
