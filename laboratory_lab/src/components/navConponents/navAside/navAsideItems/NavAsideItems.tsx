import { Link } from "react-router-dom";
import { links } from "./dataNavAsideItems";

export interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavAsideItems = (props: Props) => {
  return (
    <>
      <ul
        className={` ${
          props.isOpen ? "navSingedIn__items" : "navSingedIn__items--closed"
        } `}
      >
        {links.map(item => (
          <li
            key={item.text}
            className="navSingedIn__item"
            onClick={() => props.setIsOpen(prev => !prev)}
          >
            <Link to={item.link}>
              <span className={"navSingedIn__item__name"}>{item.icon}</span>
              <span className={"navSingedIn__item__name"}>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavAsideItems;
