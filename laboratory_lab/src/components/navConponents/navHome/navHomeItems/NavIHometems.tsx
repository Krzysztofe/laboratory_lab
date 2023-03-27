import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { auth } from "../../../../data/firebaseConfig";
import { motion } from "framer-motion";
import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { links, signedOutLinks } from "./dataNavHomeItems";

export interface Props {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavHomeItems = (props: Props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleCloseMenu = (): void => {
    props.setIsOpen && props.setIsOpen(false);
  };

  const handleLogout = (): void => {
    auth.signOut();
    navigate("/");
    handleCloseMenu();
  };

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
              <HashLink smooth to={link.to} className="navHomeItems__item">
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
            className="navHomeItems__item"
          >
            Zalogowany: {user?.email}
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

          <motion.li
            onClick={handleLogout}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="" className="navHomeItems__item item--log">
              Wyloguj
            </Link>
          </motion.li>
        </ul>
      )}
    </>
  );
};

export default NavHomeItems;
