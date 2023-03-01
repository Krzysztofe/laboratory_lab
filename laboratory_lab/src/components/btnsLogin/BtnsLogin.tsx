import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Props } from "./modelBtnsLogin";

const BtnsLogin: FC<Props> = props => {
  return (
    <div className="btnsLogin">
      <Link to={props.link}>
        <button className="btnsLogin__btn">{props.textLeft}</button>
      </Link>

      <button type="submit" className="btnsLogin__btn">
        {props.textRight}
      </button>
    </div>
  );
};

export default BtnsLogin;
