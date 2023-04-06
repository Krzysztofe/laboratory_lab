import { Link } from "react-router-dom";

export interface Props {
  link: string;
  textRight: string;
  textLeft: string;
}

const BtnsLogin = (props: Props) => {
  return (
    <div className="btnsLogin">
      <Link to={props.link} className="btn btn--login">
        {props.textLeft}
      </Link>

      <button type="submit" className="btn btn--login">
        {props.textRight}
      </button>
    </div>
  );
};

export default BtnsLogin;
