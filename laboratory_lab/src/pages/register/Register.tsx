import React from "react";
import { Typewriter } from "react-simple-typewriter";
import TextInput from "../../components/inputs/textInput/TextInput";
import BtnsLogin from "../../components/btnsLogin/BtnsLogin"

const Register = () => {
  return (
    <main className="main__login">
      {/* <div className="headerSpacer"></div> */}
      <h2 className="login__title">Załuż konto</h2>
      <form className="wrapper loginForm">
        <TextInput
          type={"text"}
          name={"email"}
          value={"uu"}
          text={"Email"}
          classLabel={"loginForm__label"}
          classInput={"loginForm__input"}
        />

        <TextInput
          type={"password"}
          name={"password"}
          value={"uf"}
          text={"Hasło"}
          classLabel={"loginForm__label"}
          classInput={"loginForm__input"}
        />

        <TextInput
          type={"password"}
          name={"passwordRepeated"}
          value={"uf"}
          text={"Powtórz hasło"}
          classLabel={"loginForm__label"}
          classInput={"loginForm__input"}
        />

        {/* <p className="login__errors">{errors}</p> */}

        <BtnsLogin
            link={"/login"}
            textRight="Załuż konto"
            textLeft="Zaloguj się"
            // inputFocus={inputFocus}
          />
      </form>
    </main>
  );
};

export default Register;
