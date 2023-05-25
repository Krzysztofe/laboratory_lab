import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../data/firebaseConfig";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "./validationsLogin";
import { loginInitialvalue, registerInitialvalue } from "./dataLogin";


const useFormikInLoginComponent = () => {
  const navigate = useNavigate();

  const formikLogin = useFormik({
    initialValues:loginInitialvalue,
    validationSchema: loginValidationSchema,

    onSubmit: values => {
      const { email, password } = values;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigate("/reaction-form"))
        .catch(error =>
          Swal.fire({
            title: "Błąd",
            text: error.message,
            confirmButtonColor: "rgb(31, 180, 255)",
          })
        );
    },
  });

  useEffect(() => {
    {
      formikLogin.setFieldValue(
        "passwordRepeated",
        formikLogin.values.password
      );
    }
  }, [formikLogin.values.password]);

  const formikRegister = useFormik({
    initialValues: registerInitialvalue,
    validationSchema: registerValidationSchema,
    onSubmit: values => {
      const { email, password } = values;
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => navigate("/reaction-form"))
        .catch(error =>
          Swal.fire({
            title: "Błąd",
            text: error.message,
            confirmButtonColor: "rgb(31, 180, 255)",
          })
        );
    },
  });

  return { formikLogin, formikRegister };
};

export default useFormikInLoginComponent;
