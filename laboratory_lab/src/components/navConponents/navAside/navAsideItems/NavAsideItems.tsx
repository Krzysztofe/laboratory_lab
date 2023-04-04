import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../../data/firebaseConfig";
import { links } from "./dataNavAsideItems";

export interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavAsideItems = (props: Props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    auth.signOut();
    navigate("/");
  };

  return (
    <>
      <ul
        className={`navAsideItems ${
          props.isOpen ? "navAsideItems__open" : "navAsideItems__close"
        } `}
      >
        <li onClick={handleLogout} className="navAsideSignIn">
          Wyloguj: {user?.email}
        </li>

        {links.map(({ text, icon, link }) => (
          <li
            key={text}
            className="navAsideItem"
            onClick={() => props.setIsOpen(prev => !prev)}
          >
            <Link to={link} className={"navAsideItem__link"}>
              <div className={"navAsideItem__icon"}>{icon}</div>
              <div className={"navAsideItem__name"}>{text}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavAsideItems;
