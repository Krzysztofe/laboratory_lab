

 interface Props {
  handleRegister: ()=> void
}

const BtnsLogin = (props: Props) => {
  return (
    <div className="btnsLogin">
      <button type="button" onClick={props.handleRegister} className="btn btn--login">
        Rejestracja
      </button>
      <button type="submit" className="btn btn--login">
        Logowanie
      </button>
    </div>
  );
};

export default BtnsLogin;
