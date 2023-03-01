import React, { useState, useEffect } from "react";
import TextInput from "../../components/inputs/textInput/TextInput";
import BtnsLogin from "../../components/btnsLogin/BtnsLogin";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../data/firebaseConfig";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("ww@wp.pl");
  const [password, setPassword] = useState("wwwwww");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // console.log("", error);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && navigate("/user");
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/user"))
      .catch(error => alert("PP"));
  };

  return (
    <main className="main__login">
      {/* <div className="headerSpacer"></div> */}
      <h2 className="login__title">Zaloguj się</h2>
      <form onSubmit={handleSubmit} className="wrapper loginForm">
        <small>
          ww@wp.pl
          <br />
          wwwwww
        </small>

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

        {/* <p className="login__errors">{errors}</p> */}

        <BtnsLogin
          link={"/register"}
          textRight="Zaloguj się"
          textLeft="Załuż konto"
          // inputFocus={inputFocus}
        />
      </form>
    </main>
  );
};

export default Login;
