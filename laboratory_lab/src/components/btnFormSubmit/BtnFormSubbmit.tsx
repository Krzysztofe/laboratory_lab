import React, { FC } from "react";
import { Props } from "./modelBtnFormSubmit";

const BtnFormSubbmit: FC<Props> = props => {
  return <button className={props.class}> {props.text}</button>;
};

export default BtnFormSubbmit;
