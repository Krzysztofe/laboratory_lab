import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Podaj email").required("Email wymagany"),
  password: Yup.string().required("Hasło wymagane"),
});

export const registerValidationSchema = Yup.object({
  email: Yup.string().email("Podaj email").required("Email wymagany"),
  password: Yup.string().required("Podaj hasło").min(6, "Hasło min. 6 znaków"),
  passwordRepeated: Yup.string()
    .required("Pwtórz hasło")
    .test("match", "Hasło niezgodne", function (value) {
      return this.parent.password === value;
    }),
});
