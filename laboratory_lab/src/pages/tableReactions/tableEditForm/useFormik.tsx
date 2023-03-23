import { useFormik } from "formik";
import * as Yup from "yup";
import { useUpdateReactionMutation } from "../../../services/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdate } from "../../../redux/storeFeatures/tableReactionsSlice";
import { RootState } from "../../../redux/store";

export const useFormikOperations = () => {
  const [updateReaction] = useUpdateReactionMutation();
  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );

//   console.log("use editreaction", editedReaction);
  const formik = useFormik({
    initialValues: { ...editedReaction },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(8, "Maksimum 6 znaków")
        .min(3, "Minimum 3 znaki")
        .required("Pole wymagane"),
      technics: Yup.string()
        .max(8, "Maksimum 6 znaków")
        .min(3, "Minimum 3 znaki")
        .required("Pole wymagane"),
    }),
    onSubmit: () => {},
  });
//   console.log("use formik", formik.values);
  return { formik };
};
