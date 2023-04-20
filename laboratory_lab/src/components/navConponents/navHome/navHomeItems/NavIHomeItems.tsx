import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { handleToggleNav } from "../../../../redux/storeFeatures/navHomeSlice";
import NavHomeUserItems from "../navHomeUserItems/NavHomeUserItems";
import { navLinksData } from "./dataNavHomeItems";
export interface Props {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavHomeItems = () => {
  const dispatch = useDispatch();
  const url = useLocation().pathname;

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

  const windowWidth = window.innerWidth < 769;

  return (
    <>
      <ul className="navHomeItems">
        {selectedNavLinksData()?.map(link => {
          return (
            <motion.li
              key={crypto.randomUUID()}
              onClick={() => dispatch(handleToggleNav())}
              initial={windowWidth ? { opacity: 0, y: -40 } : {}}
              animate={windowWidth ? { opacity: 1, y: 0 } : {}}
              transition={windowWidth ? { delay: link.delay } : {}}
            >
              <HashLink
                to={link.to}
                smooth
                className="navHomeItems__item"
                scroll={el => scrollToHash(link.to)}
              >
                {link.text}
              </HashLink>
            </motion.li>
          );
        })}
      </ul>
      <NavHomeUserItems />
    </>
  );
};

export default NavHomeItems;
