import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../../data/firebaseConfig";
import { useNavigate } from "react-router-dom";


const useFormikInLoginComponent = () => {
  const navigate = useNavigate();

  const formikLogin = useFormik({
    initialValues: {
      email: "qq@wp.pl",
      password: "qqqqqq",
      passwordRepeated: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Podaj email").required("Email wymagany"),
      password: Yup.string().required("Hasło wymagane"),
      passwordRepeated: Yup.string()
        .required("Pwtórz hasło")
        .test("match", "Hasło niezgodne", function (value) {
          return this.parent.password === value;
        }),
    }),

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