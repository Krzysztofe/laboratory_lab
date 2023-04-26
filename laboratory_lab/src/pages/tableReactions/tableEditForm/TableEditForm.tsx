import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { RootState } from "../../../redux/store";
import { handleChange } from "../../../redux/storeFeatures/tableReactionsSlice";
import {
  inputsPrintDataFirst,
  inputsPrintDataSecond,
} from "./dataTableEditForm";
import { useValidationForm } from "../../../hooks/useValidationForm";
import { solventIdx } from "../../../utils/solventIdx";

const TableEditForm = () => {
  const dispatch = useDispatch();
  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const { validationForm } = useValidationForm(editedReaction);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    dispatch(handleChange([name, value]));
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputValue: string
  ) => {
    if (inputValue.length > 8) {
      e.preventDefault();
      return;
    }
  };
  const inputsPrintData = isOpen ? inputsPrintDataFirst : inputsPrintDataSecond;

  return (
    <>
      {inputsPrintData.map(({ type, name }) => {
        return (
          <td style={{ position: "relative" }} key={name}>
            <TextInput
              label={""}
              type={type}
              name={name}
              value={
                Array.isArray(editedReaction[name])
                  ? editedReaction[name].join(", ")
                  : editedReaction[name]
              }
              handleChange={handleInputChange}
              handleKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
                name === "solvents" && handleKeyPress(e, editedReaction[name])
              }
              containerClass={"editForm__textInputContainer"}
              labelClass={"editForm__textInputLabel"}
              inputClass={`editForm__textInput ${
                name === "solvents" && "editForm__textInput--solvents"
              }`}
            />

            {name === "solvents" && (
              <div className="editForm__printSolvents">
                {solventIdx(editedReaction[name])}
              </div>
            )}
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
