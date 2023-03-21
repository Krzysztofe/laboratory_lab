import { FC } from "react";
import TextInput from "../../../components/inputs/textInput/TextInput";


interface Props {
  formik: any;
}

const Step_4: FC<Props> = ({ formik }) => {
  return (
    <>
      <TextInput
        type={"date"}
        name={"startDate"}
        value={formik.values.startDate}
        onChange={formik.handleChange}
        text={"Data rozpoczęcia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      {formik.touched.startDate && formik.errors.startDate ? (
        <small>{formik.errors.startDate}</small>
      ) : (
        <small></small>
      )}
      <TextInput
        type={"date"}
        name={"finishDate"}
        value={formik.values.finishDate}
        onChange={formik.handleChange}
        text={"Data ukończenia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      {formik.touched.finishDate && formik.errors.finishDate ? (
        <small>{formik.errors.finishDate}</small>
      ) : (
        <small></small>
      )}
      <TextInput
        type={"time"}
        name={"startTime"}
        value={formik.values.startTime}
        onChange={formik.handleChange}
        text={"Godzina rozpoczęcia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      {formik.touched.startTime && formik.errors.startTime ? (
        <small>{formik.errors.startTime}</small>
      ) : (
        <small></small>
      )}
      <TextInput
        type={"time"}
        name={"finishTime"}
        value={formik.values.finishTime}
        onChange={formik.handleChange}
        text={"Godzina zakończenia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      {formik.touched.finishTime && formik.errors.finishTime ? (
        <small>{formik.errors.finishTime}</small>
      ) : (
        <small></small>
      )}
    </>
  );
};

export default Step_4;
