import { motion } from "framer-motion";
import { useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { auth } from "../../../../data/firebaseConfig";
import { handleToggleNav } from "../../../../redux/storeFeatures/navHomeSlice";
import { navLinksData } from "./dataNavHomeItems";
import NavHomeUserItems from "../navHomeUserItems/NavHomeUserItems";

export interface Props {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavHomeItems = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  const scrollToHash = (hash: string): void => {
    const element = document.querySelector(hash);
    if (element) {
      const offset =
        element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const memoizedNavHomeItems = useMemo(() => {
    return (
      <>
        <ul className="navHomeItems">
          {navLinksData.map(link => {
            return (
              <motion.li
                key={crypto.randomUUID()}
                onClick={() => dispatch(handleToggleNav())}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: link.delay }}
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
  }, [user]);

  return memoizedNavHomeItems;
};

export default NavHomeItems;
