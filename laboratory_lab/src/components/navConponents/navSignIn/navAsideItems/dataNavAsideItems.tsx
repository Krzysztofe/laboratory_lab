import { FaListUl } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";

export const links = [
  {
    link: "/",
    text: "Strona główna",
    icon: <AiFillHome />,
  },
  {
    link: "/reaction-form",
    text: "Formularz reakcji",
    icon: <FaWpforms />,
  },
  {
    link: "/reactions-list",
    text: "Lista reakcji",
    icon: <FaListUl />,
  },
];
