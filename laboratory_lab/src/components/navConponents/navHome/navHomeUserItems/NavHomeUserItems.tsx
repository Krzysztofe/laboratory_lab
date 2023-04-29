import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../../../data/firebaseConfig";
import { RootState } from "../../../../redux/store";
import { handleToggleNav } from "../../../../redux/storeFeatures/navHomeSlice";

const NavHomeUserItems = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const url = useLocation().pathname;
  const { isOpen } = useSelector((state: RootState) => state.navHome);

  const handleLogout = (): void => {
    auth.signOut();
    dispatch(handleToggleNav());
  };

  const isLoggedIn = user?.email;

  return (
    <>
      {!isLoggedIn && (
      
        <ul
          className={`navHomeItems navHomeItems--user ${
            isOpen && "navHomeItems--isOpen"
          }`}
        >
          <li onClick={() => dispatch(handleToggleNav())}>
            {!isLoggedIn && url === "/" && (
              <Link to="/login" className="navHomeItems__item">
                Zaloguj / Rejestracja
              </Link>
            )}
          </li>
        </ul>
      )}
      {isLoggedIn && (
        <ul
          className={`navHomeItems navHomeItems--user ${
            isOpen && "navHomeItems--isOpen"
          }`}
        >
          <li onClick={handleLogout}>
            <Link to="" className="navHomeItems__item">
              Wyloguj: {user?.email}
            </Link>
          </li>

          <li onClick={() => dispatch(handleToggleNav())}>
            <Link to="reaction-form" className="navHomeItems__item">
              Wypełnij dziennik
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavHomeUserItems;
