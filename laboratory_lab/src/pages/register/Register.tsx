import React, { useState, useEffect } from "react";
import TextInput from "../../components/inputs/textInput/TextInput";
import BtnsLogin from "../../components/btnsLogin/BtnsLogin";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../data/firebaseConfig";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeated, setPasswordRepeated] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && navigate("/user");
    });
  }, []);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/user"))
      .catch(error => alert(error.code));
  };

  return (
    <main className="main__login">
      {/* <div className="headerSpacer"></div> */}
      <h2 className="login__title">Załuż konto</h2>
      <form onSubmit={handleSubmit} className="wrapper loginForm">
        <TextInput
          type={"text"}
          name={"email"}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          text={"Email"}
          placeholder={"Email"}
          classLabel={"loginForm__label"}
          classInput={"loginForm__input"}
        />

        <TextInput
          type={"password"}
          name={"password"}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          text={"Hasło"}
          placeholder={"Hasło"}
          classLabel={"loginForm__label"}
          classInput={"loginForm__input"}
        />

        <TextInput
          type={"password"}
          name={"passwordRepeated"}
          value={passwordRepeated}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordRepeated(e.target.value)
          }
          text={"Powtórz hasło"}
          placeholder={"Hasło"}
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
