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
            <h2 className="loginForm__title">Załóż konto</h2>
            <TextInput
              type={"text"}
              name={"email"}
              value={formik.values.email}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label={"Email"}
              placeholder={"Email"}
              containerClass={"loginForm__inputContainer"}
              labelClass={"loginForm__label"}
              inputClass={"loginForm__input"}
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
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label={"Hasło"}
              placeholder={"Hasło"}
              containerClass={"loginForm__inputContainer"}
              labelClass={"loginForm__label"}
              inputClass={"loginForm__input"}
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
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label={"Powtórz hasło"}
              placeholder={"Hasło"}
              containerClass={"loginForm__inputContainer"}
              labelClass={"loginForm__label"}
              inputClass={"loginForm__input"}
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
            />
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
