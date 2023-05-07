import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../components/inputs/textInput/TextInput";
import NavHomeSpacer from "../../../components/navHomeSpacer/NavHomeSpacer";
import { auth } from "../../../data/firebaseConfig";
import useFormikInLoginComponent from "../useFormikInLoginComponent";
import BtnsLogin from "../btnsLogin/BtnsLogin";

const IndexLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && navigate("/reaction-form");
    });
  }, []);

  const [isLogin, setIsLogin] = useState(true);

  const handleRegister = () => {
    setIsLogin(prev => !prev);
  };

  const { formikLogin, formikRegister } = useFormikInLoginComponent();

  const formik = isLogin ? formikLogin : formikRegister;

  return (
    <>
      <NavHomeSpacer />
      <main className="wrapper login">
        <div className="login__opacity">
          <form onSubmit={formik.handleSubmit} className="loginForm">
            <h2 className="loginForm__title">
              {isLogin ? "Logowanie" : "Rejestracja"}
            </h2>

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

            {isLogin && (
              <>
                <div className="loginForm__inputContainer"></div>
                <div className="loginForm__error"></div>
              </>
            )}

            {!isLogin && (
              <>
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
              </>
            )}
            {isLogin ? (
              <BtnsLogin
                handleRegister={handleRegister}
                btnLeft={"Rejestracja"}
                btnRight={"Logowanie"}
              />
            ) : (
              <BtnsLogin
                handleRegister={handleRegister}
                btnLeft={"Logowanie"}
                btnRight={"Rejestracja"}
              />
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default IndexLogin;
