import { FC } from "react";
import { Link } from "react-router-dom";
import { Props } from "./model";

const Btn: FC<Props> = props => {
  return (
    <Link to = {props.link}>
      <button className={props.class}>{props.text}</button>
    </Link>
  );
};

export default Btn;
