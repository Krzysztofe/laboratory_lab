import { FC } from "react";
import { Link } from "react-router-dom";
import { Props } from "./modelBtnLink";

const BtnLink: FC<Props> = props => {
  return (
    <Link className={props.class} to={props.link} >
      <button >
        {props.text}</button>
    </Link>
  );
};

export default BtnLink;
