import { Link } from "react-router-dom";

export interface Props {
  link: string;
  textRight: string;
  textLeft: string;
}


const BtnsLogin = (props:Props )=> {
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
