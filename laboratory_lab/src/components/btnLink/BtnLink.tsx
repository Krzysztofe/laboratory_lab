import { Link } from "react-router-dom";

export interface Props {
  text: string;
  class: string;
  link: string;
}


const BtnLink = (props:Props) => {
  return (
    <Link className={props.class} to={props.link} >
        {props.text}
    </Link>
  );
};

export default BtnLink;
