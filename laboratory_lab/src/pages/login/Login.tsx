import React, { useState, useEffect } from "react";
import TextInput from "../../components/inputs/textInput/TextInput";
import BtnsLogin from "../../components/btnsLogin/BtnsLogin";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../data/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && navigate("/reaction-form");
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "ww@wp.pl",
      password: "wwwwww",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Podaj email").required("Email wymagany"),
      password: Yup.string().required("Hasło wymagane"),
    }),
    onSubmit: values => {
      const { email, password } = values;
      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigate("/reaction-form"))
        .catch(error => alert("PP"));
    },
  });

  return (
    <main className="main__login">
      <h2 className="login__title">Zaloguj się</h2>
      <form onSubmit={formik.handleSubmit} className="wrapper loginForm">
        <small>
          ww@wp.pl
          <br />
          wwwwww
        </small>

        <TextInput
          type={"text"}
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          text={"Email"}
          placeholder={"Email"}
          classLabel={"loginForm__label"}
          classInput={"loginForm__input"}
        />
        {formik.touched.email && formik.errors.email ? (
          <small>{formik.errors.email}</small>
        ) : (
          <small></small>
        )}
        <TextInput
          type={"password"}
          name={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          text={"Hasło"}
          placeholder={"Hasło"}
          classLabel={"loginForm__label"}
          classInput={"loginForm__input"}
        />

        {formik.touched.password && formik.errors.password ? (
          <small>{formik.errors.password}</small>
        ) : (
          <small></small>
        )}

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
