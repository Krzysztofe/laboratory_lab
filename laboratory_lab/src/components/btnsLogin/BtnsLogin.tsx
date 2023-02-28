import React, { FC } from "react";
import { Link } from "react-router-dom";
import {Props} from './modelBtnsLogin';


const BtnsLogin: FC<Props> = props => {
  return (
    <div className="btsLogin">
      <Link to={props.link}>
        <button className="btnLogin">{props.btnLeft}</button>
      </Link>

      {/* <button type="submit" onClick={props.inputFocus} className="btnLogin">
        {props.btnRight}
      </button> */}
    </div>
  );
};

export default BtnsLogin;
