import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../../data/firebaseConfig";
import { links } from "./dataNavAsideItems";
import { useDispatch } from "react-redux";
import { handleCleanEditForm } from "../../../../redux/storeFeatures/tableReactionsSlice";
export interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavAsideItems = (props: Props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    navigate("/");
    auth.signOut();
  };

  const dispatch = useDispatch();

  return (
    <>
      <ul
        className={`navAsideItems 
        ${!props.isOpen && "navAsideItems__close"} `}
      >
        <li
          onClick={() => {
            handleLogout();
            dispatch(handleCleanEditForm());
          }}
          className="navAsideItems__item navAsideItems__item--signIn"
        >
          <Link to={""}>
            <div className={"navAsideItems__icon"}></div>
            <div className={"navAsideItems__itemTitle"}>
              Wyloguj: {user?.email}
            </div>
          </Link>
        </li>

        {links.map(({ text, icon, link }) => (
          <li
            key={text}
            onClick={() => {
              props.setIsOpen(prev => !prev);
              {
                text !== "Lista reakcji" && dispatch(handleCleanEditForm());
              }
            }}
            className={"navAsideItems__item"}
          >
            <Link to={link}>
              <div className={"navAsideItems__icon"}>{icon}</div>
              <div className={"navAsideItems__itemTitle"}>{text}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavAsideItems;
