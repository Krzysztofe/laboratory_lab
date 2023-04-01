import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../../redux/storeFeatures/tableReactionsSlice";
import { RootState } from "../../../redux/store";
import {
  inputsPrintDataFirst,
  inputsPrintDataSecond,
} from "./dataTableEditForm";

import { useValidationForm } from "../../../hooks/useValidationForm";

const TableEditForm = ({ formik }: any) => {
  const dispatch = useDispatch();

  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );

  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );
  const { validationForm } = useValidationForm(editedReaction);

  const handleInputChange = (e: ChangeEvent, key: any) => {
    const { name, value } = e.target;
    dispatch(handleChange([name, value]));
  };

  const inputsPrintData = isOpen ? inputsPrintDataFirst : inputsPrintDataSecond;

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
              classContainer={"editForm__textInputContainer"}
              classLabel={"editForm__textInputLabel"}
              classInput={"editForm__textInput"}
            />

            <div className="editForm__error">
              <small>
                {validationForm()[name as keyof typeof validationForm]}
              </small>
            </div>
          </td>
        );
      })}
    </>
  );
};

export default TableEditForm;
