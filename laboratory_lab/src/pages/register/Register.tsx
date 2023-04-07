import { useEffect } from "react";
import TextInput from "../../components/inputs/textInput/TextInput";
import BtnsLogin from "../../components/btnsLogin/BtnsLogin";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../data/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && navigate("/reaction-form");
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordRepeated: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Podaj email").required("Email wymagany"),
      password: Yup.string()
        .required("Podaj hasło")
        .min(6, "Hasło min.6 znaków"),
      passwordRepeated: Yup.string()
        .required("Pwtórz hasło")
        .test("match", "Hasło niezgodne", function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit: values => {
      const { email, password } = values;
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => navigate("/reaction-form"))
        .catch(error => alert(error.code));
    },
  });

  return (
    <>
      <main className="wrapper login">
        <div style={{ height: 74 }}></div>
        <div className="login__opacity">
          <form onSubmit={formik.handleSubmit} className="wrapper loginForm">
            <h2 className="loginForm__title">Załuż konto</h2>
            <TextInput
              type={"text"}
              name={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              text={"Email"}
              placeholder={"Email"}
              classContainer={"loginForm__inputContainer"}
              classLabel={"loginForm__label"}
              classInput={"loginForm__input"}
            />

            <div className="loginForm__error">
              {formik.touched.email && formik.errors.email && (
                <small>{formik.errors.email}</small>
              )}
            </div>

            <TextInput
              type={"password"}
              name={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              text={"Hasło"}
              placeholder={"Hasło"}
              classContainer={"loginForm__inputContainer"}
              classLabel={"loginForm__label"}
              classInput={"loginForm__input"}
            />

            <div className="loginForm__error">
              {formik.touched.password && formik.errors.password && (
                <small>{formik.errors.password}</small>
              )}
            </div>

            <TextInput
              type={"password"}
              name={"passwordRepeated"}
              value={formik.values.passwordRepeated}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              text={"Powtórz hasło"}
              placeholder={"Hasło"}
              classContainer={"loginForm__inputContainer"}
              classLabel={"loginForm__label"}
              classInput={"loginForm__input"}
            />

            <div className="loginForm__error">
              {formik.touched.passwordRepeated &&
                formik.errors.passwordRepeated && (
                  <small>{formik.errors.passwordRepeated}</small>
                )}
            </div>

            <BtnsLogin
              link={"/login"}
              textRight="Załuż konto"
              textLeft="Zaloguj się"
              // inputFocus={inputFocus}
            />
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
