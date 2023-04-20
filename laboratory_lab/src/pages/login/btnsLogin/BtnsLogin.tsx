interface Props {
  btnLeft: string;
  btnRight: string;
  handleRegister: () => void;
}

const BtnsLogin = (props: Props) => {
  return (
    <div className="btnsLogin">
      <button
        type="button"
        onClick={props.handleRegister}
        className="btn btn--login"
      >
       {props.btnLeft}
      </button>
      <button type="submit" className="btn btn--login">
      {props.btnRight}
      </button>
    </div>
  );
};

export default BtnsLogin;
