import { motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../../../data/firebaseConfig";
import { handleToggleNav } from "../../../../redux/storeFeatures/navHomeSlice";

const NavHomeUserItems = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const url = useLocation().pathname;

  const handleLogout = (): void => {
    auth.signOut();
    dispatch(handleToggleNav());
  };

  const isLoggedIn = user?.email;
  const windowWidth = window.innerWidth < 769;



  return (
    <>
      {!isLoggedIn && (
        <ul className="navHomeItems">
          <motion.li
            onClick={() => dispatch(handleToggleNav())}
            initial={windowWidth ? { opacity: 0, y: -40 } : {}}
            animate={windowWidth ? { opacity: 1, y: 0 } : {}}
            transition={windowWidth ? { delay: 0.6 } : {}}
          >
            {!isLoggedIn && url === "/" && (
              <Link to="/login" className="navHomeItems__item">
                Zaloguj / Rejestracja
              </Link>
            )}
          </motion.li>
        </ul>
      )}
      {isLoggedIn && (
        <ul className="navHomeItems">
          <motion.li
            initial={windowWidth ? { opacity: 0, y: -40 } : {}}
            animate={windowWidth ? { opacity: 1, y: 0 } : {}}
            transition={windowWidth ? { delay: 0.6 } : {}}
            onClick={handleLogout}
          >
            <Link to="" className="navHomeItems__item">
              Wyloguj: {user?.email}
            </Link>
          </motion.li>

          <motion.li
            onClick={() => dispatch(handleToggleNav())}
            initial={windowWidth ? { opacity: 0, y: -40 } : {}}
            animate={windowWidth ? { opacity: 1, y: 0 } : {}}
            transition={windowWidth ? { delay: 0.7 } : {}}
          >
            <Link to="reaction-form" className="navHomeItems__item">
              Wypełnij dziennik
            </Link>
          </motion.li>
        </ul>
      )}
    </>
  );
};

export default NavHomeUserItems;
