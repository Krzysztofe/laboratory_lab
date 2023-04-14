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
      <ul className={`navAsideItems ${!props.isOpen && "navAsideItems__close"} `}>
        <li onClick={handleLogout} className="navAsideItems__signIn">
          Wyloguj: {user?.email}
        </li>

        {links.map(({ text, icon, link }) => (
          <li
            key={text}
            onClick={() => props.setIsOpen(prev => !prev)}
            className={"navAsideItems__item"}
          >
            <Link to={link}>
              <div className={"navAsideItems__icon"}>{icon}</div>
              <div className={"navAsideItems__name"}>{text}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavAsideItems;
