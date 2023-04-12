import { Link } from "react-router-dom";

export interface Props {
  label: string;
  class: string;
  link: string;
}


const BtnLink = (props:Props) => {
  return (
    <Link className={props.class} to={props.link} >
        {props.label}
    </Link>
  );
};

export default BtnLink;
