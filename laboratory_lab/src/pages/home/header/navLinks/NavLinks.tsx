import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { auth } from "../../../../data/firebaseConfig";
import { motion } from "framer-motion";
import React, { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { links, signedOutLinks } from "./dataNavLinks";
import { Props } from "./modelNavLinks";

const NavLinks: FC<Props> = props => {
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
      <ul className="listItems">
        {links.map(link => {
          return (
            <HashLink key={link.delay} smooth to={link.to} className="link">
              <motion.li
                onClick={handleCloseMenu}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: link.delay }}
              >
                {link.text}
              </motion.li>
            </HashLink>
          );
        })}
      </ul>
      {!user?.email && (
        <ul className="logItems">
          {signedOutLinks.map(link => {
            return (
              <Link key={link.delay} to={link.to} className="link link--log">
                <motion.li
                  onClick={handleCloseMenu}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: link.delay }}
                >
                  {link.text}
                </motion.li>
              </Link>
            );
          })}
        </ul>
      )}

      {user?.email && (
        <ul className="logItems">
          <div className="link link--log link--hi">
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Zalogowany {user?.email}
            </motion.li>
          </div>

          <Link to="user" className="link link--log">
            <motion.li
              onClick={handleCloseMenu}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Panel urzytkownika
            </motion.li>
          </Link>
          <Link to="" className="link link--log">
            <motion.li
              onClick={handleLogout}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Wyloguj
            </motion.li>
          </Link>
        </ul>
      )}
    </>
  );
};

export default NavLinks;
