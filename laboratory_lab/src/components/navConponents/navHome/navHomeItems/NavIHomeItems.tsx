import { useMemo } from "react";
import { HashLink, HashLinkProps } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { auth } from "../../../../data/firebaseConfig";
import { motion, HTMLMotionProps } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { links, signedOutLinks } from "./dataNavHomeItems";
import { useMediaQuery } from "@material-ui/core";

export interface Props {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavHomeItems = (props: Props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const handleCloseMenu = (): void => {
    props.setIsOpen && props.setIsOpen(false);
  };

  const handleLogout = (): void => {
    auth.signOut();
    navigate("/");
    handleCloseMenu();
  };

  const scrollToHash = (hash: string): void => {
    const element = document.querySelector(hash);
    if (element) {
      const offset =
        element.getBoundingClientRect().top + window.pageYOffset - 86;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const memoizedNavHomeItems = useMemo(() => {
    return (
      <>
        <ul className="navHomeItems">
          {links.map(link => {
            return (
              <motion.li
                key={crypto.randomUUID()}
                onClick={handleCloseMenu}
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
        {!user?.email && (
          <ul className="navHomeItems">
            {signedOutLinks.map(link => {
              return (
                <motion.li
                  key={link.text}
                  onClick={handleCloseMenu}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: link.delay }}
                >
                  <Link to={link.to} className="navHomeItems__item">
                    {link.text}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        )}

        {user?.email && (
          <ul className="navHomeItems">
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={handleLogout}
            >
              <Link to="" className="navHomeItems__item">
                Wyloguj: {user?.email}
              </Link>
            </motion.li>

            <motion.li
              onClick={handleCloseMenu}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="reaction-form" className="navHomeItems__item">
                Wypełnij dziennik
              </Link>
            </motion.li>
          </ul>
        )}
      </>
    );
  }, [user]);

  return memoizedNavHomeItems
};

export default NavHomeItems;
