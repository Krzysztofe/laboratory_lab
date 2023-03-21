import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { auth } from "../../../../data/firebaseConfig";
import { motion } from "framer-motion";
import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { links, signedOutLinks } from "./dataNavItems";
import { Props } from "./modelNavItems";

const NavItems: FC<Props> = props => {
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
              className="item"
            >
              <HashLink smooth to={link.to}>
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
                className="item"
              >
                <Link to={link.to}>{link.text}</Link>
              </motion.li>
            );
          })}
        </ul>
      )}

      {user?.email && (
        <ul className="navHomeItems">
          <motion.li
            className="item item--log item--hi"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Zalogowany: {user?.email}
          </motion.li>

          <motion.li
            onClick={handleCloseMenu}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="item item--log"
          >
            <Link to="reaction-form">Panel użytkownika</Link>
          </motion.li>

          <motion.li
            className="item item--log"
            onClick={handleLogout}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="" className="item item--log">
              Wyloguj
            </Link>
          </motion.li>
        </ul>
      )}
    </>
  );
};

export default NavItems;
