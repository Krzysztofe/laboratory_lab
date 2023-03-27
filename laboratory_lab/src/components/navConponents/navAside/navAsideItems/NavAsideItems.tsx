import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../../data/firebaseConfig";
import { links } from "./dataNavAsideItems";

export interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavAsideItems = (props: Props) => {
  const [user] = useAuthState(auth);

  return (
    <>
      <ul
        className={`navAsideItems ${
          props.isOpen ? "navAsideItems__open" : "navAsideItems__close"
        } `}
      >
        <li className="navAsideSignIn">Zalogowany: {user?.email}</li>

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
