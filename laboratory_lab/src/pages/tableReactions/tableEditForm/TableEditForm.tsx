import { useState } from "react";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../../redux/storeFeatures/tableReactionsSlice";
import { RootState } from "../../../redux/store";
import {
  inputsPrintDataFirst,
  inputsPrintDataSecond,
} from "./dataTableEditForm";

import { useValidationEditForm } from "../tableEditForm/useValidationEditForm";

const TableEditForm = ({ formik }: any) => {
  const dispatch = useDispatch();

  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );

  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );
  const { validationEditForm } = useValidationEditForm(editedReaction);

  const handleInputChange = (e: ChangeEvent, key: any) => {
    const { name, value } = e.target;
    dispatch(handleChange([name, value]));
  };

  const inputsPrintData = isOpen ? inputsPrintDataFirst : inputsPrintDataSecond;

// console.log("edit", validationEditForm());


  return (
    <>
      {inputsPrintData.map(({ type, name }) => {
        return (
          <td key={name}>
            <TextInput
              text={""}
              type={type}
              name={name}
              value={editedReaction[name]}
              onChange={handleInputChange}
            />
            <small>
              {validationEditForm()[name as keyof typeof validationEditForm]}
            </small>
          </td>
        );
      })}
    </>
  );
};

export default TableEditForm;
