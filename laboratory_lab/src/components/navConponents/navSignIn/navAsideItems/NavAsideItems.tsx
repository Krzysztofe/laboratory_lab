import React, { FC } from "react";
import { Link } from "react-router-dom";
import { links } from "./dataNavAsideItems";
import { ModelNavAsideItems } from "./ModelNavAsideItems";

const NavAsideItems: FC<ModelNavAsideItems> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <ul
        className={` ${
          isOpen ? "navSingedIn__items" : "navSingedIn__items--closed"
        } `}
      >
        {links.map(item => (
          <li
            key={item.text}
            className="navSingedIn__item"
            onClick={() => setIsOpen(prev => !prev)}
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
